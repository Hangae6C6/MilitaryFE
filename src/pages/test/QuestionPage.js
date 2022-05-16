import React from "react";
import styled from "styled-components";
import Question from "../../element/test/Question";
import GoTest from "../../element/test/GoTest";
import Wrap from "../../element/test/Wrap";
import { history } from "../../redux/configureStore";

const QuestionPage = () => {
  return (
    <Wrap>
      <GoTest />
      <Question />
    </Wrap>
  );
};

export default QuestionPage;
