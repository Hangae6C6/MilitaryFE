import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import img from "../../shared/images/workout.png"
import { ActionCreators as postActions } from "../../redux/modules/main";
import { ActionCreators as searchActions } from "../../redux/modules/search";

const HotChallenge = ({cards}) => {
const dispatch = useDispatch();
  const veiwCountHandlerInHot = (challengeId, challengeCnt) =>{
    dispatch(postActions.addVeiwCountDB(challengeId, challengeCnt));
  }
  const searchTypeHandler = (type) => {
    dispatch(searchActions.searchDB(type));
    setTimeout(()=>{
      window.location.pathname=`/search/${type}`;
    },0)
  }

  const lists = cards.filter(cur => cur.challengeViewCnt > 0);
  const list = lists.sort((a, b) => b.challengeViewCnt - a.challengeViewCnt);


  return (
    <Container>
      <UpperBox>
        <div id="title">
          <div id="title-text"> HOT 챌린지</div>
        </div>
      </UpperBox>
      <MiddleBox>
      {cards?.map((card, idx) => {
          return (
            <div
              id="card"
              key={card + idx}
              onClick={() => {
                searchTypeHandler(card.challengeType);
              }}
            >
              {card.challengeType}
            </div>
          );
        })}
      </MiddleBox>
      <LowerBox>
      {list && list.map((result, idx) => (
          <div id="box" key={result+idx}
          onClick={() => {
            veiwCountHandlerInHot(result.challengeNum, result.challengeCnt);
          }}>
          <img src={img} alt="img" height="52px" width="52px" />
          <div id="type">
            <p id="p">{result.challengeType}</p>
          </div>
          <div id="title">{result.challengeTitle}</div>
          <div id="count">{result.challengeCnt}명 참여중</div>
        </div>

        ))}
      </LowerBox>
    </Container>
  );
};

export default HotChallenge;

const Container = styled.div``;

const UpperBox = styled.div`
  width: 375px;
  height: 79px;
  background-color: #ffffff;
  border-bottom: 2px solid #151419;
  #title {
    padding: 30px 0 0 15px;
    #title-text {
      color: #b62323;
      font-size: 26px;
      font-family: Gmarket SansBold;
    }
  }
`;

const MiddleBox = styled.div`
  display: flexbox;
  height: 47px;
  border-bottom: #151419 2px solid;
  overflow: hidden;
  #card {
    overflow: hidden;
    text-align: center;
    width: 80px;
    height: 20px;
    border: 1px solid #151419;
    font-size: 18px;
    font-family: Gmarket SansMedium;
    margin: 10px 0 0 10px;
    cursor: pointer;
    &:hover {
      background-color: #151419;
      color: #ffffff;
    }
  }
`;

const LowerBox = styled.div`
   display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 378px;
  max-height: 381px;

  #box {
    text-align: center;
    height: 130px;
    width: 125px;
    border-right: 2px solid #151419;
    border-bottom: 2px solid #151419;
    margin-right: -2px;
    cursor: pointer;
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
      height: 30px;
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
      margin: -10px 0 0 3px;
  
    }
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
