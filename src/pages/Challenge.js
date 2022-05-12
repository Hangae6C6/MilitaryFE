import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as challengeActions } from "../redux/modules/challenge";
import Title from "../component/challenge/Title";
import Date from "../component/challenge/Date";
import Type from "../component/challenge/Type";
import Plan from "../component/challenge/Plan";

const Challenge = () => {
  const dispatch = useDispatch();
  const challenge = useSelector((state) => state.challenge.challenges);
  // const preStep = useSelector((state) =>state.challenge.challenges.steps);
  console.log(challenge);
  const [step, setStep] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [participant, setParticipant] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [type, setType] = React.useState("");
  const [stepContent, setStepContent] = React.useState("");

  console.log(stepContent);
  
  const addStepHandler = () => {
    const preSteps = {stepContent: stepContent, isChecked: false };
    const newChallenge = {
      challengeTitle: title,
      challengeLimitNum: participant,
      challengeStartDate: startDate,
      challengeEndDate: endDate,
      challengeType: type,
       steps : [{...preSteps, preSteps}]
      }

      console.log(newChallenge);

    // const newStep = { ...step, stepContent: stepContent, isChecked: false };
    dispatch(challengeActions.addChallenge(newChallenge));
  };

  const typeChangeHandler = (cur) => {
    setType(cur);
  };

  const challengeHandler = () => {
    setStep((prevStep) => prevStep + 1);

    // check if it's the final step
    if (step === 3) {
      //   dispatch(challengeActions.addTitle({challengeTitle}));
      window.location.pathname = "/link";
    }
  };

  return (
    <Container>
      {step === 0 && <Title title={title} onChange={setTitle} />}
      {step === 1 && (
        <Date
          startDate={startDate}
          endDate={endDate}
          participant={participant}
          onStartChange={setStartDate}
          onEndChange={setEndDate}
          onParticipantChange={setParticipant}
          onBack={() => setStep((prevStep) => prevStep - 1)}
        />
      )}
      {step === 2 && (
        <Type
          onTypeChange={typeChangeHandler}
          onBack={() => setStep((prevStep) => prevStep - 1)}
        />
      )}
      {step === 3 && (
        <Plan
          // steps={challenge}
          content={stepContent}
          onContentChange={setStepContent}
          addStepHandler={addStepHandler}
          onBack={() => setStep((prevStep) => prevStep - 1)}
        />
      )}

      <NextButton
        onClick={() => {
          challengeHandler();
        }}
      >
        다음
      </NextButton>
    </Container>
  );
};

export default Challenge;

const Container = styled.div`
  max-height: 812px;
  max-width: 375px;
  height: 812px;
  width: 100%;
  border: 2px solid #151419;
`;
const NextButton = styled.button`
  position: absolute;
  bottom: 21mm;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #b2b2b2;
  border-top: 2px solid #151419;
  &:hover {
    cursor: pointer;
    background-color: #151419;
  }
`;
