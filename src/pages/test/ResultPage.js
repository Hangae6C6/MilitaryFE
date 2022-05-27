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
  const userInfo = useSelector((state) => state.user.user);
  const userId = userInfo.userId;
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
          {userNick}  님의 유형은
          <br/>{infoList[id].name}  입니다.
        </TypeDesc>
      </PersonDiv>
      <DescImg
        bgc={infoList[id].bgc} 
        src={infoList[id].image}
      >
        <P>{infoList[id].name}</P>
      </DescImg>
      <DescTxt />
      <NextButton
        onClick={testResultHandler}
      >
        홈으로 가기
      </NextButton>
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
  padding: 50px 0;
  background-color: #fff;
`;

const P = styled.p`
  font-size: 20px;

`;
const NextButton = styled.button`
   position: fixed;
  bottom: 0.2em;
  margin-left: -2px;
  padding: 32px 147px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #151419;
  border-top: 1px solid #151419;
  cursor: pointer;
`;
export default ResultPage;
