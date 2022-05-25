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
  //type=[0,0,0,0,0,0,0,0,0]

  const onIncrease = (e, qIdx, idx) => {
    let result = [];
    for (let i = 0; i < e.length; i++) {
      for (let j = 0; j <= type.length; j++) {
        if (e[i] === j) {
          type[j]++;
        }
      }
    }

    const resultNum = type.indexOf(Math.max(...type));

    setNum(num + 1);
    console.log(resultNum);
  };

  const resultNum = type.indexOf(Math.max(...type));

  if (num === 10) {
    history.push({
      pathname: `/main/preTest/${resultNum}`,
      state: { resultNum },
    });
    window.location.reload();
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
        <img height="238.5px" src={qnaList[num - 1].image} />
        <QText>
          <div className="question">{qnaList[num - 1].q}</div>
        </QText>
      </QDiv>
      <BWrap>
        {qnaList[num - 1].a.map((elem, i) => {
          return (
            <>
              <Button
                onClick={() => {
                  onIncrease(elem.type);
                }}
                value={elem.answer}
                key={i}
                id={i}
              >
                <div className="index">{i + 1}</div>
                <div className="answer">{elem.answer}</div>
              </Button>
            </>
          );
        })}
      </BWrap>
    </>
  );
};

const QDiv = styled.div`
  justify-content: center;
  font-family: NanumSquare;
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

const QImage = styled.div`
  background-image: url("https://dummyimage.com/600x600/b0b0b0/222");
  height: 345px;
  width: 345px;
  background-size: cover;
  display: inline-block;
`;

const QText = styled.div`
  height: 154px;
  background-color: #ffffff;
  font-weight: 700;
  font-size: 26px;
  font-stretch: condensed;
  text-align: center;
  border-bottom: 2px solid #151419;
  line-height: 45px;
  font-family: NanumSquareBold;
  letter-spacing: -0.3px;
  .question {
    transform: translateY(100%);
  }
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

export default Question;
