import React from "react";
import styled from "styled-components";
import axios from "axios";
import { history } from "../../redux/configureStore";
import {useState, useEffect} from "react";
import {qnaList} from '../../data/data'

const Question = () => {
  const [num, setNum] = useState(1);
  const [type, setType] = useState(new Array(9).fill(0));
  const steps = Math.floor((num / 9) * 100);

  const onIncrease = (e) => {
    setNum(num + 1);
    setType(
      type.map((v, i) => v + qnaList(num - 1).answer[e.target.id][`type${i + 1}`])
    );
    console.log(onIncrease);
  };

  return (
    <div>
      <QDiv>
        <QImage />{steps+'%'}&nbsp;/&nbsp;100%
        <QText>{qnaList[num-1].q}</QText>
      </QDiv>
      <BWrap>
        {qnaList[num-1].a.map((elem, i) => {
          return(
            <Button onClick={onIncrease} value={elem.answer} key={i} id={i}>
              {elem.answer}
            </Button>
          )
        })}
      </BWrap>
    </div>
  );
};

const QDiv = styled.div`
  justify-content: center;
`;

const QImage = styled.div`
  background-image: url("https://dummyimage.com/600x600/b0b0b0/222");
  height: 345px;
  width: 345px;
  background-size: cover;
  display: inline-block;
`;

const QText = styled.div`
  height: 80px;
  width: 90%;
  background-color: beige;
  display: inline-block;
`;

const BWrap = styled.div`

`

const Button = styled.div`
height: 40px;
width: 90%;
background-color: beige;
display: inline-block;
margin: 5px;
`

export default Question;
