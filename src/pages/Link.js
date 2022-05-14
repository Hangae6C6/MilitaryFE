import React from "react";
import {useParams} from "react-router-dom"
import styled from "styled-components";
import img from "../shared/images/imgChallengeCompleted335.png";


const Link = () => {
const {challengeId} = useParams();


  return (
    <Container>
      <div className="top">
        <NextButton
          onClick={() => {
            window.location.pathname = `/detailPage/${challengeId}`;
          }}
        >
          시작하기
        </NextButton>
      </div>

      <div className="second-box">챌린지가 개설되었어요!</div>
      <div className="third-box">
        <img src={img} alt="img" width="335" height="280" />
      </div>
      <div className="fourth-box">
        친구, 연인, 부대원들과 함께 하는 건 어때요?
      </div>
      <div className="link-box">
        <div className="link-text">우리 챌린지에 친구를 초대합니다!</div>
        <div className="links">
          <div className="kakao-link">카카오</div>
          <div className="copied-link">링크복사</div>
        </div>
      </div>
    </Container>
  );
};

export default Link;

const Container = styled.div`
  max-height: 812px;
  max-width: 375px;
  height: 812px;
  width: 100%;
  border: 4px solid #3f3f3f;

  .top {
    width: 375px;
    height: 100px;
  }
  .second-box {
    width: 287px;
    height: 44px;
    font-family: Gmarket SansBold;
    font-size: 28px;
    color: #3f3f3f;
    font-weight: bold;
    margin: 26px 45px 0px;
  }
  .third-box {
    margin: 16px 20px 0px;
  }
  .fourth-box {
    width: 290px;
    height: 31px;
    font-family: NanumSquare;
    font-weight: 700;
    margin: 16px 47px 0px;
  }
  .link-box {
    width: 336px;
    height: 134px;
    border: 4px solid #3f3f3f;
    margin: 121px 16px 0px;
    .link-text {
      height: 45px;
      width: 100%;
      font-size: 18px;
      font-weight: bold;
      padding-top: 20px;
      font-family: Gmarket SansBold;
      border-bottom: 2px solid #3f3f3f;
      text-align: center;
    }
    .links {
      display: flex;
      .kakao-link {
        width: 166px;
        height: 46px;
        border-right: 2px solid #3f3f3f;
        text-align: center;
        padding-top: 23px;
        &:hover {
          cursor: pointer;
          background-color: #3f3f3f;
          color: #ffffff;
        }
      }
      .copied-link {
        width: 168px;
        height: 46px;
        text-align: center;
        padding-top: 23px;
        &:hover {
          cursor: pointer;
          background-color: #3f3f3f;
          color: #ffffff;
        }
      }
    }
  }
`;

const NextButton = styled.button`
  position: absolute;
  width: 100px;
  height: 30px;
  border: none;
  outline: none;
  color: #6dbb91;
  font-family: Gmarket SansMedium;
  font-size: 18px;
  font-weight: 600;
  margin: 64px 0px 0px 264px;
  background-color: #ffffff;

  &:hover {
    cursor: pointer;
    background-color: #3f3f3f;
    color: #ffffff;
  }
`;
