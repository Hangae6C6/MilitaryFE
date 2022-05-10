import React from "react";
import { Meter } from "grommet";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import styled from "styled-components";

const Title = ({title, onChange}) => {
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
      <div className="top"></div>
      <div className="progressBar">
        <Meter 
          size="xsmall"
          height="67px"
          width="375px"
          type="bar"
          background="#FAFAFA"
          color="#6dbb91"
          value={50}
        />
        </div>
      <div className="title">
        <div className="title-text">챌린지 이름</div>
        <textarea
          className="sub-title"
          placeholder="챌린지 이름은 변경이 어렵지만 &#13;&#10;재미있는 이름이 시선을 확~ 끌지말입니다!"
          maxLength="20"
          type="text"
        ></textarea>
      </div>
      <div className="input-title">
        <textarea
          className="input-area"
          value={title}
          placeholder="우리가 누굽니까악!"
          maxLength="10"
          type="text"
          onChange={e => onChange(e.target.value)}
        ></textarea>
      </div>
    </Container>
  );
};

export default Title;

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
  }
  .title {
    min-height: 120px;
    width: 100%;
    border-top: 2px solid #3f3f3f;
    border-bottom: 2px solid #3f3f3f;

    .title-text {
      height: 35px;
      width: 130px;
      font-size: 24px;
      font-family: Gmarket SansMedium;
      color: #3f3f3f;
      font-weight: 800;
      margin: 40px 0px 0px 30px;
    }
    .sub-title {
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
  .input-title {
    height: 280px;
    width: 100%;
    background-color: #f5f5f5;
    border-bottom: 2px solid #3f3f3f;
    .input-area {
      margin: 120px 66px;
      font-family: Gmarket SansBold;
      height: 38px;
      width: 280px;
      outline: none;
      border: 0px;
      resize: none;
      position: center;
      font-size: 28px;
      color: #3f3f3f;
      background-color: #f5f5f5;
      ::placeholder {
        font-family: Gmarket SansBold;
        color: #d9d9d9;
      }
    }
  }
`;