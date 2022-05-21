import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as getUserChallengeActions } from "../../redux/modules/detail";
import { history } from "../../redux/configureStore";

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

  // let step = 0;
  // for (let i = 0; i < myChallengeStep.length; i++) {
  //   step = myChallengeStep.length;
  // }
  // console.log(step);

  // let checkedStep = 0;
  // let progressScore = 0;
  // let checked = [];
  // console.log(myChallengeStep);
  // for (let i = 0; i < myChallengeStep.length; i++) {
  //   for (let j = 0; j < myChallengeStep[i].steps.length; j++) {
  //     console.log(myChallengeStep);
  //     if (myChallengeStep[i].steps[j].isChecked == true) {
  //       checkedStep += 1;
  //     }
  //   }
  //   progressScore = (checkedStep / step) * 100;
  // }
  // console.log(checked);
  return (
    <ChalLi>
      {ChalList.map((chal, i) => {
        return (
          <Wrap
            onClick={() => {
              history.replace(`/detailpage/${chal.challengeNum}`);
              window.location.reload();
            }}
          >
            <Title>
              {chal.challengeTitle}
              <Type className="type">{chal.challengeType}</Type>
            </Title>
            {console.log(chal)}
            <Progress>
              <p className="view">조회수&nbsp;:&nbsp;{chal.challengeViewCnt}</p>
              <div className="day">
                <div className="start">
                  시작일&nbsp;:&nbsp;{chal.challengeStartDate}
                </div>
                <div className="end">
                  종료일&nbsp;:&nbsp;{chal.challengeEndDate}
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
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  padding: 15px 0 0 15px;
  height: 50px;
  border-top: 2px solid #151419;
  display: space-between;
`;

const Type = styled.div`
  font-size: 14px;
  background-color: #151419;
  color: white;
  display: inline-block;
  margin: 10px;
  padding: 4px;
  margin: 0 0 0 20px;
`;

const Progress = styled.div`
  border-top: 1px solid #151419;
  height: 80px;
  .day{
  display: space-between;
}
  .view {
    padding: 10px;
    margin: 0;
    text-align: center;
  }
  .start {
    display: inline-block;
    text-align: start;
    margin: 0 20px 0 20px;
  }
  .end {
    display: inline-block;
    text-align: end;
    margin: 0 0 0 20px;
  }
`;

export default Challenges;
