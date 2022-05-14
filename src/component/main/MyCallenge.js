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
          <div id="box" key={card+idx}>
            <img src={img} alt="img" height="52px" width="52px" />
            <div id="type">
              <p id="p">{card.challengeType}</p>
            </div>
            <div id="title">{card.challengeTitle}</div>
            <div id="count">84명 참여중</div>
          </div>);
        })}

        <div id="box">
          <img src={img} alt="img" height="52px" width="52px" />
          <div id="type">
            <p id="p">운동</p>
          </div>
          <div id="title">책 100권 읽기</div>
          <div id="count">84명 참여중</div>
        </div>
        <div id="box">
          <img src={img} alt="img" height="52px" width="52px" />
          <div id="type">
            <p id="p">운동</p>
          </div>
          <div id="title">책 100권 읽기</div>
          <div id="count">84명 참여중</div>
        </div>

        <div id="box">
          <img src={img} alt="img" height="52px" width="52px" />
          <div id="type">
            <p id="p">운동</p>
          </div>
          <div id="title">책 100권 읽기</div>
          <div id="count">84명 참여중</div>
        </div>
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
  height: 130px;
  #box {
    text-align: center;
    height: 130px;
    width: 125px;
    border-right: 2px solid #151419;
    /* border-bottom: 2px solid #151419; */
    margin-right: -2px;
    #type {
      #p {
        border: #151419 1px solid;
        font-size: 16px;
        font-family: Gmarket SansMedium;
        color: #ffffff;
        background-color: #151419;
        height: 26x;
        width: 100px;
        margin: 0 5px 0 10px;
      }
    }
    #title {
      width: 120px;
      height: 30px;
      font-size: 16px;
      color: #1fb57e;
      font-family: Gmarket SansBold;
      border: 3px;
      margin: 10px 0 0 2px;
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
  height: 92px;
  border-bottom: 2px solid #151419;
  border-top: 2px solid #151419;

  #button {
    padding-top: 13px;
    text-align: center;
    width: 298px;
    height: 43px;
    background-color: #151419;
    color: #ffffff;
    font-size: 24px;
    font-family: Gmarket SansBold;
    margin: 18px 0 0 40px;
    cursor: pointer;
    &:hover {
      background-color: #b62323;
      color: #151419;
    }
  }
`;
