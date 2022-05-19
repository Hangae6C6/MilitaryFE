import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionCreators as searchActions } from "../redux/modules/search";
import { ActionCreators as postActions } from "../redux/modules/main";
import { ActionCreators as userChallengeDetailActions } from "../redux/modules/detail";

import searchIcon from "../shared/icons/SearchIcon.png";
import logo from "../shared/images/Hand-logo.png";
import img from "../shared/images/workout.png";
import goback from "../shared/icons/icnBackNormalBlack35.svg";

const Nav = () => {
  const  {type}  = useParams("");
  const dispatch = useDispatch();
  const [keyword, setKeyword] = React.useState("");
  const results = useSelector((state) => state.search.challenges);
  const cards = useSelector((state) => state.card.cards);
  
  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(searchActions.searchDB(type));
  },[dispatch, type])

  const searchHandler = () => {
    dispatch(searchActions.searchDB(keyword));
  };
  const searchTypeHandler = (challengetype) => {
    dispatch(searchActions.searchDB(challengetype));
  }
  const veiwCountHandlerInSearch = (challengeId, challengeCnt) => {
    dispatch(postActions.addVeiwCountDB(challengeId, challengeCnt));
  };

  const lists = cards.filter(cur => cur.challengeViewCnt > 0);
  const list = lists.sort((a, b) => b.challengeViewCnt - a.challengeViewCnt);
  return (
    <Container>
      <div className="nav">
        <img id="logo" src={logo} alt="img" />
      </div>
      <div className="top">
        <div className="arrow">
          <div
            id="goback"
            onClick={() => {
              window.location.pathname = "/";
            }}
          >
            <img src={goback} alt="goback" />
          </div>
          <img src={searchIcon} alt="search" width="33px" height="33px" />
        </div>
        <input
          id="inputBox"
          value={keyword}
          placeholder="| 키워드를 입력하세요"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </div>
      <UpperBox>
        <div id="title">
          <div id="title-text"> {keyword}</div>
        </div>
      </UpperBox>
      <MiddleBox>
        {list?.map((card, idx) => {
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
              <img src={img} alt="img" height="64px" width="64px" />
              <div id="type">
                <p id="p">{card.challengeType}</p>
              </div>
              <div id="title">{card.challengeTitle}</div>
              <div id="count">{card.challengeCnt}명 참여중</div>
            </div>
          );
        })}
      </LowerBox>

      <NextButton onClick={searchHandler}>검색하기</NextButton>
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
  .nav {
    width: 375px;
    height: 44px;
    background-color: #151419;
    #logo {
      width: 200px;
    }
  }
  .top {
    display: flex;
    height: 100px;
    width: 375px;
    border-top: 2px solid #151419;
    background-color: #1fb57e;

    .arrow {
      margin: 5px 0px 0px 20px;
      cursor: pointer;
      #goback {
        margin: 0 0px 10px -10px;
      }
    }
    #inputBox {
      width: 300px;
      height: 42px;
      padding: 16px;
      outline: none;
      border: none;
      box-sizing: border-box;
      font-size: 20px;
      margin: 50px 0 0 3px;
      background-color: #1fb57e;
      font-family: Gmarket SansMedium;
    }
  }
`;

const UpperBox = styled.div`
  width: 375px;
  height: 79px;
  background-color: #ffffff;
  border-bottom: 2px solid #151419;
  border-top: 2px solid #151419;

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
      height: 20px;
      font-size: 16px;
      color: #1fb57e;
      font-family: Gmarket SansBold;
      border: 3px;
      margin: 5px 0 0 2px;
      overflow: hidden;
    }
    #count {
      font-size: 14px;
      color: #151419;
      font-family: Gmarket SansMedium;
      margin: 0px 0 0 3px;
    }
    cursor: pointer;
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

const NextButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #1fb57e;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #ffffff;
  border-top: 2px solid #151419;
  &:hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #1fb57e;
  }
`;
