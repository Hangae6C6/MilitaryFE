import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../../redux/modules/challenge";
import { Box, Select, Meter } from "grommet";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { history } from "../../redux/configureStore";

const ChallengeCreated = () => {
  return (
    <Container>
      <div className="top">
        <NextButton
          onClick={() => {
            window.location.pathname = "/";
          }}
        >
          시작하기
        </NextButton>
      </div>

      <div className="second-box">챌린지가 개설되었어요!</div>
      <div className="third-box">이모티콘</div>
      <div className="fouth-box">친구, 연인, 부대원들과 함께 하는 건 어때요?</div>
      <div className="link-box">
        <div className="link-text">우리 챌린지에 친구를 초대합니다!</div>
        <div className="kakao-link">카카오</div>
        <div className="copied-link">링크복사</div>
      </div>
    </Container>
  );
};

export default ChallengeCreated;

const Container = styled.div`
  max-height: 812px;
  max-width: 359px;
  height: 812px;
  width: 100%;
  box-sizing: border-box;
  margin-left: 8px;
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
      width: 130px;
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
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 6.1em;
  left: 16.2em;
  width: 376px;
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
