import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Back } from "../../image/back.svg";
import { ReactComponent as Write } from "../../image/write.svg";
import { ActionCreators as mypageAction } from "../../redux/modules/mypage";
import user, { ActionCreators as userAction } from "../../redux/modules/user";

import { first, second, third, fourth } from "../../image/index";

//이미지/아이디/군종/닉네임/계급/계급딱지/디데이
const Mine = (props) => {
  const dispatch = useDispatch();
  // console.log(useSelector((state) => state));
  const userIDForBinding = useSelector((state) => state.user.user.userId); //dispatch중복돼서 useEffect중복되면서 일어나는 문제
  const userNickForBinding = useSelector((state) => state.user.user.userNick);
  const userCategoryForBinding = useSelector(
    (state) => state.mypage.armyCategory
  );
  console.log(userCategoryForBinding);
  const userRankForBinding = useSelector((state) => state.mypage.rank);
  console.log(useSelector((state) => state.mypage));
  const userDDayForBinding = useSelector((state) => state.mypage.dday);

  React.useEffect(() => {
    if (userIDForBinding && userIDForBinding.length) {
      console.log(userIDForBinding); //여기서 리렌더링할때마다 dispatch중복호출, 호출할때 유저아이디있을때만 호출 가능
      dispatch(mypageAction.getCateDB(userIDForBinding)); //redux 디스패치 중복, if(id)
    }
  });

  return (
    <>
      <MyPage>
        <BackDiv>
          <Back />
        </BackDiv>
        <MyP>마이페이지</MyP>
        <WriteDiv>
          <Write />
        </WriteDiv>
      </MyPage>
      <Wrap>
        {/* <ImgDiv>
          <ProfImg />
        </ImgDiv> */}
        <PDiv>
          <Ddaydiv>D-{userDDayForBinding}</Ddaydiv>
          <ProfList>{userCategoryForBinding}</ProfList>
          <NameDiv>
            <DivDiv>
              <p padding="0" margin="0">
                {userNickForBinding}
              </p>
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
            </DivDiv>
          </NameDiv>
        </PDiv>
        {/* <ProfList>{userRankForBinding}</ProfList> */}
        {/* <ProfList>{userIDForBinding}</ProfList> */}

        <RankDiv></RankDiv>
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
  display: space-between;
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
  padding: 0;
`;

const WriteDiv = styled.div`
  display: inline-block;
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
`;

const NameDiv = styled.div`
  font-weight: 800;
  font-size: 30px;
  display: grid;
`;

const DivDiv = styled.div`
  display: flex;
`;

const RankDiv = styled.div`
  margin: 0 auto;
`;

const RankImg = styled.div`
  background-image: url("${(props) => props.src}");
  width: 28px;
  height: 34px;
  background-size: cover;
  margin: 34px 0 0 10px;
`;

export default Mine;
