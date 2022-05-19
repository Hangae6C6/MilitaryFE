import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import img from "../../shared/images/workout.png";

const MyCallenge = ({ user, cards }) => {
  return (
    <>
      <Container>
        {cards.map((card, idx) => {
          return (
            <div
              id="box"
              key={card + idx}
              onClick={() => {
                window.location.pathname = `/detailpage/${card.challengeNum}`;
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

  #box {
    text-align: center;
    height: 159px;
    width: 121px;
    border: 2px solid #151419;
    /* border-left: 1px solid #151419; */
    #type {
      #p {
        border: #151419 1px solid;
        font-size: 16px;
        font-family: Gmarket SansMedium;
        color: #ffffff;
        background-color: #151419;
        height: 26x;
        width: 100px;
        margin: 5px 5px 0 10px;
      }
    }
    #title {
      width: 120px;
      height: 30px;
      font-size: 16px;
      color: #151419;
      font-family: Gmarket SansBold;
      border: 3px;
      margin: 15px 0 0 2px;
    }
    #count {
      font-size: 14px;
      color: #151419;
      font-family: Gmarket SansMedium;
      margin: -10px 0 0 3px;
    }
    cursor: pointer;
    &:hover {
      background-color: #1fb57e;
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
      background-color:  #151419;
      color: #ffffff;
    }
  }
`;
