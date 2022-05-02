import React from 'react';
import AnswerBtn from '../../element/test/AnswerBtn';
import NextBtn from '../../element/test/NextBtn';
import Question from '../../element/test/Question';
import GoTest from '../../element/test/GoTest';
import { history } from "../../redux/configureStore";

const QuestionPage = () => {
    return (
        <div>
        <GoTest />
        <Question>질문</Question>
        <AnswerBtn>답1</AnswerBtn>
        <NextBtn           
            onClick={() => {
            history.push("/main/preTest/result");
            window.location.reload();
          }}>다음</NextBtn>
    
      </div>
    );
  };

export default QuestionPage;