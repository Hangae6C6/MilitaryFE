import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionCreators as searchActions } from "../redux/modules/search";
import { ActionCreators as postActions } from "../redux/modules/main";
import { ActionCreators as userChallengeDetailActions } from "../redux/modules/detail";

import Navigation from "../component/Navigation";
import searchIcon from "../shared/icons/SearchIcon.png";
import logo from "../shared/icons/handlogo11.png";
import mainlogo from "../shared/icons/mainlogo.png";
import img from "../shared/images/workout.png";
import gobackIcon from "../shared/icons/arrowWhite.png";
import joinNum from "../shared/icons/joinnumber.png";
import viewCnt from "../shared/icons/viewcount.png";
import searchWhite from "../shared/images/searchIcon.png";
import {
  readingBlack,
  jobBlack,
  jobSearchBlack,
  workoutBlack,
  competitionBlack,
  licenseBlack,
  selfBlack,
  etcBlack,
  foreignLanguageBlack,
} from "../shared/icons/icons";
const Nav = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = React.useState("");
  const results = useSelector((state) => state.search.challenges);
  const cards = useSelector((state) => state.card.cards);

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, [dispatch]);

  const searchHandler = () => {
    dispatch(searchActions.searchDB(keyword));
    setKeyword("");
  };
  const searchTypeHandler = (challengetype) => {
    dispatch(searchActions.searchDB(challengetype));
  };
  const veiwCountHandlerInSearch = (challengeId, challengeCnt) => {
    dispatch(postActions.addVeiwCountDB(challengeId, challengeCnt));
  };

  const lists = cards.filter((cur) => cur.challengeViewCnt > 0);
  const list = lists.sort((a, b) => b.challengeViewCnt - a.challengeViewCnt);
  
  return (
    <Container>
      <div className="nav">
        <img id="logo" src={logo} alt="img" height="53" />
        <img id="mainlogo" src={mainlogo} alt="img" height="23" width="130" />
      </div>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            window.location.pathname = "/";
          }}
        >
          <img src={gobackIcon} alt="goback" width="20px" height="20px" />
        </div>
        <div id="title">검색</div>
      </div>
      <div id="upperbox">
        <input
          id="inputBox"
          value={keyword}
          placeholder="| 키워드를 입력하세요"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <div id="searchicon">
          <img src={searchIcon} alt="search" width="22px" height="22px" onClick={searchHandler}/>
        </div>
      </div>

   
      <MiddleBox>
        {list.map((card, idx) => {
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
        {results.map((card, idx) => {
          return (
            <div
              id="box"
              key={card + idx}
              onClick={() => {
                veiwCountHandlerInSearch(card.challengeNum, card.challengeCnt);
              }}
            >
             <div id="type">
                    <p id="p">{card.challengeType}</p>
                  </div>
                  <div id="typeIcons">
                    <img
                      src={
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
                      }
                      alt="img"
                      height="60px"
                      width="60px"
                    />
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
              );
            })}
      </LowerBox>
            <ImgSearchWhite>
            <img src={searchWhite} alt="searchWhite" width="500px" height="500px" />
            </ImgSearchWhite>
            <Navigation />
    </Container>
  );
};

export default Nav;
const Container = styled.div`
  display: block;
  max-height: 100%;
  max-width: 375px;
  height: 100vh;
  width: 100%;
  border: 2px solid #151419;
  position: relative;
  overflow: hidden;
  background-color: #ffffff;

  .nav {
    width: 375px;
    height: 44px;
    background-color: #151419;

    #logo {
      margin: 13px 0 0 20px;
      width: 140px;
    }
    #mainlogo {
      margin: 10px 0 30px 60px;
    }
  }
  .top {
    height: 100px;
    width: 375px;
    border-top: 4px solid #ffffff;
    background-color: #151419;
    .arrow {
      height: 23px;
      width: 20px;
      margin: 17px 0px 0px 20px;
      cursor: pointer;
    }
    #title {
      width: 100px;
      color: #ffffff;
      font-size: 34px;
      font-family: Gmarket SansBold;
      margin: 10px 0 0 20px;
    }
  }
  #upperbox {
    display: flex;
    height: 80px;
    border-bottom: #151419 2px solid;
    #inputBox {
      width: 300px;
      height: 40px;
      padding: 16px;
      outline: none;
      border: none;
      box-sizing: border-box;
      font-size: 20px;
      margin: 20px 0 0 8px;
      font-family: Gmarket SansMedium;
      
    }
    #searchicon{
      width: 30px;
      height: 30px;
      margin: 28px 0 0 20px;
      cursor: pointer;
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
    height: 160px;
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
    #typeIcons {
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
      overflow: hidden;
    }
    #icons {
      display: flex;
      margin: 10px 0 0 20px;
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

const ImgSearchWhite = styled.div`
z-index: 0;
opacity: 0.5;
position: absolute;

`;
