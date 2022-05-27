import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ActionCreators as postActions } from "../../redux/modules/main";
import joinNum from "../../shared/icons/joinnumber.png";
import viewCnt from "../../shared/icons/viewcount.png";


import {
  readingBlack,
  jobBlack,
  jobSearchBlack,
  workoutBlack,
  competitionBlack,
  licenseBlack,
  selfBlack,
  etcBlack,
  foreignLanguageBlack,
} from "../../shared/icons/icons";

const MyCallenge = ({ user, cards, token }) => {
  const dispatch = useDispatch();

  const veiwCountHandler = (challengeId, challengeCnt) => {
    dispatch(postActions.addVeiwCountDB(challengeId, challengeCnt));


  };
  return (
    <>
      {!token ? (
        <AddButton>
          <div
            id="button"
            onClick={() => {
              window.location.pathname = "/login";
            }}
          >
            챌린지 개설하기
          </div>
        </AddButton>
      ) : (
        <>
          {" "}
          <Container>
            {cards.map((card, idx) => {
              return (
                <div
                  id="box"
                  key={card + idx}
                  onClick={() => {
                    veiwCountHandler(card.challengeNum, card.challengeCnt);
                  }}
                >
                  <div id="type">
                    <p id="p">{card.challengeType}</p>
                  </div>
                  <div id="typeIcons">
                    <img
                      src={
                        card.challengeType === "운동"
                          ? workoutBlack
                          : card.challengeType === "취업"
                          ? jobBlack
                          : card.challengeType === "직업탐색"
                          ? jobSearchBlack
                          : card.challengeType === "자기개발"
                          ? selfBlack
                          : card.challengeType === "기타"
                          ? etcBlack
                          : card.challengeType === "공모전"
                          ? competitionBlack
                          : card.challengeType === "자격증"
                          ? licenseBlack
                          : card.challengeType === "외국어"
                          ? foreignLanguageBlack
                          : readingBlack
                      }
                      alt="img"
                      height="60px"
                      width="60px"
                    />
                  </div>

                  <div id="title">{card.challengeTitle}</div>
                  <div id="icons">
                    <div id="count">
                      <img src={joinNum} alt="img" height="12px" width="15px" />{" "}
                      {card.challengeCnt}
                    </div>
                    <div id="viewCnt">
                      <img src={viewCnt} alt="img" height="12px" width="15px" />{" "}
                      {card.challengeViewCnt}
                    </div>
                  </div>
                </div>
              );
            })}
          </Container>
          <AddButton primary>
            <div
              id="button"
              onClick={() => {
                if (user.userId) {
                  window.location.pathname = "/challenge";
                } else {
                  window.location.pathname = "/login";
                }
              }}
            >
              챌린지 개설하기
            </div>
          </AddButton>
        </>
      )}
    </>
  );
};

export default MyCallenge;

const Container = styled.div`
 
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 378px;

  #box {
    text-align: center;
    height: 167px;
    width: 125px;
    border-right: 2px solid #151419;
    border-bottom: 2px solid #151419;
    margin-right: -2px;
    #type {
      margin-left: 35px;
      #p {
        font-size: 16px;
        font-family: Gmarket SansMedium;
        color: #ffffff;
        background-color: #1fb57e;
        height: 27x;
        width: 70px;
        margin: 0px 5px 0 20px;
      }
    }
    #typeIcons {
      margin-top: 10px;
    }
    #title {
      width: 120px;
      height: 20px;
      font-size: 16px;
      color: #151419;
      font-family: Gmarket SansBold;
      border: 3px;
      margin: 10px 0 0 2px;
      overflow: hidden;
    }
    #icons {
      display: flex;
      margin: 15px 0 0 20px;
      #count {
        font-size: 14px;
        color: #8c8c8c;
        font-family: Gmarket SansMedium;
        margin: 3px 0 0 3px;
      }
      #viewCnt {
        font-size: 14px;
        color: #8c8c8c;
        font-family: Gmarket SansMedium;
        margin: 3px 0 0 16px;
      }
    }

    cursor: pointer;
  }
`;
const AddButton = styled.div`
  height: 85px;
  border-bottom: 2px solid #151419;
  border-top: ${props => props.primary? "2px solid #151419" : "2px solid #3f3f3f"};
  margin-top: -2px;
  #button {
    text-align: center;
    width: 100%;
    height: 55px;
    background-color: #151419;
    padding-top: 30px;
    color: #ffffff;
    font-size: 24px;
    font-family: Gmarket SansBold;
    cursor: pointer;
  }
`;
