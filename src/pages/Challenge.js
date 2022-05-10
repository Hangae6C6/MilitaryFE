import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../redux/modules/challenge";
import { Box, Select, Meter } from "grommet";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { history } from "../redux/configureStore";

import gobackIcon from "../shared/icons/icnBackNormalBlack35.svg";
import Title from "../component/challenge/Title";
import Date from "../component/challenge/Date";
import Type from "../component/challenge/Type";
import Plan from "../component/challenge/Plan"

const Challenge = () => {
  const dispatch = useDispatch();
  const challenge = useSelector((state) => state.challenge.challenges);
  console.log(challenge);
  const [step, setStep] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [participant, setParticipant] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [type, setType] = React.useState("");
  const [plan, setPlan] = React.useState("");

  const challengeHandler = () => {
    setStep((prevStep) => prevStep + 1);

    // check if it's the final step
    if (step === 3) {
    //   dispatch(searchActions.addTitle({challengeTitle}));
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
      {step === 2 && <Type type={type} onClick={()=>{}} onBack={() => setStep((prevStep) => prevStep - 1)}/>}
      {step === 3 && <Plan  Plan={plan} onClick={()=>{}} onBack={() => setStep((prevStep) => prevStep - 1)}/>}

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
  border: 2px solid #3f3f3f;
`;
const NextButton = styled.button`
  position: absolute;
  bottom: 29mm;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #b2b2b2;
  border-top: 2px solid #3f3f3f;
  &:hover {
    cursor: pointer;
    background-color: #3f3f3f;
  }
`;
