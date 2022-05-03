import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../../redux/modules/challenge";

const Challenge = () => {
    const dispatch = useDispatch();
    const [challengeTitle, setChallengeTitle] = React.useState();
    const [challengeType, setChallengeType] = React.useState();
    const [challengeContent, setChallengeContent] = React.useState();
   
  
    const challengeHandler = () => {
      dispatch(searchActions.addChallengeDB(challengeTitle, challengeType, challengeContent));
    };

    return (
        <Container>
      <Box2>
        <Inputs
          value={challengeTitle}
          placeholder="챌린지 주제"
          type="text"
          onChange={(e) => {
            setChallengeTitle(e.target.value);
          }}
        />
        <Inputs
          value={challengeType}
          placeholder="챌린지 타입"
          type="text"
          onChange={(e) => {
            setChallengeType(e.target.value);
          }}
        />
         <Inputs
          value={challengeContent}
          placeholder="챌린지 내용"
          type="text"
          onChange={(e) => {
            setChallengeContent(e.target.value);
          }}
        />
        
        <Button
          onClick={challengeHandler}
        >
          확인
        </Button>
 
      </Box2>
    </Container>
  );
};

export default Challenge;


const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid red;
`;

const Box2 = styled.div`
  margin-top: 60px;
  display: grid;
  z-index: 10;
  border: 1px solid blue;
`;

const Inputs = styled.input`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: 16px;
  margin: 5px;
  box-sizing: border-box;
  border: 1px solid #dcdddd;
  font-size: 16px;
  &:hover {
  }
`;

const Button = styled.button`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: auto;
  margin: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

