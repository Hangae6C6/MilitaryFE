import React from "react";
import styled from "styled-components";
import Card from "../component/main/Card";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as postActions } from "../redux/modules/main";
import { Meter } from "grommet";
import Navigation from "../component/Navigation";
import MyCallenge from "../component/main/MyCallenge";

const Main = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);
  const userId = useSelector((state) => state.user.user.userId);

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
      <div id="top-box">
        <div id="main-title">안녕하십니까, 안이태 병장님!</div>
        <div id="sub-title">곧 있으면 절반을 달성하지 말입니다.</div>
      </div>

      <div id="progressBar">
        <Meter
          size="large"
          height="55px"
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
      <MyCallenge />
    </Container>
    // <MainBox>
    //   <Box height="100px" width="200px" margin={{ left: "20px" }}>
    //     <Text size="large" margin={{ top: "50px" }}>
    //       안녕하십니까?
    //     </Text>
    //     <Anchor color="accent-4" href="/main/preTest/question">
    //       테스트 하러가기
    //     </Anchor>
    //   </Box>

    //   <Box align="center" pad="medium">
    //     <Meter
    //       size="medium"
    //       type="semicircle"
    //       background="light-2"
    //       value={totalProgressBar}
    //     />
    //     <Box margin={{ top: "-70px" }}>
    //       <Button
    //         value=""
    //         color="dark-2"
    //         label="챌린지 개설하기"
    //         onClick={() => {
    //           if (userId) {
    //             window.location.pathname = "/challenge";
    //           } else {
    //             window.location.pathname = "/signup";
    //           }
    //         }}
    //       />
    //     </Box>
    //   </Box>
    //   <Card cards={cards} />

    //   <Navigation userId={userId} />
    // </MainBox>
  );
};

export default Main;
const Container = styled.div`
  max-height: 812px;
  max-width: 375px;
  height: 100vh;
  width: 100%;
  border: 2px solid #151419;
  #top-box {
    background-color: #1fb57e;
    height: 145px;
    border-bottom: 2px solid #151419;
    #main-title {
      padding: 42px 0 0 15px;
      height: 35px;
      font-size: 26px;
      color: #ffffff;
      font-family: Gmarket SansBold;
    }
    #sub-title {
      padding: 10px 0 0 15px;
      height: 30px;
      font-size: 16px;
      color: #ffffff;
      font-family: Gmarket Sansmedium;
    }
  }
  #progressBar {
    margin-bottom: -3px;
  }
  #my-challenge {
    border-bottom: 2px solid #151419;
    border-top: 2px solid #151419;
    height: 77px;
    font-size: 22px;
    color: #151419;
    font-family: Gmarket SansBold;
    #p {
      margin: 40px 0 0 15px;
    }
  }
`;
