import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Back } from "../../image/back.svg";
import { ReactComponent as Write } from "../../image/write.svg";
import { ActionCreators as mypageAction } from "../../redux/modules/mypage";
import user, { ActionCreators as userAction } from "../../redux/modules/user";
import { history } from "../../redux/configureStore";
import { Link } from "react-router-dom";

import { first, second, third, fourth } from "../../image/index";

//이미지/아이디/군종/닉네임/계급/계급딱지/디데이
const Mine = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user.userId); //dispatch중복돼서 useEffect중복되면서 일어나는 문제
  const userNickForBinding = useSelector((state) => state.user.user.userNick);
  const userCategoryForBinding = useSelector(
    (state) => state.mypage.armyCategory
  );
  const userRankForBinding = useSelector((state) => state.mypage.rank);
  const userEndDay = useSelector((state) => state.mypage.dday);
  const Dday = useSelector((state) => state.mypage.endDate);
  console.log(useSelector((state) => state.mypage));
  React.useEffect(() => {
    if (userId && userId.length) {
      console.log(userId);
      dispatch(mypageAction.getRankDB(userId));
      dispatch(mypageAction.getCategoryDB(userId));
      dispatch(mypageAction.getDDayDB(userId));
      dispatch(mypageAction.DdayDB(userId, userEndDay));
    }
  });

  return (
    <>
      <MyPage>
        <BackDiv
          onClick={() => {
            history.back();
          }}
        >
          <Back />
        </BackDiv>
        <MyP>마이페이지</MyP>
        <Link to={`/myPage/userProfile/${userId}`}>
          <Write />
        </Link>
      </MyPage>
      <Wrap>
        {/* <ImgDiv>
          <ProfImg />
        </ImgDiv> */}
        <PDiv>
          <Ddaydiv>D-{Dday}</Ddaydiv>
          <NameDiv>
            <DivDiv>
              <P padding="0" margin="0">
                {userNickForBinding}
              </P>
            </DivDiv>
          </NameDiv>
          <ProfList>
            {userCategoryForBinding} | {userRankForBinding}
          </ProfList>
        </PDiv>
        <RankImg
          src={
            userRankForBinding === "이병"
              ? first
              : userRankForBinding === "일병"
              ? second
              : userRankForBinding === "상병"
              ? third
              : fourth
          }
        />
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
`;

const MyPage = styled.div`
  text-align: center;
  align-content: center;
  border-bottom: 2px solid #151419;
  display: flex;
  justify-content: space-between;
`;

const BackDiv = styled.div`
  display: inline-block;
`;

const MyP = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  align-items: center;
  margin: 0;
  padding: 5px 0;
`;

const WriteDiv = styled.div`
  display: inline-block;
  cursor: pointer;
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
  margin: 30px auto 10px auto;
  font-weight: 700;
  display: inline-block;
  text-align: center;
`;

const Ddaydiv = styled.div`
  background-color: #151419;
  color: #fff;
  padding: 3px;
  margin: 30px 0 10 0;
`;

const ProfList = styled.p`
  margin: 5px;
  text-align: left;
  font-weight: 600;
`;

const NameDiv = styled.div`
  font-weight: 800;
  font-size: 30px;
  display: grid;
`;

const DivDiv = styled.div`
  display: flex;
`;

const P = styled.p`
  margin: 20px 0 0 0;
  padding: 0;
`;

const RankDiv = styled.div`
  margin: 0 auto;
`;

const RankImg = styled.div`
  background-image: url("${(props) => props.src}");
  width: 84px;
  height: 102px;
  background-size: cover;
  margin: 20px 40px 0 0;
`;

export default Mine;
