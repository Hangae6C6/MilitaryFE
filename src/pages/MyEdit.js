import React from "react";
import Wrap from "../element/test/Wrap";
import styled from "styled-components";
import { ReactComponent as Back } from "../image/back.svg";
import Navigation from '../component/Navigation'

const MyEdit = () => {
  return (
    <Wrap>
      <MyPage>
        <MyP>
          <BackDiv>
            <Back />
          </BackDiv>
          마이페이지
        </MyP>
      </MyPage>
      <PersonalEdit>&nbsp;&nbsp;&nbsp;개인정보 수정</PersonalEdit>
      <ID>&nbsp;&nbsp;&nbsp;&nbsp;아이디</ID>
      <IDInput></IDInput>

      <Navigation />
    </Wrap>
  );
};

const MyPage = styled.div`
  text-align: center;
  align-content: center;
  border-bottom: 2px solid #151419;
  display: flex;
  justify-content: space-between;
`;

const BackDiv = styled.div`
  display: inline-block;
`;

const MyP = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  align-items: center;
  margin: 0;
  padding: 5px 0;
`;

const PersonalEdit = styled.div`
height: 75px;
font-size: 24px;
font-weight: 700;
text-align: left;
margin:20px 0;
border-bottom: 2px solid #151419;
`

const ID = styled.div`
height: 50px;
line-height: 25px;
font-weight: 700;
text-align: left;
`

const IDInput = styled.input`
border-bottom: 2px solid #151419;
border-top: 2px solid #151419;
border-right: none;
border-left: none;
width: 100%;
height: 75px;
box-sizing: border-box;
`

export default MyEdit;
