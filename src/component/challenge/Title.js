import React from "react";
import { Meter } from "grommet";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import titleImage from "../../shared/images/Group 1924.png";
import styled from "styled-components";


const Title = ({ title, onChange }) => {
  return (
    <Container>
      <div
        className="arrow"
        onClick={() => {
          window.location.pathname = "/";
        }}
      >
        <img src={gobackIcon} alt="goback" />
      </div>
  
      <div className="progressBar">
        <Meter
          size="xsmall"
          height="67px"
          width="375px"
          type="bar"
          background="#FAFAFA"
          color="#1FB57E"
          value={50}
        />
      </div>
      <div className="title">
        <div className="title-text">챌린지 이름</div>
        <span className="sub-title">
         다른이의 시선을 사로잡을수 있는 
         <br/>챌린지 이름은 최대한 간결하게! (최대10자)
        </span>
      </div>
      <div className="input-title">
        <textarea
          className="input-area"
          value={title}
          placeholder="챌린지 이름을 작성합니다"
          maxLength="15"
          type="text"
          onChange={(e) => onChange(e.target.value)}
        ></textarea>
      </div>
      <div id="image">
        <img src={titleImage} alt="img" width="245" height="267" />
      </div>
    </Container>
  );
};

export default Title;

const Container = styled.div`

 
  .arrow {
    position: absolute;
    margin:15px 0px 0px 10px;
    cursor: pointer;
  }
 
  
  .progressBar {
    height: 67px;
    width: 100%;
    
  }
  .title {
    height: 120px;
    width: 100%;
    border-top: 2px solid #151419;
    border-bottom: 2px solid #151419;
    padding: 40px 0 0 30px ;
    .title-text {
      height: 35px;
      width: 130px;
      font-size: 24px;
      font-family: Gmarket SansMedium;
      color: #151419;
      font-weight: 800;
      
    }
    .sub-title {
      height: 54px;
      width: 300px;
      max-height: 54px;
      max-width: 295px;
      font-family: Gmarket Sans;
   
    }
  }
  .input-title {
    height: 127px;
    width: 100%;
    border-bottom: 2px solid #151419;
    .input-area {
      padding: 50px 0 0 0px;
      font-family: Gmarket SansMedium;
      height: 38px;
      width: 370px;
      outline: none;
      border: 0px;
      resize: none;
      text-align: center;
      font-size: 18px;
      color: #151419;
      ::placeholder {
        font-family: Gmarket Sans;
        color: #d9d9d9;
      }
    }
  }
  #image{
    margin: 84px 0 0 110px;
    position: fixed;
    bottom: 85px;
  }
`;
