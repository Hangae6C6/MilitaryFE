import React, { useEffect } from "react";
import styled from "styled-components";
import { infoList as dataInfoList } from "../../data/data";
import { useParams } from "react-router-dom";

const DescTxt = () => {
  const params = useParams();
  const resultIdx = params.id;
  return (
    <div>
        <DescP>
          {dataInfoList[resultIdx].desc}
        </DescP>
    </div>
  );
};


const DescP = styled.p`
font-family: NanumSquareMedium;
  width: 90%;
  height: 100%;
  margin: 40px 20px ;
  text-align: center;
  font-weight:600;
  font-size: 24px;
`;

export default DescTxt;
