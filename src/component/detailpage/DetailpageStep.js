import React from "react";
import styled from "styled-components";
import "./DetailFont.css";

const DetailpageStep = ({ steps }) => {
  const [isChecked, setIsChecked] = React.useState(false);
  console.log(isChecked);
  const checkedHandler = () => {
    if (isChecked === true) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };
  console.log(steps);

  // steps = [
  //   { stepContent: "안녕하세요" },
  //   { stepContent: "안녕하신가요" },
  //   { stepContent: "안녕하세요3" },
  // ];

  return (
    <ChallengeName>
      <div id="top">
        <div id="title">느리게 살기 챌린지</div>
      </div>
      {steps && steps.map((step, idx) => {
        <Astep key={step + idx}>
          <div id="stepTitle">{step.stepContent}</div>
          <div
            id="checkBox"
            onClick={() => {
              checkedHandler();
            }}
          ></div>
        </Astep>;
      })}
    </ChallengeName>
  );
};

export default DetailpageStep;

const ChallengeName = styled.div`
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
  #stepTitle {
    font-family: NanumSquareMedium;
    color: #151419;
    font-size: 16px;
    width: 280px;
    height: 22px;
    margin: 20px 0 0 26px;
  }
  #checkBox {
    width: 22px;
    height: 22px;
    margin: 20px 20px 0 10px;
    border: 1px solid #151419;
    &:hover {
      cursor: pointer;
      background-color: #151419;
    }
  }
`;
