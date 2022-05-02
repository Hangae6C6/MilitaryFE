import React from "react";
import { history } from "../../redux/configureStore";
import NextBtn from "../../element/test/NextBtn";
import Question from "../../element/test/Question";
import GoTest from "../../element/test/GoTest";


const BeginPage = () => {

  return (
    <div>
      
      <GoTest />
      <Question>질문</Question>
      <NextBtn           
            onClick={() => {
            history.push("/main/preTest/question");
            window.location.reload();
          }}>다음</NextBtn>
    </div>
  );
};



export default BeginPage;
