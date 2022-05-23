import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as postActions } from "../redux/modules/main";
import { ActionCreators as userChallengeDetailActions } from "../redux/modules/detail";

import Navigation from "../component/Navigation";
import MyCallenge from "../component/main/MyCallenge";
import HotChallenge from "../component/main/HotChallenge";
import icon from "../shared/icons/progressbarIcon.png";
import logo from "../shared/icons/handlogo11.png";
import mainlogo from "../shared/icons/mainlogo.png";
import { getCookie } from "../shared/cookie";

const Main = () => {
  const dispatch = useDispatch();
  const token = getCookie("token");
  const cards = useSelector((state) => state.card.cards);
  const user = useSelector((state) => state.user.user);
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
      dispatch(userChallengeDetailActions.getUserChallengeDetailDB(userId));
    }
  }, [dispatch, userId]);

  React.useEffect(() => {
    if (userId) {
      dispatch(postActions.getProgressDB(userId));
    }
  }, [dispatch, userId]);

  const testHandler = () => {
    if (token) {
      window.location.pathname = `/main/preTest/${userId}`;
    } else {
      window.location.pathname = "/login";
    }
  };

  return (
    <Container>
      <div className="nav">
        <img id="logo" src={logo} alt="img" height="53" />
        <img id="mainlogo" src={mainlogo} alt="img" height="23" width="130" />
      </div>
      <div id="top-box">
        {!token ? (
          <div id="main-title">충성! 안녕하십니까!</div>
        ) : (
          <div id="main-title"> {user.userNick} 님!</div>
        )}
        <div id="sub-title">오늘도 한번 달려보시렵니까?</div>
        <div id="test" onClick={testHandler}>
          전역하고 뭐하지? 테스트하러가기!{" "}
        </div>
      </div>
      {!token ? (
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
      <div className="challengeContainer">
        <div id="my-challenge">
          <p id="p">내가 진행중인 챌린지</p>
        </div>
        <MyCallenge user={user} cards={myChallenges} token={token} />
        <HotChallenge cards={cards} />
      </div>
      <Navigation userId={userId} />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  max-width: 375px;
  width: 100%;
  border: 2px solid #151419;

  .nav {
    width: 375px;
    height: 44px;
    background-color: #151419;
    #logo {
      margin: 13px 0 0 20px;
      width: 140px;
    }
    #mainlogo {
      margin: 0px 0 30px 60px;
    }
  }
  #top-box {
    display: grid;
    background-color: #151419;
    height: 221px;
    border-top: 4px solid #ffffff;
    #main-title {
      padding: 50px 0 0 15px;
      height: 35px;
      font-size: 36px;
      color: #ffffff;
      font-family: Gmarket SansBold;
    }
    #sub-title {
      margin: -15px 0 0 15px;
      height: 20px;
      font-size: 16px;
      color: #ffffff;
      font-family: Gmarket Sansmedium;
    }
    #test {
      margin: -35px 0 0 15px;
      height: 20px;
      width: 270px;
      font-size: 18px;
      color: #151419;
      background-color: #ffffff;
      cursor: pointer;
      font-family: Gmarket SansMedium;
    }
  }

  #my-challenge {
    border-bottom: 2px solid #151419;
    border-top: 2px solid #151419;
    height: 77px;
    font-size: 26px;
    color: #151419;
    font-family: Gmarket SansBold;
    #p {
      margin: 30px 0 0 15px;
    }
  }

  .challengeContainer {
    overflow: auto;
    height: 100%;
  }
`;

const ProgressBarWrap = styled.div`
  display: flex;
  width: 100%;
  height: 20px;

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
