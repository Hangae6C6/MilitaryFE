import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as challengeActions } from "../redux/modules/challenge";
import Title from "../component/challenge/Title";
import Day from "../component/challenge/Day";
import Type from "../component/challenge/Type";
import Plan from "../component/challenge/Plan";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Challenge = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user.userId);
  const [step, setStep] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [participant, setParticipant] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [type, setType] = React.useState("");
  const [stepContent, setStepContent] = React.useState("");
  const [stepIndex, setStepIndex] = React.useState(1);
  const [steps, setSteps] = React.useState([]);

  const isTitle = (title) => {
    let pattern = /^([a-zA-Z0-9|가-힣]).{2,10}$/;
    return pattern.test(title);
  };
  const isParticipant = (participant) => {
    let pattern = /^([0-9]).{1,99}$/;
    return pattern.test(participant);
  };
  const isStartDate = (startDate) => {
    let pattern = /^(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])-(19|20)\d{2}$/;
    return pattern.test(startDate);
  };
  const isEndDate = (endDate) => {
    let pattern = /^(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])-(19|20)\d{2}$/;
    return pattern.test(endDate);
  };
  const isStepContent = (stepContent) => {
    let pattern = /^([a-zA-Z0-9|가-힣]).{2,10}$/;
    return pattern.test(stepContent);
  };

  const addStepHandler = () => {
    if (stepContent === "") {
      toast.error("챌린지 스탭의 내용을 입력해주세요.", {
        position: "top-center",
      });
      return;
    }
    if (!isStepContent(stepContent)) {
      toast.error("형식에 맞춰주세요(2자-10자 사이)", {
        position: "top-center",
      });
      return;
    }
    if (stepIndex > 21) {
      toast.error("챌린지 스탭 최대 갯수는 20개 입니다", {
        position: "top-center",
      });
      return;
    }

    setStepIndex(stepIndex + 1);
    setSteps((prevSteps) => [
      ...prevSteps,
      { stepNum: stepIndex, stepContent: stepContent, isChecked: false },
    ]);
    setStepContent("");
  };

  const deleteStepHandler = (Num) => {
    const preSteps = steps.filter((step) => step.stepNum !== Num);
    setSteps(preSteps);
  };

  const typeChangeHandler = (cur) => {
    setType(cur);
  };

  const challengeHandler = () => {
    if (step === 0) {
      if (title === "") {
        toast.error("챌린지 제목을 입력해주세요.", { position: "top-center" });
        return;
      }
      if (!isTitle(title)) {
        toast.error("챌린지 제목이 형식에 맞지 않습니다.", {
          position: "top-center",
        });
        return;
      }
    }

    if (step === 1) {
      if ((participant === "", startDate === "", endDate === "")) {
        toast.error("빈칸을 입력해주세요", { position: "top-center" });
        return;
      }
      if (!isParticipant(participant)) {
        toast.error("참가인원수를 다시한번 확인해주세요.", {
          position: "top-center",
        });
        return;
      }
      if (!isStartDate(startDate)) {
        toast.error("시작일 월-일-년도 형식을 맞춰주세요", {
          position: "top-center",
        });
        return;
      }
      if (!isEndDate(endDate)) {
        toast.error("종료일 월-일-년도 형식을 맞춰주세요", {
          position: "top-center",
        });
        return;
      }
      if ((startDate === endDate) | (startDate > endDate)) {
        toast.error("종료일은 시작일 이후로 설정해주세요", {
          position: "top-center",
        });
        return;
      }
    }

    if (step === 2) {
      if (type === "") {
        toast.error("챌린지 타입을 선택해주세요", { position: "top-center" });
        return;
      }
    }

    setStep((prevStep) => prevStep + 1);

    if (step === 3) {
      const newChallenge = {
        challengeTitle: title,
        challengeLimitNum: participant,
        challengeStartDate: startDate,
        challengeEndDate: endDate,
        challengeType: type,
        steps: steps,
      };
      dispatch(challengeActions.addChallengeDB(newChallenge, userId));
    }
  };

  return (
    <Container>
      {step === 0 && <Title title={title} onChange={setTitle} />}
      {step === 1 && (
        <Day
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
          type={type}
          steps={steps}
          content={stepContent}
          onContentChange={setStepContent}
          addStepHandler={addStepHandler}
          deleteStepHandler={deleteStepHandler}
          onBack={() => setStep((prevStep) => prevStep - 1)}
        />
      )}

        <NextButton
          onClick={() => {
            challengeHandler();
          }}
        >
          NEXT
        </NextButton>

      <ToastContainer />
    </Container>
  );
};

export default Challenge;

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 375px;
  overflow: hidden;
  border: 2px solid #151419;
  background-color: #ffffff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const NextButton = styled.button`
  z-index: 9;
  height: 83px;
width: 100%;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #151419;
  border-top: 1px solid #151419;
  cursor: pointer;
`;
