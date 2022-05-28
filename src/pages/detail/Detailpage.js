import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionCreators as challengeActions } from "../../redux/modules/challenge";
import { ActionCreators as userChallengeDataActions } from "../../redux/modules/detail";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import DetailpageStep from "../../component/detailpage/DetailpageStep";
import DetailpageProgress from "../../component/detailpage/DetailpageProgress";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";
import shareIcon from "../../shared/icons/icnShareBlack35.png";
import personImg from "../../shared/images/icnPersonGray36.png";
import joinIcon from "../../shared/icons/joinmemicon.png";
import ddayIcon from "../../shared/icons/ddayicon.png";
import { getCookie } from "../../shared/cookie";

import {
  reading,
  job,
  jobSearch,
  workout,
  competition,
  license,
  self,
  etc,
  foreignLanguage,
} from "../../shared/icons/icons";

const Detail = () => {
  const dispatch = useDispatch();
  let { challengeId } = useParams();
  const card = useSelector((state) => state.challenge.challenges);
  const userId = useSelector((state) => state.user.user.userId);
  const myChallengeDetail = useSelector(
    (state) => state.challengeDetail.userChallengeDetail.answer
  );
  const myChallengeStep = useSelector(
    (state) => state.challengeDetail.userChallengeDetail.joinlist_id
  );

  const userNickName = useSelector(
    (state) => state.challengeDetail.userChallengeDetail.usernicklist1
  );

  const token = getCookie("token");
  const spots = card.challengeLimitNum - card.challengeCnt;


  if (myChallengeStep) {
    for (let i = 0; i < myChallengeStep.length; i++) {
      if (myChallengeStep[i].challengeNum == challengeId) {
        var mySteps = myChallengeStep[i].steps;
      }
    }
  }

  let endDate = card.challengeEndDate;
  let endDay = new Date(endDate);
  let now = new Date();
  let distance = endDay - now;
  let dDay = Math.floor(distance / (1000 * 60 * 60 * 24));

  React.useEffect(() => {
    dispatch(challengeActions.getOneChallengeDetailDB(challengeId));
  }, [dispatch, challengeId]);
  React.useEffect(() => {
    if (userId) {
      dispatch(userChallengeDataActions.getUserChallengeDetailDB(userId));
    }
  }, [dispatch, userId]);
  React.useEffect(() => {
    dispatch(userChallengeDataActions.getChallengeDetailDB(challengeId));
  }, [dispatch, challengeId]);

  const userChallengeDataHandler = () => {
    dispatch(
      userChallengeDataActions.postUserChallengeDetailDB(userId, challengeId)
    );
  };



  let isJoined = false;
  myChallengeStep.filter((cur) => {
    if (cur.challengeNum == challengeId) {
      isJoined = true;
    }
  });

  return (
    <Container>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            window.location.pathname='/';
          }}
        >
          <img src={gobackIcon} alt="goback" />
        </div>
        <div id="share-icon">
          <img
            src={shareIcon}
            alt="shareIcon"
            onClick={() => {
              if (!token) {
                window.location.pathname = "/login";
              } else {
                window.location.pathname = `/detailpage/link/${challengeId}`;
              }
            }}
          />
        </div>
      </div>
      {!token ? (
        <>
          <TitleBox>
            <div id="title">
              <div id="title-up">로그인해주세요!</div>
              <div id="title-down">
                <div id="type">가즈아!!</div>
              </div>
            </div>
            <div id="typeIcons">
              <img src={workout} alt="img" height="158px" width="213px" />
            </div>
          </TitleBox>

          <ChallengeRoom>
            <div className="box">
              <div id="imgWrap">
                <img src={joinIcon} alt="personImg" width="36" height="36" />
              </div>
              <div id="roomInfo">0명</div>
              <div id="Infodetail">현재 참가자</div>
            </div>
            <div className="box">
              <div id="imgWrap">
                <img src={ddayIcon} alt="typeImg" width="36" height="36" />
              </div>
              <div id="roomInfo">D-0</div>
              <div id="Infodetail">남은 기간</div>
            </div>
            <div className="box">
              <div id="imgWrap">
                <img src={personImg} alt="typeImg" width="36" height="36" />
              </div>
              <div id="roomInfo">0자리</div>
              <div id="Infodetail">남은 자리</div>
            </div>
          </ChallengeRoom>
        </>
      ) : (
        <>
          <ScrollWrap>
            <TitleBox>
              <div id="title">
                <div id="title-up">{card.challengeTitle}</div>
                <div id="title-down">
                  <div id="type">{card.challengeType}</div>
                </div>
              </div>
              <div id="typeIcons">
                <img
                  src={
                    card.challengeType === "운동"
                      ? workout
                      : card.challengeType === "취업"
                      ? job
                      : card.challengeType === "직업탐색"
                      ? jobSearch
                      : card.challengeType === "자기개발"
                      ? self
                      : card.challengeType === "기타"
                      ? etc
                      : card.challengeType === "공모전"
                      ? competition
                      : card.challengeType === "자격증"
                      ? license
                      : card.challengeType === "외국어"
                      ? foreignLanguage
                      : reading
                  }
                  alt="img"
                  height="158px"
                  width="213px"
                />
              </div>
            </TitleBox>
            <ChallengeRoom>
              <div className="box">
                <div id="imgWrap">
                  <img src={joinIcon} alt="personImg" width="36" height="36" />
                </div>
                <div id="roomInfo">{card.challengeCnt}명</div>
                <div id="Infodetail">현재 참가자</div>
              </div>
              <div className="box">
                <div id="imgWrap">
                  <img src={ddayIcon} alt="typeImg" width="36" height="36" />
                </div>
                <div id="roomInfo">{dDay <= 0 ? "기간만료" : "D-" + dDay}</div>
                <div id="Infodetail">남은 기간</div>
              </div>
              <div className="box">
                <div id="imgWrap">
                  <img src={personImg} alt="typeImg" width="36" height="36" />
                </div>
                <div id="roomInfo">{spots <= 0 ? "FULL": spots + "자리"}</div>
                <div id="Infodetail">남은 자리</div>
              </div>
            </ChallengeRoom>{" "}
            <DetailpageProgress
              userId={userId}
              thisChallenge={card}
              myChallengeDetail={myChallengeDetail}
              myChallengeStep={myChallengeStep}
              userNickName={userNickName}
            />
            <DetailpageStep
              challengeNum={challengeId}
              userId={userId}
              steps={mySteps}
            />
          </ScrollWrap>
        </>
      )}

      {!token ? (
        <NextButton
          onClick={() => {
            window.location.pathname = "/login";
          }}
        >
          로그인하기
        </NextButton>
      ) : isJoined ? (
        <NextButton
          onClick={() => {
            toast.warn("통신보안! 조금만 기다려주세요!", {
              position: "top-center",
            });
            return;
            // window.location.pathname = `/detail/chat/${challengeId}`;
          }}
        >
          채팅하기
        </NextButton>
      ) : (
        <NextButton
          onClick={() => {
            userChallengeDataHandler();
          }}
        >
          참여하기
        </NextButton>
      )}
      <ToastContainer />
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  overflow: hidden;
  height: 100%;
  max-width: 375px;
  border: 2px solid #151419;
  background-color: #ffffff;
  box-sizing: border-box;
  .top {
    height: 69px;
    width: 100%;
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
  width: 100%;
  height: 159px;
  display: flex;
  border-bottom: 2px solid #151419;

  #title {
    width: 242px;
    height: 159px;
    z-index: 1;
    #title-up {
      width: 280px;
      height: 45px;
      color: #151419;
      font-size: 24px;
      font-weight: bold;
      padding-top: 36px;
      margin-left: 60px;
      font-family: Gmarket SansBold;
    }
    #title-down {
      display: flex;
      z-index: 1;
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

  #typeIcons {
    margin: 0px -80px;
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
  }
`;

const ScrollWrap = styled.div`
  overflow: auto;
  height: 100%;
`;

const NextButton = styled.button`
  position: fixed;
  bottom: 0.2em;
  margin-left: -2px;
  padding: 32px 149px;
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
