import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as postActions } from "../redux/modules/main";
import { Meter } from "grommet";
import Navigation from "../component/Navigation";
import MyCallenge from "../component/main/MyCallenge";
import HotChallenge from "../component/main/HotChallenge";
import icon from "../shared/images/mainIcon.png"
import logo from "../shared/images/Hand-logo.png"
const Main = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);
  const user= useSelector((state) => state.user.user);
  const userId = user.userId;
  React.useEffect(() => {
    if (userId) {
      dispatch(postActions.getProgressDB(userId));
    }
  }, [dispatch, userId]);

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, [dispatch]);


  const totalProgressBar = useSelector(
    (state) => state.card.totalProgress.totalChallengeProgress
  );

  return (
    <Container>
      <div className="nav"><img id="logo" src={logo} alt="img" /></div>
      <div id="top-box">
        <div id="main-title"> {user.userNick} 병장님!</div>
        <div id="sub-title">곧 있으면 절반을 달성하지 말입니다.</div>
      </div>

      <div id="icon">
        <img src={icon} alt="icon"/>
      </div>

      <div id="progressBar">
        <Meter
          size="large"
          height="15px"
          width="375px"
          type="bar"
          background="#FAFAFA"
          color="#151419"
          value={40}
        />
      </div>

      <div id="my-challenge">
        <p id="p">참여중 챌린지</p>
      </div>
      <MyCallenge user={user} cards={cards}/>
      <HotChallenge />
      <Navigation />
    </Container>
  );
};

export default Main;
const Container = styled.div`
  position: relative;
  max-height: 100%;
  max-width: 375px;
  height: 100vh;
  width: 100%;
  border: 2px solid #151419;
  .nav {
    width: 375px;
    height: 44px;
    background-color: #151419;
    #logo{
      width: 200px;
    }
  }
  #top-box {
    background-color: #EDE7D3;
    height: 221px;
    border-bottom: 2px solid #151419;
    #main-title {
      padding: 50px 0 0 15px;
      height: 35px;
      font-size: 44px;
      color: #151419;
      font-family: Gmarket SansBold;
    }
    #sub-title {
      margin: 22px;
      height: 30px;
      font-size: 16px;
      color: #151419;
      font-family: Gmarket Sansmedium;
    }
  }
  #icon{
    position: absolute;
    margin: -55px 0 0px 125px;
  }
  #progressBar {
    margin-bottom: -3px;
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
