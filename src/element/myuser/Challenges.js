import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as getUserChallengeActions } from "../../redux/modules/detail";
import { history } from "../../redux/configureStore";
import closeIcon from "../../shared/icons/icnCloseBlack32.svg";

const Challenges = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const ChalList = useSelector(
    (state) => state.challengeDetail.userChallengeDetail.answer
  );
  console.log(ChalList);
  const myChallengeStep = useSelector(
    (state) => state.challengeDetail.userChallengeDetail.joinlist_id
  );
  console.log(myChallengeStep);

  React.useEffect(() => {
    dispatch(getUserChallengeActions.getUserChallengeDetailDB(id));
  }, [dispatch, id]);

  return (
    <ChalLi>
      {ChalList.map((chal, i) => {
        return (
          <Wrap>
            <CloseDiv>
              <Close src={closeIcon} alt="closeIcon"></Close>
            </CloseDiv>
            <Title
              onClick={() => {
                history.replace(`/detailpage/${chal.challengeNum}`);
                window.location.reload();
              }}
            >
              {chal.challengeTitle}
              <Type>{chal.challengeType}</Type>
            </Title>
            {console.log(chal)}
            <Progress onClick={() => {
                history.replace(`/detailpage/${chal.challengeNum}`);
                window.location.reload();
              }}>
              <div className="day">
                <div className="start">
                  {chal.challengeStartDate} - {chal.challengeEndDate}
                </div>
              </div>
            </Progress>
          </Wrap>
        );
      })}
    </ChalLi>
  );
};

const Wrap = styled.div`
  overflow: hidden;
`;
const ChalLi = styled.div``;

const Title = styled.div`
  font-family: Gmarket SansBold;
  font-weight: bold;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  padding: 15px 0 10px 15px;
  height: 50px;
  border-top: 2px solid #151419;
  cursor: pointer;
  display: space-around;
`;

const Type = styled.div`
  font-size: 14px;
  background-color: #151419;
  color: white;
  display: inline-block;
  padding: 4px;
  margin: 0 0 10px 10px;
`;

const CloseDiv = styled.div`
  width: 50px;
  float: right;
  z-index: 1;
  cursor: cell;
`;

const Close = styled.img`
  float: right;
  margin: 10px 20px 0 0;
`;

const Progress = styled.div`
  font-family: Gmarket Sans;
  height: 40px;
  cursor: pointer;
  .day {
    display: space-between;
    text-align: center;
  }
  .view {
    padding: 10px;
    margin: 0;
    text-align: center;
  }
`;

export default Challenges;
