import React from "react";
import styled from "styled-components";
import Card from "../component/main/Card";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as postActions } from "../redux/modules/main";
import { Box, Anchor, Text, Meter, Button } from "grommet";

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
    <MainBox>
      <Box height="100px" width="200px" margin={{ left: "20px" }}>
        <Text size="large" margin={{ top: "50px" }}>
          안녕하십니까?
        </Text>
        <Anchor color="accent-4" href="/main/preTest/question">
          테스트 하러가기
        </Anchor>
      </Box>

      <Box align="center" pad="medium">
        <Meter
          size="medium"
          type="semicircle"
          background="light-2"
          value={totalProgressBar}
        />
        <Box margin={{ top: "-70px" }}>
          <Button
            value=""
            color="dark-2"
            label="챌린지 개설하기"
            onClick={() => {
              if (userId) {
                window.location.pathname = "/challengeadd/title";
              } else {
                window.location.pathname = "/signup";
              }
            }}
          />
        </Box>
      </Box>

      <Card cards={cards} />
    </MainBox>
  );
};

export default Main;

const MainBox = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;
