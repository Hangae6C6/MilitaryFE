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
      <DescImg src={infoList[resultNum.id].image} />
      <DescTxt />
      <NextBtn onClick={()=>{history.push('/')}}>홈으로 가기</NextBtn>
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

export default ResultPage;
