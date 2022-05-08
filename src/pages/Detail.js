import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import DetailpageTitle from "../component/detailpage/DetailpageTitle";
import DetailpageRank from "../component/detailpage/DetailpageRank";
import gobackIcon from "../shared/icons/icnBackNormalBlack35.svg";
import shareIcon from "../shared/icons/icnShareBlack35.png";
import typeImg from "../shared/images/workout.png";
import personImg from "../shared/images/icnPersonGray36.png"
import { history } from "../redux/configureStore";
import Challenge from "../redux/modules/challenge";

const Detail = () => {
  // const location = useLocation();
  // const post = location.state.card;
  // console.log(post);

  return (
    <Container>
      <div className="nav"></div>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            history.back();
          }}
        >
          <img src={gobackIcon} alt="goback" />
        </div>
        <div id="share-icon">
          <img src={shareIcon} alt="shareIcon" />
        </div>
      </div>
      <TitleBox>
        <div id="title">
          <div id="title-up">느리게 살기 챌린지</div>
          <div id="title-down">
            <div id="type">공모전</div>
            <div id="startDate">5/10~</div>
          </div>
        </div>
        <div id="image">
          <img src={typeImg} alt="typeImg" width="127" height="159" />
        </div>
      </TitleBox>
      <ChallengeRoom>
        <div className="box">
          <div id="imgWrap">
            <img src={personImg} alt="personImg" width="36" height="36" />
          </div>
          <div id="roomInfo">12명</div>
          <div id="Infodetail">참가자</div>
        </div>
        <div className="box">
          <div id="imgWrap">
            <img src={personImg} alt="typeImg" width="36" height="36" />
          </div>
          <div id="roomInfo">3개</div>
          <div id="Infodetail">하루 평균 달성</div>
        </div>
        <div className="box">
          <div id="imgWrap">
            <img src={personImg} alt="typeImg" width="36" height="36" />
          </div>
          <div id="roomInfo">3자리</div>
          <div id="Infodetail">남은 자리</div>
        </div>
      </ChallengeRoom>
      <DetailpageTitle />
      <DetailpageRank />
      <NextButton>지금 시작하기</NextButton>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  max-height: 812px;
  max-width: 375px;
  height: 812px;
  width: 100%;
  border-left: 2px solid #3f3f3f;
  border-right: 2px solid #3f3f3f;
  .nav {
    width: 375px;
    height: 44px;
  }
  .top {
    height: 69px;
    width: 375px;
    border-top: 2px solid #3f3f3f;
    border-bottom: 2px solid #3f3f3f;
    .arrow {
      position: absolute;
      margin: 17px 0px 0px 30px;
      cursor: pointer;
    }
    #share-icon {
      position: absolute;
      margin: 17px 0px 0px 310px;
      cursor: pointer;
    }
  }
`;

const TitleBox = styled.div`
  width: 375px;
  height: 159px;
  display: flex;
  border-bottom: 2px solid #3f3f3f;
  #title {
    width: 242px;
    height: 159px;

    #title-up {
      width: 237px;
      height: 45px;
      color: #3f3f3f;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      padding-top: 36px;
      /* font-family: Gmarket Sans; */
    }
    #title-down {
      display: flex;
      #type {
        width: 73px;
        height: 30px;
        background-color: #3f3f3f;
        color: #ffffff;
        font-size: 20px;
        /* font-family: Gmarket Sans; */
        text-align: center;
        margin-left: 30px;
      }
      #startDate {
        width: 73px;
        height: 30px;
        background-color: #3f3f3f;
        color: #ffffff;
        font-size: 20px;
        /* font-family: Gmarket Sans; */
        text-align: center;
        margin-left: 10px;
      }
    }
  }
 
  #image {
    max-width: 117px;
    max-height: 159px;
    margin-left: -10px;
  }
`;

const ChallengeRoom = styled.div`
  display: flex;
  width: 377px;
  height: 127px;
  .box {
    text-align: center;
    display: grid;
    width: 125px;
    border-bottom: 2px solid #3f3f3f;
    border-right: 2px solid #3f3f3f;
    background-color: #ffffff;
    #imgWrap{
      padding-top: 10px;
    }
    #roomInfo {
      font-size: 20px;
      font-weight: 700;
      /* font-family: Gmarket Sans; */
      color: #3f3f3f;
    }
    #infoDetail {
      font-size: 14px;
      font-weight: 400;
      /* font-family: NanumSquare; */
      color: #3f3f3f;
    }
  }
`;

const NextButton = styled.button`
  position: fixed;
  bottom: 6.1em;
  left: 16.2em;
  width: 379px;
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
