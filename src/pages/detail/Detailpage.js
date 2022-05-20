import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionCreators as challengeActions } from "../../redux/modules/challenge";
import { ActionCreators as userChallengeDataActions } from "../../redux/modules/detail";

import styled from "styled-components";
import DetailpageStep from "../../component/detailpage/DetailpageStep";
import DetailpageProgress from "../../component/detailpage/DetailpageProgress";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import shareIcon from "../../shared/icons/icnShareBlack35.png";
import typeImg from "../../shared/images/workout.png";
import personImg from "../../shared/images/icnPersonGray36.png";
import { getCookie } from "../../shared/cookie";

const Detail = () => {
  const dispatch = useDispatch();
  let { challengeId } = useParams();
  const card = useSelector((state) => state.challenge.challenges);
  const userId = useSelector((state) => state.user.user.userId);
  const myChallengeDetail = useSelector((state)=>state.challengeDetail.userChallengeDetail.answer);
  const myChallengeStep = useSelector((state)=>state.challengeDetail.userChallengeDetail.joinlist_id);
  const allUserDetail = useSelector((state)=>state.challengeDetail.challengeDetail);

  const token = getCookie("token");
  const spots = card.challengeLimitNum - card.challengeCnt;
  const steps = card.steps;
  const [isPart, setIsPart] = React.useState(false);

  let endDate = card.challengeEndDate;
  let endDay = new Date(endDate); 
  let now = new Date(); 
  let distance = endDay - now;
  let dDay = Math.floor(distance / (1000 * 60 * 60 * 24));

  React.useEffect(() => {
    dispatch(challengeActions.getOneChallengeDetailDB(challengeId));
  }, [dispatch, challengeId]);
  React.useEffect(() => {
    dispatch(userChallengeDataActions.getUserChallengeDetailDB(userId));
  }, [dispatch, userId]);
  React.useEffect(() => {
    dispatch(userChallengeDataActions.getChallengeDetailDB(challengeId));
  }, [dispatch, challengeId]);

  const userChallengeDataHandler = () => {
    console.log(userId, challengeId)
    dispatch(userChallengeDataActions.postUserChallengeDetailDB(userId, challengeId))
  }


  


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
          <div id="roomInfo">{card.challengeCnt}명</div>
          <div id="Infodetail">참가자</div>
        </div>
        <div className="box">
          <div id="imgWrap">
            <img src={personImg} alt="typeImg" width="36" height="36" />
          </div>
          <div id="roomInfo">D-{dDay}</div>
          <div id="Infodetail">남은 기간</div>
        </div>
        <div className="box">
          <div id="imgWrap">
            <img src={personImg} alt="typeImg" width="36" height="36" />
          </div>
          <div id="roomInfo">{spots}자리</div>
          <div id="Infodetail">남은 자리</div>
        </div>
      </ChallengeRoom>
      <DetailpageProgress userId={userId} thisChallenge={card} myChallengeDetail={myChallengeDetail} myChallengeSteps={myChallengeStep} allUserDetail={allUserDetail}/>
      <DetailpageStep steps={steps}/>
      {!token ? (
        <NextButton
          onClick={() => {
            window.location.pathname = "/login";
          }}
        >
          참여하기
        </NextButton>
      ) : (
        <NextButton
          onClick={() => {
            userChallengeDataHandler()
            // window.location.pathname = `/detail/chat/${challengeId}`;
          }}
        >
          참여하기
        </NextButton>
      )}
   
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  display: block;
  max-width: 375px;
  height: fit-content;
  width: 100%;
  border: 2px solid #151419;
  position: relative;

  .nav {
    width: 375px;
    height: 44px;
    background-color: #151419;
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
        width: 100px;
        height: 30px;
        background-color: #151419;
        color: #ffffff;
        font-size: 20px;
        font-family: Gmarket Sansmedium;
        text-align: center;
        line-height: 30px;
        margin-left: 60px;
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
      background-color: #1fb57e;
      color: #ffffff;
      #roomInfo {
        color: #ffffff;
      }
    }
  }
`;

const NextButton = styled.button`
  position: relative;
  bottom: 0;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #b2b2b2;
  /* border-top: 2px solid #151419; */
  &:hover {
    cursor: pointer;
    background-color: #151419;
  }
`;

  
