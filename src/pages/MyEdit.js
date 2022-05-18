import React from "react";
import Wrap from "../element/test/Wrap";
import styled from "styled-components";
import { ReactComponent as Back } from "../image/back.svg";

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

const WriteDiv = styled.div`
  display: inline-block;
  cursor: pointer;
`;

export default MyEdit;
