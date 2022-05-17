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
        <DescP>
          {dataInfoList[resultIdx].desc}
        </DescP>
    </div>
  );
};


const DescP = styled.p`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 20px 0;
  font-weight:600;
  font-size:18px;
`;

export default DescTxt;
