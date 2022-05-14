import React from "react";
import styled from "styled-components";
import AnswerBtn from "../../element/test/AnswerBtn";
import NextBtn from "../../element/test/NextBtn";
import Question from "../../element/test/Question";
import GoTest from "../../element/test/GoTest";
import { history } from "../../redux/configureStore";

const QuestionPage = () => {
  return (
    <Wrap>
      <GoTest />
      <Question />
    </Wrap>
  );
};

const Wrap = styled.div`
  max-height: 812px;
  max-width: 375px;
  height: 812px;
  width: 100%;
  border: 2px solid #151419;
`;

export default QuestionPage;
