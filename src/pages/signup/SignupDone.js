import React from "react";
import styled from "styled-components";
import img from "../../shared/images/imgChallengeCompleted335.png";


const SignupDone = () => {
  return (
    <Container>
      <div className="nav"></div>
      <div className="top"></div>
      <div id="title-box">
        <p id="p">필승 챌린지</p>
      </div>
      <div className="second-box">회원가입을 명 받았습니다!</div>
      <div className="third-box">
        <img src={img} alt="img" width="335" height="280" />
      </div>
      <NextButton
        onClick={() => {
          window.location.pathname = "/";
        }}
      >
        홈으로
      </NextButton>
    </Container>
  );
};

export default SignupDone;

const Container = styled.div`
height: 100vh;
  max-width: 375px;
  width: 100%;
  border: 4px solid #151419;
  .nav {
    width: 375px;
    height: 44px;
    background-color: #151419;
  }
  .top {
    height: 69px;
    width: 375px;
    border-top: 4px solid #151419;
  }
  #title-box {
    width: 375px;
    height: 159px;
    display: flex;
    border-top: 4px solid #151419;
    border-bottom: 4px solid #151419;
    background-color: #1FB57E;

    #p {
      font-size: 34px;
      font-family: Gmarket SansBold;
      margin: 65px auto;
      color: #151419;
    }
  }
  .second-box {
    
    height: 44px;
    font-family: Gmarket SansBold;
    font-size: 24px;
    color: #151419;
    font-weight: bold;
    margin: 26px 45px 0px;
    
    
  }
  .third-box {
    box-sizing: border-box;
    width: 100%;
    height: 500px;
    padding: 50px 0 0 20px;
    border-top: #151419 4px solid;
  }
  
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 20.7mm;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #151419;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #ffffff;
  border-top: 4px solid #151419;
  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #1FB57E;
  }
`;
