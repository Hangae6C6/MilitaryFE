import React from "react";
import styled from "styled-components";
import { Swim, Run, Book } from "grommet-icons";
import { Anchor, Box, Button, Text } from "grommet";
import { history } from "../../redux/configureStore";

const Card = (props) => {
  const cards = props.cards;

  return (
    <Container>
      <Box
        direction="row-responsive"
        justify="evenly"
        align="start"
        pad="medium"
        wrap={true}
        overflow="auto"
      >
        {cards.map((card, i) => (
          <div key={card.challengeNum}>
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
                  window.location.pathname = `/detailpage/${card.challengeNum}`;
                }}
              />
            </Box>
          </div>
        ))}
      </Box>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  height: 200px;
`;
