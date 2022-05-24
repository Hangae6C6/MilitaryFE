import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import { infoList } from "../../data/data";

import styled from "styled-components";
import DescImg from "../../element/test/DescImg";
import DescTxt from "../../element/test/DescTxt";
import Wrap from "../../element/test/Wrap";
import TypeDesc from "../../element/test/TypeDesc";
import { ReactComponent as Back } from "../../image/back.svg";
import { history } from "../../redux/configureStore";
import NextBtn from "../../element/test/NextBtn";

const ResultPage = (props) => {
  const resultNum = useParams();
  console.log(resultNum);

  const userNickForBinding = useSelector((state) => state.user.user.userNick);
  return (
    <Wrap>
      <QDiv>
        <Back
          onClick={() => {
            history.back();
          }}
          cursor="pointer"
        />
      </QDiv>
      <PersonDiv>
        <TypeDesc>
          <b>{userNickForBinding}</b>님의 유형은
          <b>{infoList[resultNum.id].name}</b>입니다.
        </TypeDesc>
      </PersonDiv>
      <DescImg
        bgc={infoList[resultNum.id].bgc}
        src={infoList[resultNum.id].image}
      >
        <P>{infoList[resultNum.id].name}</P>
      </DescImg>
      <DescTxt />
      <Next
        onClick={() => {
          history.push("/");
          window.location.reload();
        }}
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
