import React from "react";
import { history } from "../../redux/configureStore";
import styled from "styled-components";
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
          }}>시작하기</NextBtn>
    </Wrap>
  );
};

const NextBtn = styled.div`
  font-family: NanumSquare;
  font-weight: bold;
width: 375px;
height: 89px;
text-align: center;
line-height: 48px;
background-color: #151419;
bottom: 0px;
position: fixed;
color: #ffffff;
cursor: pointer;
`


export default BeginPage;
