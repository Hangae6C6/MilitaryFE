import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ActionCreators as mypageAction } from "../../redux/modules/mypage";
import { ActionCreators as userAction } from "../../redux/modules/user";

//이미지/아이디/군종/닉네임/계급/계급딱지/디데이
const Mine = (props) => {
  const dispatch = useDispatch();
  // console.log(useSelector((state) => state));
  const userIDForBinding = useSelector((state) => state.user.user.userId);
  console.log(userIDForBinding);
  const userNickForBinding = useSelector((state) => state.user.user.userNick);
  const userCategoryForBinding = useSelector(
    (state) => state.mypage.userdata.armyCategory
  );
  const userRankForBinding = useSelector((state) => state.mypage.rank);
  const userDDayForBinding = useSelector((state) => state.mypage.dday);

  React.useEffect(() => {
    dispatch(mypageAction.getCateDB(userIDForBinding));
  }, [dispatch]);

  return (
    <>
      <MyPage>마이페이지</MyPage>
      <Wrap>
        <ImgDiv>
          <ProfImg/>
        </ImgDiv>
        <PDiv>
          <ProfList>{userIDForBinding}</ProfList>
          <ProfList>{userCategoryForBinding}</ProfList>
          <ProfList>{userNickForBinding}</ProfList>
        </PDiv>
        <RankDiv>
          <ProfList>{userRankForBinding}</ProfList>
          <RankImg Rank={userRankForBinding} />
          <ProfList>D-{userDDayForBinding}</ProfList>
        </RankDiv>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
`;

const MyPage = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  padding: 10px;
`;

const ImgDiv = styled.div`
  margin: auto 25px;
`;

const ProfImg = styled.div`
  background-image: url("http://www.urbanbrush.net/web/wp-content/uploads/edd/2018/03/web-20180302110610094677.png");
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-size: cover;
`;

const PDiv = styled.div`
  margin: 0 auto;
`;

const ProfList = styled.p`
  margin: 5px;
`;

const RankDiv = styled.div`
  margin: 0 auto;
`;

const RankImg = styled.div`
  --url: ${(props)=>props.Rank === "이병"
    ? "../../image/first.svg"
    : props.Rank === "일병"
    ? "../../image/second.svg"
    : props.Rank === "상병"
    ? "../../image/third.svg"
    : "../../image/forth.svg"};
  background-image: url(--url);
  width: 50px;
  height: 50px;
  background-size: cover;
`;
export default Mine;
