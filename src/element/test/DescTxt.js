import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { infoList as inf } from "../../data/data";
import { useLocation, useParams } from "react-router-dom";



const Parsing = (resultIdx, isUser) => {
  const [info, setInfo] = useState();
  useEffect(() => {
    const data = () => {
      setInfo(inf);
    };
    data();
  }, [resultIdx, isUser]);
  if (!info) return null;
};

const DescTxt = () => {
const params = useParams();
// const location = useLocation();

// console.log(location);
console.log(params);
//   const locState = location.state;
  const resultIdx = params.id;

  let isUser = true;
//   if (locState === undefined) {
//     isUser = false;
//   }

  const info = Parsing(resultIdx, isUser);

  return (
    <div>
      <DescDiv>
        <DescP>
          {info.name}
          <br />
          {info.desc}
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
