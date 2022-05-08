import React from "react";
import styled from "styled-components";
import Detail from "./Detail.css"



const DetailpageTitle = () => {
  return (
    <ChallengeName>
      <div id="title">느리게 살기 챌린지</div>
    </ChallengeName>
  );
};

export default DetailpageTitle;

const ChallengeName = styled.div`

  #title {
    width: 375px;
    height: 80px;
    font-size: 24px;
    color: #3f3f3f;
    font-family: Gmarket Sans;
    background-color: #6dbb91;
    border-bottom: 2px solid #3f3f3f;
  }
`;
