import React from "react";
import styled from "styled-components";
import "./DetailFont.css";

const DetailpageTitle = () => {
  return (
    <ChallengeName>
      <div id="top">
        <div id="title">느리게 살기 챌린지</div>
      </div>
      <Astep>
        <div id="stepTitle">첫째날 책 100장 까지 읽기</div>
        <div id="checkBox"></div>
      </Astep>
      <Astep>
        <div id="stepTitle">둘째날 책 200장 까지 읽기</div>
        <div id="checkBox"></div>
      </Astep>
      <Astep>
        <div id="stepTitle">셋째날 책 끝 까지 다 읽기</div>
        <div id="checkBox"></div>
      </Astep>
    </ChallengeName>
  );
};

export default DetailpageTitle;

const ChallengeName = styled.div`
  #top {
    width: 375px;
    height: 80px;
    background-color: #6dbb91;
    border-bottom: 2px solid #3f3f3f;
    #title {
      color: #3f3f3f;
      font-size: 24px;
      font-family: Gmarket SansBold;
      padding: 35px 0 0 36px;
    }
  }
`;

const Astep = styled.div`
  width: 375px;
  height: 62px;
  border-bottom: 2px solid #3f3f3f;
  display: flex;
  #stepTitle {
    font-family: NanumSquareMedium;
    color: #3f3f3f;
    font-size: 16px;
    width: 280px;
    height: 22px;
    margin: 20px 0 0 26px;
  }
  #checkBox {
    width: 22px;
    height: 22px;
    margin: 20px 20px 0 10px;
    border: 1px solid #3f3f3f;
    &:hover{
        cursor: pointer;
        background-color: #3f3f3f;
    }
  }
`;
