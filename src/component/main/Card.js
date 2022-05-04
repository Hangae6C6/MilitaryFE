import React from "react";
import styled from "styled-components";
import { Swim, Run, Book } from "grommet-icons";
import {
  Anchor,
  Box,
  Button,
  Meter,
  Text,
  RoutedButton as GrommetRoutedButton,
} from "grommet";
import { history } from "../../redux/configureStore";
const Card = (props) => {
  const cards = props.cards;
  console.log(cards);

  return (
    <Box
      direction="row-responsive"
      justify="evenly"
      align="start"
      pad="medium"
      wrap="true"
      overflow="auto"
    >
      {cards.map((card, i) => (
        <>
          <Box align="center" pad="medium">
            <Meter
              size="medium"
              type="semicircle"
              background="light-2"
              value={card.challengeProgress}
            />
            <Box margin={{ top: "-70px" }}>
              <GrommetRoutedButton
                color="dark-2"
                label="챌린지 개설하기"
                path="/creat/challenge"
              />
            </Box>
          </Box>
          <Box
            pad="small"
            align="center"
            background={{ color: "light-2", opacity: "strong" }}
            round
            gap="xsmall"
            width={{ min: "100px" }}
            margin={{ top: "10px" }}
          >
            <Book size="large" />
            <Text>{card.challengeType}</Text>
            <Text>{card.challengeTitle}</Text>
            <Anchor href="" label={card.challengeCnt + "명"} />
            <Button
              size="small"
              label="참여"
              onClick={() => {
                history.push({
                  pathname: `/detail/${card.challengeNum}`,
                  state: { card: card },
                });
              }}
            />
          </Box>
        </>
      ))}
    </Box>
  );
};

export default Card;
