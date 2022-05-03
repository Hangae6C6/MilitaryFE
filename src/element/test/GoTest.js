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

`

const GoTestP = styled.p`
font-size: 20px;
margin:10px 0;
text-align: center;
`
export default GoTest;
