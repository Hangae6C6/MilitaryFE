import React from "react";
import styled from "styled-components";
import { history } from "../../redux/configureStore";

const BeginPage = () => {

  return (
    <div>
      <GotestDiv>
      <GoTestP>테스트하기</GoTestP>
      </GotestDiv>
        
      <QDiv>
        <QImage />
        <QText>질문 텍스트</QText>
      </QDiv>
      
    <QuestDiv>
      <Quest>선택지1</Quest>
      <Quest>선택지2</Quest>
      <Quest>선택지3</Quest>
    </QuestDiv>

      <NextButton
        onClick={() => {
          history.push("/main/preTest/question");
        }}
      >다음</NextButton>
    </div>
  );
};

const GotestDiv = styled.div`

`

const GoTestP = styled.p`
font-size: 20px;
margin:10px 0;
text-align: center;
`

const QDiv = styled.div`
justify-content: center;
`

const QImage = styled.div`
  background-image: url("https://dummyimage.com/600x600/b0b0b0/222");
  height: 345px;
  width:345px;
  background-size: cover;
  display: inline-block;
`;



const QText = styled.div`
height: 80px;
width: 90%;
background-color: beige;
display: inline-block;
`

const QuestDiv = styled.div`

`


const Quest = styled.div`
height: 40px;
width: 90%;
background-color: beige;
display: inline-block;
margin: 5px;
`

const NextButton = styled.div`
width:100%;
background-color: bisque;
cursor: pointer;
text-align: center;
align-items: center;
padding:10px 0;
border-radius: 20px;
`;

export default BeginPage;
