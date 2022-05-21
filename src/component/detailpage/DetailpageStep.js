import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import "./DetailFont.css";
import { ActionCreators as detailActions } from "../../redux/modules/detail";

const DetailpageStep = ({ challengeNum, userId, steps }) => {
const dispatch = useDispatch();
  const checkedHandler = (stepNumber) => {
    dispatch(detailActions.changeMyStepDB(challengeNum, userId, stepNumber));
  }; 

  return (
    <ChallengeName>
      <div id="top">
        <div id="title">느리게 살기 챌린지</div>
      </div>
      {steps && steps.map((step, idx) => (
          <Astep key={step+idx}>
            <div id="idx-num">{step.stepNum}</div>
            <div id={step.isChecked ? "checkedTitle" : "stepTitle"}>{step.stepContent}</div>
            <div
              id={step.isChecked ? "checkedBox" : "emptyBox"}
              onClick={() => {
                checkedHandler(step.stepNum);
              }}
            ></div>
          </Astep>
        ))}
    </ChallengeName>
  );
};

export default DetailpageStep;

const ChallengeName = styled.div`
  height: fit-content;
  display: table-row;
  #top {  
    width: 375px;
    height: 80px;
    background-color: #1fb57e;
    border-top: 2px solid #151419;
    border-bottom: 2px solid #151419;
    #title {
      color: #151419;
      font-size: 24px;
      font-family: Gmarket SansBold;
      padding: 35px 0 0 36px;
    }
  }
`;

const Astep = styled.div`
  width: 375px;
  height: 62px;
  border-bottom: 2px solid #151419;
  display: flex;
  #idx-num {
    font-family: NanumSquareMedium;
    color: #151419;
    font-size: 18px;
    margin: 20px 0 0 26px;
  }
  #stepTitle {
    font-family: NanumSquareMedium;
    color: #151419;
    font-size: 16px;
    width: 280px;
    height: 22px;
    margin: 20px 0 0 26px;
  }
  #checkedTitle {
    font-family: NanumSquareMedium;
    text-decoration: line-through;
    color: #151419;
    font-size: 16px;
    width: 280px;
    height: 22px;
    margin: 20px 0 0 26px;
  }
  #emptyBox {
    width: 22px;
    height: 22px;
    margin: 20px 20px 0 10px;
    border: 1px solid #151419;
    background-color: #ffffff;
    &:hover {
      cursor: pointer;
    }
  }
  #checkedBox {
    width: 22px;
    height: 22px;
    margin: 20px 20px 0 10px;
    border: 1px solid #151419;
    background-color: #151419;
    cursor: pointer;
  }
`;
