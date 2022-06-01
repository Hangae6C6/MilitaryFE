import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as postActions } from "../redux/modules/main";
import { ActionCreators as userChallengeDetailActions } from "../redux/modules/detail";
import { ActionCreators as userProfileActions } from "../redux/modules/mypage";

import Navigation from "../component/Navigation";
import MyCallenge from "../component/main/MyCallenge";
import HotChallenge from "../component/main/HotChallenge";
import icon from "../shared/icons/progressbarIcon.png";
import { getCookie } from "../shared/cookie";
import rightArrow from "../shared/icons/right_arrow.png";

const Main = () => {
  const dispatch = useDispatch();
  const token = getCookie("token");
  const cards = useSelector((state) => state.card.cards);
  const user = useSelector((state) => state.user.user);
  const userInfo = useSelector((state) => state.mypage.mypage);
  const myChallenges = useSelector(
    (state) => state.challengeDetail.userChallengeDetail.answer
  );

  const userId = user.userId;

  const progressbar = useSelector(
    (state) => state.card.totalProgress.totalChallengeProgress
  );
  const score = progressbar + "%";

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, [dispatch]);

  React.useEffect(() => {
    if (userId) {
      dispatch(userProfileActions.getUserProfileDB(userId));
    }
  }, [dispatch, userId]);

  React.useEffect(() => {
    if (userId) {
      dispatch(userChallengeDetailActions.getUserChallengeDetailDB(userId));
    }
  }, [dispatch, userId]);

  React.useEffect(() => {
    if (userId) {
      dispatch(postActions.getProgressDB(userId));
    }
  }, [dispatch, userId]);

  const testHandler = () => {
    dispatch(postActions.checkUserdataDB());

    let testViewCount = 1;
    if (userId) {
      dispatch(postActions.addTestCountDB(testViewCount));
      setTimeout(() => {
        window.location.pathname = "/main/preTest";
      }, 500);
    } else {
      window.location.pathname = "/login";
    }
  };

  return (
    <Container>
      <div id="top-box">
        {!userId ? (
          <div id="main-title">충성! 안녕하십니까!</div>
        ) : (
          <div id="main-title">
            {user.userNick} {userInfo.rank}님!
          </div>
        )}
        <div id="sub-title-wrap">
          <div id="sub-title">오늘도 한번 달려보시렵니까?</div>
          <div id="guideWrap" onClick={()=>{
            window.location.pathname='/guide';
          }}>
            <span id="guide">사용가이드</span>{" "}
            <img
              id="arrow-right"
              src={rightArrow}
              alt="icon"
              height="16"
              width="16"
            />
          </div>
        </div>

        {userInfo.testResult ? (
          <div id="test-wrapdone">
            <div id="test" onClick={testHandler}>
              {user.userNick}
              {userInfo.rank}님은 {userInfo.testResult}! 딱! 입니다
            </div>
          </div>
        ) : (
          <div id="test-wrap">
            <div id="test" onClick={testHandler}>
              전역하고 뭐하지? 테스트하러가기
            </div>
            <img
              id="arrow-right"
              src={rightArrow}
              alt="icon"
              height="20"
              width="20"
            />
          </div>
        )}

        <span id="progressText">전체 진행율(%)</span>
      </div>
      {!userId ? (
        <></>
      ) : (
        <>
          <ProgressBarWrap width={score}>
            <div id="progressBar" />

            <div id="icon">
              <img src={icon} alt="icon" height="73" width="153" />
            </div>
          </ProgressBarWrap>
        </>
      )}
      <div className={!userId ? "challengeContainer" : "challengeContainerIn"}>
        {token ? (
          <div id="my-challenge">
            <p id="p">내가 진행중인 챌린지</p>
          </div>
        ) : (
          <></>
        )}

        <MyCallenge user={user} cards={myChallenges} token={token} />
        <HotChallenge cards={cards} />
      </div>
      <Navigation />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  max-width: 375px;
  border: 2px solid #151419;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  #top-box {
    display: flex;
    flex-direction: column;
    background-color: #151419;
    border-top: 4px solid #ffffff;

    #main-title {
      padding: 50px 0 0 15px;
      height: 35px;
      font-size: 36px;
      color: #ffffff;
      font-family: Gmarket SansBold;
    }

    #sub-title-wrap {
      display: flex;
      padding: 20px 0px;
      #sub-title {
        margin-left: 16px;
        height: 20px;
        font-size: 16px;
        color: #ffffff;
        font-family: Gmarket Sansmedium;
      }
      #guideWrap {
        display: flex;
        #guide {
          margin: 0 8px;
          height: 18px;
          width: 98px;
          font-size: 16px;
          color: #151419;
          background-color: #ffffff;
          cursor: pointer;
          font-family: Gmarket SansMedium;
        }

        #arrow-right {
          position: absolute;
          margin-left:88px;
        }
      }
    }

    #test-wrap {
      display: flex;
      #test {
        margin: 0 17px;
        height: 20px;
        width: 290px;
        font-size: 18px;
        color: #151419;
        background-color: #ffffff;
        cursor: pointer;
        font-family: Gmarket SansMedium;
      }
      #arrow-right {
        position: absolute;
        margin: -1px 0 0 284px;
      }
    }
    #test-wrapdone {
      display: flex;
      #test {
        margin: 0 12px;
        padding: 4px;
        font-size: 18px;
        color: #151419;
        background-color: #ffffff;
        cursor: pointer;
        font-family: Gmarket SansMedium;
      }
    }

    #progressText {
      padding: 35px 0 0 260px;
      height: 20px;
      font-size: 14px;
      color: #ffffff;
      font-family: Gmarket Sansmedium;
    }
  }

  #my-challenge {
    border-bottom: 2px solid #151419;
    height: 46px;
    font-size: 26px;
    color: #151419;
    font-family: Gmarket SansBold;
    #p {
      margin: 30px 0 0 15px;
    }
  }

  .challengeContainer {
    flex: 1;
    overflow: scroll;
    height: 100%;
  }
  .challengeContainerIn {
    flex: 1;
    overflow-y: scroll !important;
    height: 100%;
  }
`;

const ProgressBarWrap = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  border-bottom: 2px solid #151419;
  #icon {
    margin: -31px 0px 0px -125px;
    width: 0;
    height: 30px;
  }
  #progressBar {
    margin-bottom: -3px;
    border: 1px solid blue;
    width: ${(props) => props.width};
    height: 20px;
    background-color: #1fb57e;
  }
`;
