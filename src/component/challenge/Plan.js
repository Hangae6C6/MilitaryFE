import React from "react";
import styled from "styled-components";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import deleteIcon from "../../shared/icons/icnCloseBlack32.svg";
import addIcon from "../../shared/icons/icnPlusBlack32.svg";

import { Meter } from "grommet";

const Plan = ({ plan, onBack }) => {
  return (
    <Container>
      <div className="arrow" onClick={onBack}>
        <img src={gobackIcon} alt="goback" />
      </div>
      <div className="top"></div>
      <div className="progressBar">
        <Meter
          size="xsmall"
          height="67px"
          width="375px"
          type="bar"
          background="#FAFAFA"
          color="#6dbb91"
          value={90}
        />
      </div>

      <div className="title">
        <div id="type">공모전</div>
        <div className="title-text">목표를 위한 STEP</div>

        <textarea
          className="titleInput"
          //  value={title}
          placeholder="쉽게 시작할 수 있는 할일을 적고 실천한다면 &#13;&#10;큰 목표를 이룰 수 있지 말입니다"
          maxLength="0"
          type="text"
        ></textarea>
      </div>
      <div className="boxes">
        <div className="delete-btn">
          <img src={addIcon} alt="addIcon" />
        </div>
        <textarea
          className="step-input"
          //  value={title}
          placeholder="ex) 하루에 책 2장씩 읽기"
          maxLength="20"
          type="text"
        ></textarea>
      </div>
      <Wrap>
        <div className="box">
          <div className="step-nums">1</div>
          <div className="step-inputs">하루에 책 2장씩 읽기</div>
          <div className="delete-btns">
            <img src={deleteIcon} alt="deleteIcon" />
          </div>
        </div>
      </Wrap>
    </Container>
  );
};

export default Plan;

const Container = styled.div`
  .arrow {
    position: absolute;
    margin: 60px 0px 0px 10px;
    cursor: pointer;
  }
  .top {
    height: 44px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;
  }
  .progressBar {
    height: 67px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;
  }
  .title {
    min-height: 120px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;
    #type {
      position: absolute;
      width: 78px;
      height: 30px;
      background-color: #3f3f3f;
      color: #e5e5e5;
      font-size: 24px;
      text-align: center;
      margin-left: 240px;
      font-family: Gmarket Sans;
    }
    .title-text {
      height: 35px;
      width: 230px;
      font-size: 24px;
      color: #3f3f3f;
      font-family: Gmarket SansBold;
      margin: 40px 0px 0px 30px;
    }
    .titleInput {
      height: 54px;
      width: 300px;
      outline: none;
      margin-left: 30px;
      border: 0px;
      max-height: 54px;
      max-width: 295px;
      resize: none;
      font-size: 15px;
      font-family: Gmarket Sans;
    }
  }

  .boxes {
    display: flex;
    width: 375px;
    height: 127px;
    border-bottom: 2px solid #3f3f3f;
    .delete-btn {
      position: absolute;
      margin: 10px 0px 0px 330px;
      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
    .step-input {
      height: 30px;
      width: 260px;
      outline: none;
      border: 0px;
      max-width: 260px;
      resize: none;
      margin: 50px 0 0 50px;
      font-size: 16px;
      font-family: NanumSquare;
      text-align: center;
      ::placeholder {
        color: #d9d9d9;
        text-align: center;
      }
    }
  }
  .box {
    display: flex;
    width: 375px;
    height: 127px;
    border-bottom: 2px solid #3f3f3f;
    .delete-btns {
      margin: 10px 10px 0 0;

      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
    .step-inputs {
      height: 30px;
      width: 260px;
      max-width: 260px;
      margin: 50px 0 0 10px;
      font-size: 16px;
      font-family: NanumSquareMedium;
      text-align: center;
    }
    .step-nums {
      width: 22px;
      height: 69px;
      margin: 30px 0px 0px 30px;
      font-size: 50px;
      font-family: Gmarket Sans;
      color: #3f3f3f;
    }
  }
`;

const Wrap = styled.div`
  overflow: auto;
  max-height: 371px;
  max-width: 375px;
  height: 100%;
  width: 100%;
`;
