import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import img from "../../shared/images/workout.png";
import { ActionCreators as postActions } from "../../redux/modules/main";

const MyCallenge = ({ user, cards }) => {
  const dispatch = useDispatch();

  const veiwCountHandler = (challengeId, challengeCnt) => {
    dispatch(postActions.addVeiwCountDB(challengeId, challengeCnt));
  };
  return (
    <>
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
              <img src={img} alt="img" height="64px" width="64px" />
              <div id="type">
                <p id="p">{card.challengeType}</p>
              </div>
              <div id="title">{card.challengeTitle}</div>
              <div id="count">{card.challengeCnt}명 참여중</div>
            </div>
          );
        })}
      </Container>

      <AddButton>
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
  );
};

export default MyCallenge;

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 378px;


  #box {
    text-align: center;
    height: 160px;
    width: 125px;
    border-right: 2px solid #151419;
    border-bottom: 2px solid #151419;
    margin-right: -2px;
    #type {
      #p {
        border: #151419 1px solid;
        font-size: 16px;
        font-family: Gmarket SansMedium;
        color: #ffffff;
        background-color: #151419;
        height: 26x;
        width: 80px;
        margin: 0px 5px 0 20px;
      }
    }
    #title {
      width: 120px;
      height: 20px;
      font-size: 16px;
      color: #1fb57e;
      font-family: Gmarket SansBold;
      border: 3px;
      margin: 10px 0 0 2px;
      overflow: hidden;
    }
    #count {
      font-size: 14px;
      color: #151419;
      font-family: Gmarket SansMedium;
      margin: 5px 0 0 3px;
    }
    cursor: pointer;
    &:hover {
      background-color: #1fb57e;
      border-left: 2px solid #151419;
      margin: 0 -2px 0 -2px;
      color: #151419;
      #title {
        color: #ffffff;
      }
    }
  }
`;
const AddButton = styled.div`
  height: 85px;
  border-bottom: 2px solid #151419;
  border-top: 2px solid #151419;
  margin-top: -2px;
  #button {
    text-align: center;
    width: 100%;
    height: 55px;
    background-color: #ffffff;
    padding-top: 30px;
    color: #151419;
    font-size: 24px;
    font-family: Gmarket SansBold;
    
    cursor: pointer;
    &:hover {
      background-color: #151419;
      color: #ffffff;
    }
  }
`;
