import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { infoList } from "../../data/data";
import { ActionCreators as testResultActions } from "../../redux/modules/mypage";
import styled from "styled-components";
import DescImg from "../../element/test/DescImg";
import DescTxt from "../../element/test/DescTxt";
import Wrap from "../../element/test/Wrap";
import TypeDesc from "../../element/test/TypeDesc";
import { history } from "../../redux/configureStore";
import Back from "../../image/back.svg";

const ResultPage = (props) => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const result = infoList[id].name;
  console.log(result)
  const userInfo = useSelector((state) => state.user.user);
  const userId = userInfo.userId;
  console.log(userId);
  const userNick = userInfo.userNick;

  const testResultHandler = () =>{
    dispatch(testResultActions.addTestResultDB(userId, result));
  }

  return (
    <Wrap>
      <QDiv>
      <BackIcon
            src={Back}
            onClick={() => {
              history.back();
            }}
          />
      </QDiv>
      <PersonDiv>
        <TypeDesc>
          <b>{userNick}</b>  님의 유형은
          <b>{infoList[id].name}</b>  입니다.
        </TypeDesc>
      </PersonDiv>
      <DescImg
        bgc={infoList[id].bgc}
        src={infoList[id].image}
      >
        <P>{infoList[id].name}</P>
      </DescImg>
      <DescTxt />
      <Next
        onClick={testResultHandler}
      >
        홈으로 가기
      </Next>
    </Wrap>
  );
};

const QDiv = styled.div`
  justify-content: center;
  border-bottom: 2px solid #151419;
  box-sizing: border-box;
  height: 81px;
`;
const BackIcon = styled.img`
  z-index: 1;
  position: absolute;
  padding: 15px 0 0 15px;
  cursor: pointer;
`;

const PersonDiv = styled.div`
  height: 100px;
  width: 100%;
  padding: 15px 0;
`;

const P = styled.p`
  font-size: 20px;

`;
const Next = styled.div`
  font-family: NanumSquare;
  font-weight: bold;
  width: 375px;
  height: 89px;
  text-align: center;
  line-height: 48px;
  background-color: #151419;
  bottom: 0px;
  position: fixed;
  color: #ffffff;
  cursor: pointer;
`;

export default ResultPage;
