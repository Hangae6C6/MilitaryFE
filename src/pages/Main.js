import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as postActions } from "../redux/modules/main";
import { ActionCreators as userChallengeDetailActions } from "../redux/modules/detail";

import Navigation from "../component/Navigation";
import MyCallenge from "../component/main/MyCallenge";
import HotChallenge from "../component/main/HotChallenge";
import icon from "../shared/images/mainIcon.png";
import logo from "../shared/images/Hand-logo.png";
import { getCookie } from "../shared/cookie";

const Main = () => {
  const dispatch = useDispatch();
  const token = getCookie("token");
  const cards = useSelector((state) => state.card.cards);
  const user = useSelector((state) => state.user.user);
  const myChallenges = useSelector(
    (state) => state.challengeDetail.userChallengeDetail.answer);

  
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
    }else{
      window.location.pathname = '/login';
    }
  };

  return (
    <Container>
      <div className="nav">
        <img id="logo" src={logo} alt="img" />
      </div>
      <div id="top-box">
        <div id="main-title"> {user.userNick} 병장님!</div>
        <div id="sub-title">오늘도 한번 달려보시렵니까?</div>
        <div id="test" onClick={testHandler}>
          잠깐, 근데 니 내 누군지 아뉘?{" "}
        </div>
      </div>
      <ProgressBarWrap>
        <div id="progressBar" width={score} />

        <div id="icon">
          <img src={icon} alt="icon" />
        </div>
      </ProgressBarWrap>

      <div id="my-challenge">
        <p id="p">참여중 챌린지</p>
      </div>
      <MyCallenge user={user} cards={myChallenges} />
      <HotChallenge cards={cards} />
      <Navigation userId={userId} />
    </Container>
  );
};

export default Main;
const Container = styled.div`
  position: relative;
  max-width: 375px;
  width: 100%;
  border: 2px solid #151419;
  .nav {
    width: 375px;
    height: 44px;
    background-color: #151419;
    #logo {
      width: 200px;
    }
  }
  #top-box {
    display: grid;
    background-color: #ede7d3;
    height: 221px;
    border-bottom: 2px solid #151419;
    #main-title {
      padding: 50px 0 0 15px;
      height: 35px;
      font-size: 36px;
      color: #151419;
      font-family: Gmarket SansBold;
    }
    #sub-title {
      margin: -15px 0 0 15px;
      height: 20px;
      font-size: 16px;
      color: #151419;
      font-family: Gmarket Sansmedium;
    }
    #test {
      margin: -35px 0 0 15px;
      height: 20px;
      width: 300px;
      font-size: 20px;
      color: #1fb57e;
      cursor: pointer;
      font-family: Gmarket SansBold;
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
`;

const ProgressBarWrap = styled.div`
  display: flex;
  width: 100%;
  height: 20px;

  #icon {
    margin: -50px 0px 0px -30px;
    width: 0;
    height: 30px;
  }
  #progressBar {
    margin-bottom: -3px;
    border: 1px solid blue;
    width: ${(props) => props.width};
    height: 20px;
    background-color: #151419;
  }
`;
