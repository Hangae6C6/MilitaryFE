import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { infoList as dataInfoList } from "../../data/data";
import { useLocation, useParams } from "react-router-dom";

const DescTxt = () => {
  const params = useParams();
  const resultIdx = params.id;
  console.log(resultIdx);

  return (
    <div>
      <DescDiv>
        <DescP>
          {dataInfoList[resultIdx].name}
          <br />
          {dataInfoList[resultIdx].desc}
        </DescP>
      </DescDiv>
    </div>
  );
};

const DescDiv = styled.div`
  width: 95%;
  height: 100%;
  background-color: aliceblue;
`;

const DescP = styled.p`
  margin: 0;
  padding: 15px;
`;

export default DescTxt;
