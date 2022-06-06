import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as searchActions } from "../redux/modules/search";
import { ActionCreators as postActions } from "../redux/modules/main";

import Navigation from "../component/Navigation";
import searchIcon from "../shared/icons/SearchIcon.png";
import joinNum from "../shared/icons/joinnumber.png";
import viewCnt from "../shared/icons/viewcount.png";
import searchWhite from "../shared/images/searchIcon.png";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
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
    if (
      keyword === "" 
    ) {
      toast.error("Please enter keywords", { position:"top-center" });
      return;
    }
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
   
      <div className="top">
  
        <div id="title">Search</div>
      </div>
      <div id="upperbox">
        <input
          id="inputBox"
          value={keyword}
          placeholder="| Please enter keyword"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <div id="searchicon">
          <img
            src={searchIcon}
            alt="search"
            width="22px"
            height="22px"
            onClick={searchHandler}
          />
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
      <LowerBoxWrap>

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
        <ImgSearchWhite>
          <img
            src={searchWhite}
            alt="searchWhite"
            width="380px"
            height="380px"
          />
        </ImgSearchWhite>
      </LowerBox>

      </LowerBoxWrap>
      
      <Navigation />
      <ToastContainer />

    </Container>
  );
};

export default Nav;
const Container = styled.div`
  box-sizing: border-box;
  max-width: 375px;
  height: 100%;
  width: 100%;
  border: 2px solid #151419;
  border-bottom: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .top {
    height: 100px;
    width: 100%;
    border-top: 4px solid #ffffff;
    background-color: #151419;

    #title {
      width: 100px;
      color: #ffffff;
      font-size: 34px;
      font-family: Gmarket SansBold;
      margin: 40px 0 0 20px;
    }
  }
  #upperbox {
    display: flex;
    height: 80px;
    border-bottom: #151419 2px solid;
    background-color: #ffffff;

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
    #searchicon {
      width: 30px;
      height: 30px;
      margin: 28px 0 0 20px;
      cursor: pointer;
    }
  }
`;

const MiddleBox = styled.div`
  display: flex;
  width: fit-content;
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

const LowerBoxWrap = styled.div`
  overflow: scroll;
  height: 100%;
  flex: 1;
`;

const LowerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 378px;

  #box {
    text-align: center;
    height: 167px;
    width: 124px;
    border-right: 2px solid #151419;
    border-bottom: 2px solid #151419;
    background-color: #ffffff;
    z-index: 1;
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

const ImgSearchWhite = styled.div`
  z-index: 0;
  opacity: 0.3;
  padding-top: 180px;
  position: absolute;
`;
