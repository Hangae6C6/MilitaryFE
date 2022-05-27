import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ActionCreators as postActions } from "../../redux/modules/main";
import { readingBlack, jobBlack, jobSearchBlack, workoutBlack, competitionBlack, licenseBlack, selfBlack, etcBlack, foreignLanguageBlack } from "../../shared/icons/icons";
import joinNum from "../../shared/icons/joinnumber.png";
import viewCnt from "../../shared/icons/viewcount.png";
const HotChallenge = ({ cards, types }) => {
  const dispatch = useDispatch();
  const veiwCountHandlerInHot = (challengeId, challengeCnt) => {
    dispatch(postActions.addVeiwCountDB(challengeId, challengeCnt));
  };


  const [list, setList] = React.useState(false);
  
  const listsAB = cards.filter((cur) => cur.challengeViewCnt >= 0);
  const listsA = [...listsAB];
  const listsB = [...listsAB];
  const listA = listsA.sort((a, b) => b.challengeViewCnt - a.challengeViewCnt);
  const listB = listsB.sort((a, b) => b.challengeCnt - a.challengeCnt);

 
  return (
    <>
        <Container>
          <UpperBox>
            <div id="title">
              <div id="title-text"> HOT 챌린지</div>
              <div id={list===false ?"viewCnt" : "viewCntUnChecked"} onClick={()=>{
                setList(true);
              }}>조회순</div>
              
              <div id={list===true ? "joinMember" : "joinMemberUnChecked"} onClick={()=>{
                setList(false);
              }}>참여순</div>
            </div>
          </UpperBox>
         
      {list === true ? (
          <LowerBox>
            {listA.map((card, idx) => (
              <div
                id="box"
                key={card + idx}
                onClick={() => {
                  veiwCountHandlerInHot(
                    card.challengeNum,
                    card.challengeCnt
                  );
                }}
              >
                <div id="type">
                <p id="p">{card.challengeType}</p>
              </div>
              <div id="typeIcons">
                <img  src={
            card.challengeType === "운동"
              ? workoutBlack
              : card.challengeType === "취업"
              ? jobBlack
              : card.challengeType === "직업탐색"
              ? jobSearchBlack
              : card.challengeType === "자기개발"
              ? selfBlack
              : card.challengeType === "기타"
              ? etcBlack
              : card.challengeType === "공모전"
              ? competitionBlack
              : card.challengeType === "자격증"
              ? licenseBlack
              : card.challengeType === "외국어"
              ? foreignLanguageBlack
              : readingBlack
          } alt="img" height="60px" width="60px" />
              </div>
              
              <div id="title">{card.challengeTitle}</div>
              <div id="icons">
                <div id="count">
                  <img src={joinNum} alt="img" height="12px" width="15px" />{" "}
                  {card.challengeCnt}
                </div>
                <div id="viewCnt">
                  <img src={viewCnt} alt="img" height="12px" width="15px" />{" "}
                  {card.challengeViewCnt}
                </div>
              </div>
            </div>
            ))}
          </LowerBox>

      ) : (
     
         
        <LowerBox>
        {listB.map((card, idx) => (
          <div
            id="box"
            key={card + idx}
            onClick={() => {
              veiwCountHandlerInHot(
                card.challengeNum,
                card.challengeCnt
              );
            }}
          >
            <div id="type">
            <p id="p">{card.challengeType}</p>
          </div>
          <div id="typeIcons">
            <img  src={
        card.challengeType === "운동"
          ? workoutBlack
          : card.challengeType === "취업"
          ? jobBlack
          : card.challengeType === "직업탐색"
          ? jobSearchBlack
          : card.challengeType === "자기개발"
          ? selfBlack
          : card.challengeType === "기타"
          ? etcBlack
          : card.challengeType === "공모전"
          ? competitionBlack
          : card.challengeType === "자격증"
          ? licenseBlack
          : card.challengeType === "외국어"
          ? foreignLanguageBlack
          : readingBlack
      } alt="img" height="60px" width="60px" />
          </div>
          
          <div id="title">{card.challengeTitle}</div>
          <div id="icons">
            <div id="count">
              <img src={joinNum} alt="img" height="12px" width="15px" />{" "}
              {card.challengeCnt}
            </div>
            <div id="viewCnt">
              <img src={viewCnt} alt="img" height="12px" width="15px" />{" "}
              {card.challengeViewCnt}
            </div>
          </div>
        </div>
        ))}
      </LowerBox>
      )}
      </Container>
    </>
  );
};

export default HotChallenge;

const Container = styled.div`
height: 100%;
`;

const UpperBox = styled.div`
  width: 375px;
  height: 79px;
  background-color: #ffffff;
  border-bottom: 2px solid #151419;
  #title {
    display: flex;
    width: 375px;
    padding: 30px 0 0 20px;
    #title-text {
      color: #A01414;
      font-size: 26px;
      font-family: Gmarket SansBold;
    }
    #viewCnt {
      color: #151419;
      font-size: 18px;
      font-family: NanumSquare;
      margin: 10px 0 0 80px;
      cursor: pointer;
    }
    #viewCntUnChecked {
      color: #151419;
      font-size: 18px;
      font-family: NanumSquareBold;
      margin: 10px 0 0 80px;
      cursor: pointer;
    }
    #joinMember {
      color: #151419;
      font-size: 18px;
      margin: 10px 0px 0 10px;
      font-family: NanumSquare;
      cursor: pointer;
    }
    #joinMemberUnChecked {
      color: #151419;
      font-size: 18px;
      margin: 10px 0px 0 10px;
      font-family: NanumSquareBold;
      cursor: pointer;
    }
  }
`;


const LowerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 378px;

 
  #box {
    text-align: center;
    height: 167px;
    width: 125px;
    border-right: 2px solid #151419;
    border-bottom: 2px solid #151419;
    margin-right: -2px;
    #type {
      margin-left: 35px;
      #p {
        font-size: 16px;
        font-family: Gmarket SansMedium;
        color: #ffffff;
        background-color: #1fb57e;
        height: 27x;
        width: 70px;
        margin: 0px 5px 0 20px;
      }
    }
    #typeIcons{
      margin-top: 10px;
    }
    #title {
      width: 120px;
      height: 20px;
      font-size: 16px;
      color: #151419;
      font-family: Gmarket SansBold;
      border: 3px;
      margin: 10px 0 0 2px;
    
    }
    #icons {
      display: flex;
      margin: 15px 0 0 20px;
      #count {
        font-size: 14px;
        color: #8c8c8c;
        font-family: Gmarket SansMedium;
        margin: 3px 0 0 3px;
      }
      #viewCnt {
        font-size: 14px;
        color: #8c8c8c;
        font-family: Gmarket SansMedium;
        margin: 3px 0 0 16px;
      }
    }
    cursor: pointer;
  }
`;
