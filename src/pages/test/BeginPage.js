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
            window.location.pathname="/main/preTest/question";
          }}><span> 시작하기 </span></NextBtn>
    </Wrap>
  );
};

const NextBtn = styled.button`
  position: fixed;
  bottom: 0.2em;
  margin-left: -2px;
  padding: 32px 157px;
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

export default BeginPage;
