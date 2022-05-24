import React from "react";
import styled from "styled-components";

import { history } from "../../redux/configureStore";
import TEST from "../../image/TEST.png";
import { ReactComponent as Back } from "../../image/back.svg";

const GoTest = () => {
  return (
    <div>
      <GotestDiv>
        <HeaderDiv>
        <Back onClick={()=>{history.back()}} cursor='pointer' />
          <MatchP>나는 어떤 군인이 어울릴까?</MatchP>
        </HeaderDiv>
        <TestImg src={TEST} />
      </GotestDiv>
    </div>
  );
};

const GotestDiv = styled.div`
  border-bottom: 2px solid #151419;
  font-family: NanumSquare;
`;
const HeaderDiv = styled.div`
  height: 150px;
  width: 100%;
  padding: 30px 0;
`;
const TestImg = styled.img`
  height: 294.5px;
  border-top: 2px solid #151419;
  border-bottom: 2px solid #151419;
`;

const MatchP = styled.p`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
`;
export default GoTest;
