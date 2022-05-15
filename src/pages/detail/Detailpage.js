import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionCreators as postActions } from "../../redux/modules/main";
import styled from "styled-components";
import DetailpageStep from "../../component/detailpage/DetailpageStep";
import DetailpageProgress from "../../component/detailpage/DetailpageProgress";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import shareIcon from "../../shared/icons/icnShareBlack35.png";
import typeImg from "../../shared/images/workout.png";
import personImg from "../../shared/images/icnPersonGray36.png";
import { history } from "../../redux/configureStore";

const Detail = () => {
  const dispatch = useDispatch();
  let { challengeId } = useParams();
  const cardList = useSelector((state) => state.card.cards);
  const user = useSelector((state) => state.user.user);
  const card = cardList.filter((value) => value.challengeNum == challengeId);
  
  React.useEffect(() => {
    dispatch(postActions.getPostDB());
    
  }, [dispatch]);
  
  console.log(card)
  return (
    <Container>
      <div className="nav"></div>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            window.location.pathname = "/";
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
          <div id="title-up">{card.challengeTitle}</div>
          <div id="title-down">
            <div id="type">{card.challengeType}</div>
            <div id="startDate">{card.challengeStartDate}~</div>
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
      <DetailpageProgress />
      <DetailpageStep />
      <NextButton  onClick={() => {
            if (user.userId) {
              window.location.pathname = `/detail/chat/${challengeId}`;
            } else {
              window.location.pathname = "/login";
            }
          }}>채팅하기</NextButton>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: block;
  max-height: 100%;
  max-width: 375px;
  height: 100%;
  width: 100%;
  border: 2px solid #151419;

  .nav {
    width: 375px;
    height: 44px;
  }
  .top {
    height: 69px;
    width: 375px;
    border-top: 2px solid #151419;
    border-bottom: 2px solid #151419;
    .arrow {
      position: absolute;
      margin: 17px 0px 0px 20px;
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
  border-bottom: 2px solid #151419;
  #title {
    width: 242px;
    height: 159px;

    #title-up {
      width: 237px;
      height: 45px;
      color: #151419;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      padding-top: 36px;
      font-family: Gmarket SansBold;
    }
    #title-down {
      display: flex;
      #type {
        width: 73px;
        height: 30px;
        background-color: #151419;
        color: #ffffff;
        font-size: 20px;
        font-family: Gmarket Sansmedium;
        text-align: center;
        line-height: 30px;
        margin-left: 20px;
      }
      #startDate {
        width: 73px;
        height: 30px;
        background-color: #151419;
        color: #ffffff;
        font-size: 20px;
        font-family: Gmarket Sansmedium;
        line-height: 30px;
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
    border-bottom: 2px solid #151419;
    border-right: 2px solid #151419;
    background-color: #ffffff;
    #imgWrap {
      padding-top: 10px;
    }
    #roomInfo {
      font-size: 20px;
      font-family: Gmarket SansBold;
      color: #151419;
    }
    #infoDetail {
      font-size: 14px;
      font-family: NanumSquare;
      color: #151419;
    }
    &:hover {
      background-color: #1FB57E;
      color: #ffffff;
      #roomInfo {
        color: #ffffff;
      }
    }
  }
`;

const NextButton = styled.button`
  position: relative;
  bottom: 9.6mm;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #b2b2b2;
  border-top: 2px solid #151419;
  &:hover {
    cursor: pointer;
    background-color: #151419;
  }
`;
