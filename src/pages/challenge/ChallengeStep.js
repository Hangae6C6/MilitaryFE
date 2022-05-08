import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../../redux/modules/challenge";
import { Box, Select, Meter } from "grommet";
import { Close } from "grommet-icons";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { history } from "../../redux/configureStore";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg"
import deleteIcon from "../../shared/icons/icnCloseBlack32.svg"
import addIcon from "../../shared/icons/icnPlusBlack32.svg"

const ChallengeStep = () => {
  return (
    <Container>
         <div className="arrow"
         onClick={()=>{
            history.back();
        }}>
          <img src={gobackIcon} alt='goback'/>
        </div>
      <div className="top"></div>
      <div className="progressBar">
        <Meter
          size="xsmall"
          height="67px"
          width="359px"
          type="bar"
          background="#FAFAFA"
          color="#6dbb91"
          value={90}
        />
      </div>
      <div className="title">
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
        <img src={addIcon} alt='addIcon'/>
        </div>
        <textarea
          className="step-input"
          //  value={title}
          placeholder="ex) 하루에 책 2장씩 읽기"
          maxLength="20"
          type="text"
        ></textarea>
        <div className="step-num"></div>
      </div>
      <div className="box">
        <div className="delete-btns">
          <img src={deleteIcon} alt='deleteIcon'/>
        </div>
        <div
          className="step-inputs"
        >하루에 책 2장씩 읽기</div>
        <div className="step-nums">1</div>
      </div>
      <div className="box">
        <div className="delete-btns">
        <img src={deleteIcon} alt='deleteIcon'/>
        </div>
        <div
          className="step-inputs"
        >하루에 책 4장씩 읽기</div>
        <div className="step-nums">2</div>
      </div>

      <NextButton
        onClick={() => {
          window.location.pathname = "challengeadd/created";
        }}
      >
        다음
      </NextButton>
    </Container>
  );
};

export default ChallengeStep;

const Container = styled.div`
  max-height: 812px;
  max-width: 359px;
  height: 812px;
  width: 100%;
  box-sizing: border-box;
  margin-left: 8px;
  border-left: 2px solid #3f3f3f;
  border-right: 2px solid #3f3f3f;
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
    height: 66px;
    width: 100%;
    border-bottom: 3px solid #3f3f3f;
  }
  .title {
    min-height: 120px;
    width: 100%;
    border-bottom: 2px solid #3f3f3f;

    .title-text {
      height: 35px;
      width: 230px;
      font-size: 24px;
      color: #3f3f3f;
      font-weight: 800;
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
    }
  }

  .boxes {
    display: flex;
    width: 357px;
    height: 127px;
    border-bottom: 2px solid #3f3f3f;
    .delete-btn {
      position: absolute;
      margin: 10px 0px 0px 320px;
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
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: center;
      ::placeholder {
        color: #d9d9d9;
        text-align: center;
      }
    }
    .step-num {
      position: absolute;
      margin: 33px 0px 0px 20px;
      font-size: 50px;
      font-weight: 300;
      font-weight: lighter;
      color: #3f3f3f;
    }
  }
  .box {
    display: flex;
    width: 357px;
    height: 127px;
    border-bottom: 2px solid #3f3f3f;
    .delete-btns {
      position: absolute;
      margin: 10px 0px 0px 320px;
      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
    .step-inputs {
      height: 30px;
      width: 260px;
      max-width: 260px;
      margin: 50px 0 0 50px;
      font-size: 16px;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      text-align: center;
    }
    .step-nums {
      position: absolute;
      margin: 33px 0px 0px 20px;
      font-size: 50px;
      font-weight: 300;
      font-weight: lighter;
      color: #3f3f3f;
    }
  }
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 6.1em;
  left: 16.1em;
  width: 378px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  background-color: #b2b2b2;
  border-top: 2px solid #3f3f3f;

  &:hover {
    cursor: pointer;
    background-color: #3f3f3f;
  }
`;