import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as getUserChallengeActions } from "../../redux/modules/detail";

const Challenges = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  console.log(id)
  const ChalList = useSelector(
    (state) => state.challengeDetail.userChallengeDetail.answer
  );
  console.log(ChalList);

  React.useEffect(() => {
    dispatch(getUserChallengeActions.getUserChallengeDetailDB(id));
  }, [dispatch, id]);
  return (
    <div>
      <Wrap>
        {ChalList?.map((chal, idx) => 
        <ChalLi key={idx}>
            <Title>{chal.challengeTitle}</Title>
            <Progress>{chal.challengeProgress}</Progress>
        </ChalLi>
        )}
      </Wrap>
    </div>
  );
};

const Wrap = styled.div`
overflow: hidden;
`;
const ChalLi = styled.div`

`;

const Title = styled.div`
width: 100%;
font-size: 24px;
font-weight: 700;
padding: 15px 0 0 15px;
height:50px;
line-height: 50px;
border-top: 2px solid #151419;
`

const Progress = styled.div`
width: 100%;
font-size: 28px;
font-weight: 800;

height: 80px;
border-top: 2px solid #151419;
text-align: end;
line-height: 90px;
`

export default Challenges;
