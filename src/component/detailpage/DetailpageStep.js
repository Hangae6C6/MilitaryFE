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
        <div id="stepTitle">땡땡책 100쪽 까지 읽기</div>
        <div id="checkBox"></div>
      </Astep>
      <Astep>
        <div id="stepTitle">땡땡책 100쪽 까지 읽기</div>
        <div id="checkBox"></div>
      </Astep>
      <Astep>
        <div id="stepTitle">땡땡책 100쪽 까지 읽기</div>
        <div id="checkBox"></div>
      </Astep>
    </ChallengeName>
  );
};

export default DetailpageTitle;

const ChallengeName = styled.div`
display: table-row;
  #top {
    width: 375px;
    height: 80px;
    background-color: #1FB57E;
    border-bottom: 2px solid #151419;
    #title {
      color: #151419;
      font-size: 24px;
      font-family: Gmarket SansBold;
      padding: 35px 0 0 36px;
    }
  }
`;

const Astep = styled.div`
  width: 375px;
  height: 62px;
  border-bottom: 2px solid #151419;
  display: flex;
  #stepTitle {
    font-family: NanumSquareMedium;
    color: #151419;
    font-size: 16px;
    width: 280px;
    height: 22px;
    margin: 20px 0 0 26px;
  }
  #checkBox {
    width: 22px;
    height: 22px;
    margin: 20px 20px 0 10px;
    border: 1px solid #151419;
    &:hover{
        cursor: pointer;
        background-color: #151419;
    }
  }
`;
