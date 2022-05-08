import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../../redux/modules/challenge";
import { Box, Select, Meter } from "grommet";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { history } from "../../redux/configureStore";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg"

const ChallengeDate = (props) => {
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
            width="375px"
            type="bar"
            background="#FAFAFA"
            color="#6dbb91"
            value={70}
          />
        </div>
        <div className="title">
          <div className="title-text">참여 인원수</div>
          <textarea
            className="titleInput"
            //  value={title}
            placeholder="00"
            maxLength="2"
            type="text"
          ></textarea>
          <div className="small-text">명</div>
        </div>
        <div className="title">
          <div className="title-text">시작일</div>
          <textarea
            className="titleInput"
            //  value={title}
            placeholder="05-14-2022"
            maxLength="10"
            type="text"
          ></textarea>
          <div className="from-text">부터</div>
        </div>
        <div className="title">
          <div className="title-text">종료일</div>
          <textarea
            className="titleInput"
            //  value={title}
            placeholder="05-15-2022"
            maxLength="10"
            type="text"
          ></textarea>
           <div className="until-text">까지</div>
        </div>
        <NextButton
        onClick={()=>{
            window.location.pathname= "challengeadd/type";
        }}
        >다음</NextButton>

      </Container>
    );
};

export default ChallengeDate;

const Container = styled.div`
  max-height: 812px;
  max-width: 375px;
  height: 812px;
  width: 100%;
  
  border: 2px solid #3f3f3f;

  .arrow{
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

    .title-text {
      height: 35px;
      width: 130px;
      font-size: 24px;
      color: #3f3f3f;
      font-family: Gmarket SansBold;
      margin: 40px 0px 0px 30px;
    }
    .titleInput {
      height: 54px;
      width: 310px;
      outline: none;
      margin-left: 25px;
      border: 0px;
      max-height: 54px;
      max-width: 310px;
      resize: none;
      font-size: 44px;
      font-family: Gmarket Sans;
      ::placeholder {
          color: #d9d9d9;
      }
      
    }
    .small-text {
        position: absolute;
        height: 33px;
        width: 47px;
        font-size: 24px;
        color: #656565;
        font-family: Gmarket Sans;
        margin: -39px 0px 0px 90px;
      }
      .from-text {
        position: absolute;
        height: 33px;
        width: 47px;
        font-size: 24px;
        color: #656565;
        font-family: Gmarket Sans;
        margin: -39px 0px 0px 305px;
      }
      .until-text {
        position: absolute;
        height: 33px;
        width: 47px;
        font-size: 24px;
        color: #656565;
        font-family: Gmarket Sans;
        margin: -39px 0px 0px 305px;
      }
  }

`;

const NextButton = styled.button`
  position: absolute;
  bottom: 29mm;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #b2b2b2;
  border-top: 2px solid #3f3f3f;
  &:hover {
    cursor: pointer;
    background-color: #3f3f3f;
  }
`;