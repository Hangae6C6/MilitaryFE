import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ActionCreators as challengeActions } from "../../redux/modules/challenge";
import closeIcon from "../../shared/icons/icnCloseBlack32.svg";
import Modal from "../../shared/modal/Modal";

const Challenges = ({ userId, myChallengeList }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);

  const challengeDeleteHandler = (challengeNum) => {
    dispatch(challengeActions.deleteCallengeDB(challengeNum, userId));
  };

  return (
    <ChalLi>
      {myChallengeList.map((chal, i) => {
        return (
          <div key={chal + i}>
            <Wrap >
              <div id="bigbox"  >
                <div id="titlebox"  onClick={() => {
                      window.location.pathname = `/detailpage/${chal.challengeNum}`;
                    }}
               >
                  <div
                    id="title"
                  
                  >
                    {chal.challengeTitle}
                  </div>
                  <div id="type">{chal.challengeType}</div>
                </div>

                <div id="close">
                  <img
                    src={closeIcon}
                    alt="closeIcon"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  />
                </div>
              </div>

              <div className="day">
                <div className="start">
                  {chal.challengeStartDate} - {chal.challengeEndDate}
                </div>
              </div>
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
  width: 100%;
  height: 125px;
  border-bottom: 2px solid #151419;
  
  #bigbox {
    width: 360px; 
    display: flex;
    #titlebox {
      display: flex;
      justify-content: space-between;
      height:90px;
      

      #title {
        font-family: Gmarket SansBold;
        height: fit-content;
        font-size: 24px;
        margin: 30px 0 0 40px;
      cursor: pointer;

      }
      #type {
        height: fit-content;
        margin: 26px 0 0 15px;
        padding: 5px;
        font-size: 18px;
        font-family: Gmarket SansMedium;
        background-color: #151419;
        color: white;
      }
    }
    #close {
      padding: 10px 0 0 85px;
      float: right;
    }
  }

  .day {
    font-family: Gmarket Sans;
    height: 20px;
    padding: 0px 40px;
    .view {
      padding: 10px;
      margin: 0;
      text-align: center;
    }
  }
`;
const ChalLi = styled.div``;


export default Challenges;
