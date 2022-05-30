import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { qnaList } from "../../data/data";
import { history } from "../../redux/configureStore";
import Back from "../../image/back.svg";

const Question = () => {
  const [num, setNum] = useState(1);
  const [type, setType] = useState(new Array(9).fill(0));

  const step = Math.floor((num / 9) * 100);

  const onIncrease = (e, qIdx, idx) => {
    for (let i = 0; i < e.length; i++) {
      for (let j = 0; j <= type.length; j++) {
        if (e[i] === j) {
          type[j]++;
        }
      }
    }

    setNum(num + 1);
  };

  const resultNum = type.indexOf(Math.max(...type));

  if (num === 10) {
    window.location.pathname = `/main/preTest/${resultNum}`;
  }

  return (
    <>
      <QDiv>
        <ProgressBar>
          <BackIcon
            src={Back}
            onClick={() => {
              history.back();
            }}
          />
          <Progress width={step} />
        </ProgressBar>
        <img height="236px" src={qnaList[num - 1].image} />
        <QText>
          <div className="question">{qnaList[num - 1].q}</div>
        </QText>
      </QDiv>
      <BWrap>
        {qnaList[num - 1].a.map((elem, i) => {
          return (
            <Button
              onClick={() => {
                onIncrease(elem.type);
              }}
              value={elem.answer}
              key={elem + i}
              id={i}
            >
              <div className="index">{i + 1}</div>
              <div className="answer">{elem.answer}</div>
            </Button>
          );
        })}
      </BWrap>
      <NextButton />
    </>
  );
};

const QDiv = styled.div`
  justify-content: center;
  font-family: NanumSquare;
  width: 100%;
  border-bottom: 2px solid #3f3f3f;
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 81px;
  border-bottom: 2px solid #3f3f3f;
  border-top: 2px solid #3f3f3f;
  box-sizing: border-box;
`;
const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 79px;
  background-color: #1fb57e;
  border-bottom: 2px solid #3f3f3f;
  border-right: 2px solid #3f3f3f;
  box-sizing: border-box;
`;
const BackIcon = styled.img`
  z-index: 1;
  position: absolute;
  padding: 15px 0 0 15px;
  cursor: pointer;
`;

const QText = styled.div`
  padding: 60px 0 0 10px;
  height: 119px;
  width: 350px;
  background-color: #ffffff;
  font-size: 26px;
  text-align: center;
  font-family: NanumSquareBold;
`;

const BWrap = styled.div`
  font-family: NanumSquare;
`;

const Button = styled.div`
  height: 107px;
  background: #ffffff;
  border-bottom: 2px solid #151419;
  cursor: pointer;
  display: flex;
  transition: all 0.1s;
  font-family: NanumSquare;
  font-weight: 700;
  &:hover {
    background-color: #1fb57e;
  }
  .index {
    text-align: center;
    width: 70px;
    line-height: 100px;
    font-size: 24px;
    border-right: 2px solid #151419;
  }
  .answer {
    text-align: center;
    width: 303px;
    line-height: 100px;
    font-size: 20px;
  }
`;
const NextButton = styled.button`
  position: fixed;
  bottom: 0.2em;
  margin-left: -2px;
  padding: 32px 185.5px;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #fff;
  border: 2px solid #151419;
  border-top: none;
  cursor: pointer;
`;

export default Question;
