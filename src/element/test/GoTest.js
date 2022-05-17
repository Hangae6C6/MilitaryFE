import React from "react";
import styled from "styled-components";

const GoTest = () => {
  return (
    <div>
      <GotestDiv>
        <GoTestP>테스트 하기</GoTestP>
      </GotestDiv>
    </div>
  );
};

const GotestDiv = styled.div`
  border-bottom: 2px solid #151419;
`

const GoTestP = styled.p`
font-size: 20px;
margin:10px 0;
text-align: center;
`
export default GoTest;
