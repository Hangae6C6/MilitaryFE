import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as getUserChallengeActions } from "../../redux/modules/detail";
import { ActionCreators as challengeActions } from "../../redux/modules/challenge";
import closeIcon from "../../shared/icons/icnCloseBlack32.svg";
import Modal from "../../shared/modal/Modal";

const Challenges = ({userId, myChallengeList }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);

  const challengeDeleteHandler = (challengeNum) =>{
     dispatch(challengeActions.deleteCallengeDB(challengeNum, userId));
  }
  
  return (
    <ChalLi>
      {myChallengeList.map((chal, i) => {
        return (
          <div key={chal+i}>
          <Wrap
     
          >
            <CloseDiv>
              <Close
                src={closeIcon}
                alt="closeIcon"
                onClick={() => {
                  setIsOpen(true);
                }}
              ></Close>
            </CloseDiv>
            <Title    onClick={() => {
              window.location.pathname = `/detailpage/${chal.challengeNum}`;
            }}>
              {chal.challengeTitle}
              <Type>{chal.challengeType}</Type>
            </Title>

            <Progress>
              <div className="day">
                <div className="start">
                  {chal.challengeStartDate} - {chal.challengeEndDate}
                </div>
              </div>
            </Progress>
          </Wrap>  
          
          <Modal
        open={isOpen}
        close={() => setIsOpen(false)}
        done={() => challengeDeleteHandler(chal.challengeNum)}
      />
      </div>
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
  padding: 5px;
  margin: 0 0 0 10px;
`;

const CloseDiv = styled.div`
  width: 50px;
  float: right;
  z-index: 1;
  cursor: pointer;
`;

const Close = styled.img`
  float: right;
  margin: 10px 20px 0 0;
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
