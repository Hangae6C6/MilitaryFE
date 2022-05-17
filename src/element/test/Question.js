import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { qnaList } from "../../data/data";
import { history } from "../../redux/configureStore";
import { ReactComponent as Back } from "../../image/back.svg";

const Question = () => {
  const [num, setNum] = useState(1);
  const [type, setType] = useState(new Array(9).fill(0));

  const step = Math.floor((num / 9) * 100);
  //type=[0,0,0,0,0,0,0,0,0]

  const Image = ({ image }) => {
    return <img src={image} />;
  };

  const onIncrease = (e, qIdx, idx) => {
    let result = [];
    for (let i = 0; i < e.length; i++) {
      for (let j = 0; j <= type.length; j++) {
        if (e[i] === j) {
          type[j]++;
        }
      }
    }

    const resultNum = type.indexOf(Math.max(...type)) + 1;

    setNum(num + 1);
    console.log(resultNum);
  };

  const resultNum = type.indexOf(Math.max(...type)) + 1;

  if (num === 10) {
    history.push({
      pathname: `/main/preTest/${resultNum}`,
      state: { isUser: true },
    });
    window.location.reload();
  }

  return (
    <>
      <QDiv>
        <Back
          onClick={() => {
            history.back();
          }}
          cursor="pointer"
        />
        <ProgressBar>
          <Progress width={step} />
        </ProgressBar>
        <img align-items='center' height="351px" src={qnaList[num - 1].image} />
        <QText>{qnaList[num - 1].q}</QText>
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
                {elem.answer}
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
`;
const ProgressBar = styled.div`
  width: 100%;
  height: 24px;
  border-bottom: 2px solid #3f3f3f;
  border-top: 2px solid #3f3f3f;
  box-sizing: border-box;
`;
const Progress = styled.div`
  width: ${(props) => props.width}%;
  height: 22px;
  background-color: #1fb57e;
  border-bottom: 2px solid #3f3f3f;
  box-sizing: border-box;
`;

const QImage = styled.div`
  background-image: url("https://dummyimage.com/600x600/b0b0b0/222");
  height: 345px;
  width: 345px;
  background-size: cover;
  display: inline-block;
`;

const QText = styled.div`
  height: 90px;
  background-color: #ffffff;
  font-weight: 700;
  font-size: 26px;
  text-align: center;
  border-bottom: 2px solid #151419;
  line-height: 45px;
`;

const BWrap = styled.div``;

const Button = styled.div`
  height: 100px;
  background: #ffffff;
  border-bottom: 2px solid #151419;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    background-color: #1fb57e;
  }
`;

export default Question;
