import React from "react";
import { history } from "../../redux/configureStore";
import NextBtn from "../../element/test/NextBtn";
import GoTest from "../../element/test/GoTest";
import Wrap from '../../element/test/Wrap'


const BeginPage = () => {

  return (
    <Wrap>
      <GoTest />
      <NextBtn           
            onClick={() => {
            history.push("/main/preTest/question");
            window.location.reload();
          }}>다음</NextBtn>
    </Wrap>
  );
};



export default BeginPage;
