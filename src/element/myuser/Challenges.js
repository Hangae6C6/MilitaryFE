import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


const Challenges = () => {
  console.log(useSelector((state) => state.challenge))
  const ChalList = useSelector((state) => state.challenge.challenges)
  return (
    <div>
      <Wrap>
        {ChalList.map((chal, idx) => 
        <ChalLi key={idx}>
            {chal.challengeTitle}
            {chal.challengeType}
            {chal.challengeContent}
            {chal.challengeDate}
        </ChalLi>
        )}
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`

`;
const ChalLi = styled.div`

`;

export default Challenges;
