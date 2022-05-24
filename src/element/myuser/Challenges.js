import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as getUserChallengeActions } from "../../redux/modules/detail";
import { history } from "../../redux/configureStore";
import closeIcon from "../../shared/icons/icnCloseBlack32.svg";
import Modal from "../../shared/modal/Modal";
import { SettingsPowerRounded } from "@material-ui/icons";

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

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ChalLi>
      {ChalList.map((chal, i) => {
        return (
          <Wrap>
            <Title
              onClick={() => {
                history.replace(`/detailpage/${chal.challengeNum}`);
                window.location.reload();
              }}
            >
              {chal.challengeTitle}
              <Type>{chal.challengeType}</Type>
              <Close
                src={closeIcon}
                alt="closeIcon"
                onClick={() => {
                  setIsOpen(true);
                }}
              ></Close>
            </Title>
            {console.log(chal)}
            <Progress>
              <div className="day">
                <div className="start">
                  {chal.challengeStartDate} - {chal.challengeEndDate}
                </div>
              </div>
            </Progress>
          </Wrap>
        );
      })}
      <Modal open={isOpen} close={() => setIsOpen(false)} />
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
  display: space-between;
  cursor: pointer;
`;

const Type = styled.div`
  font-size: 14px;
  background-color: #151419;
  color: white;
  display: inline-block;
  padding: 4px;
  margin: 0 0 10px 10px;
`;

const Close = styled.img`
  float: right;
  margin: 0 20px 0 0;
`;

const Progress = styled.div`
  font-family: Gmarket Sans;
  height: 40px;
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
