import React from "react";
import styled from "styled-components";
import Question from "../../element/test/Question";
import Wrap from "../../element/test/Wrap";
import { ReactComponent as Back } from "../../image/back.svg";
import { history } from "../../redux/configureStore";

const QuestionPage = () => {
  return (
    <Wrap>
      <Question />
    </Wrap>
  );
};

const GoTest = styled.div`
height: 70px;
width: 90px;
margin: 30px 0;
border-top: 2px solid #151419;
border-bottom: 2px solid #151419;
border-right: 2px solid #151419;
&:hover {
  background-color: #1FB57E;
}
`

export default QuestionPage;
