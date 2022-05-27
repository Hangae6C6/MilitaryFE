import React from "react";
import styled from "styled-components";
import img from "../../shared/images/signupdone.png";

const SignupDone = () => {
  return (
    <Container>
        
      <div className="top">
      
      </div>
      <div id="title-box">
        <p id="p">솔저챌린저스</p>
      </div>
      <div className="second-box">회원가입을 명 받았습니다!</div>
      <div className="third-box">
      

        
      </div>
        <img id="pic" src={img} alt="img" width="245" height="330" />
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
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: 4px solid #151419;
  border-top: 2px solid #151419;
  .top {
    height: 69px;
    width: 100%;
    border-top: 4px solid #ffffff;
    background-color: #151419;
  }

  #title-box {
    width: 100%;
    height: 159px;
    display: flex;
    border-top: 2px solid #151419;
    background-color: #151419;

    #p {
      font-size: 34px;
      font-family: Gmarket SansBold;
      margin: 35px auto;
      color: #ffffff;
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
    border-top: #151419 4px solid;
  }
  #pic{
  position: fixed;
  bottom: 5em;
  padding-left: 90px;

  }
`;


const NextButton = styled.button`
  position: fixed;
  bottom: 0.2em;
  margin-left: -4px;
  padding: 32px 164px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #151419;
  border-top: 1px solid #151419;
  cursor: pointer;
`;
