import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ActionCreators as userActions } from "../redux/modules/user";
import { getCookie } from "./cookie";

import logo from "./icons/handlogo11.png";
import mainlogo from "./icons/mainlogo.png";
import baemin from "../image/Baemin.png";
import americano from "../image/Americano.png";
import go from "../image/Go.png";

import Main from "../pages/Main";
import Detailpage from "../pages/detail/Detailpage";
import Login from "../pages/LogIn";
import SignUp from "../pages/signup/SignUp";
import SignupDone from "../pages/signup/SignupDone";
import MyUser from "../pages/MyUser";
import Chat from "../pages/Chat";
import BeginPage from "../pages/test/BeginPage";
import QuestionPage from "../pages/test/QuestionPage";
import ResultPage from "../pages/test/ResultPage";
import KakaoAuth from "./socialLogin/KakaoAuth";
import Search from "../pages/Search";
import SignupData from "../pages/signup/SignupData";
import Challenge from "../pages/Challenge";
import DetailpageRank from "../pages/detail/DetailpageRank";
import DetailpageLink from "../pages/detail/DetailpageLink";
import Link from "../pages/Link";
import MyEdit from "../pages/MyEdit";
import mainImage from "../shared/images/imgWebMainSoliderGreen640.png";

function App() {
  const dispatch = useDispatch();
  const router = useSelector((state) => state.router.location.pathname);

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      dispatch(userActions.loginCheckDB());
    }
  }, [dispatch, router]);

  return (
    <Background>
      <LeftSide>
        <div id="title">
          <div id="titleText">전역하고 뭐하지</div>
        </div>
        <div id="mainImage">
          <Banner>
            <What>
              전역하고 뭐하지? 이벤트 참여하지!
              <div className="event">
                이벤트 기간 | 5월 27일(금) - 6월 4일 (토)
              </div>
            </What>
            <Icon>
              <div className="alignNoBorder">
                <img className="baemin" width="75px" src={baemin} />
                <p className="coupon_p">배달의민족 쿠폰</p>
                <div className="first">
                  제일 먼저 챌린지 개설하고
                  <br />
                  배달의민족 시켜먹자!
                  <br />
                  챌린지 조회수 1위 달성해도! <br />
                  챌린지 참여자수 1위 달성해도!
                  <div className="people">전우 5명</div>
                </div>
              </div>
              <div className="align">
                <img className="ameri" width="155px" src={americano} />
                <p className="coupon_p">스타벅스 아이스 아메리카노</p>
                <div className="second">
                  설문조사 참여하고
                  <br />
                  기프티콘 받기!
                </div>

                <div
                  className="survey"
                  onClick={() => {
                    window.open("https://jaimemin.tistory.com/1449", "_blank");
                  }}
                >
                  설문조사 참여하기 <img src={go} />
                </div>
                <div className="people">전우 10명</div>
              </div>
            </Icon>
          </Banner>
          <img
            id="logo"
            src={mainImage}
            alt="mainImage"
            width="640"
            height="370"
          />
        </div>
        <div id="lowerBox">
          <div id="upperText">SOLDIER CHALLENGERS</div>
          <div id="lowerText">솔저 챌린저스</div>
          <span id="lowerText">해야지</span>
        </div>
        <div id="bottomBox">
          <div id="bottomText">
            운동/ 독서/ 스터디/ 자기개발/ 취업/ 외국어/ 진로고민/ 자격증
          </div>
        </div>
      </LeftSide>

      <DivBox>
        <Logo>
          <img id="logo" src={logo} alt="img" height="53" />
          <img id="mainlogo" src={mainlogo} alt="img" height="23" width="130" />
        </Logo>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route
              exact
              path="/signupdata/:id"
              element={<SignupData />}
            ></Route>
            <Route exact path="/signupdone" element={<SignupDone />}></Route>
            <Route
              path="/api/auth/kakao/callback"
              exact
              element={<KakaoAuth />}
            />
            <Route
              exact
              path="/detail/chat/:challengeId"
              element={<Chat />}
            ></Route>
            <Route exact path="/main/preTest/" element={<BeginPage />}></Route>
            <Route exact path="/search/" element={<Search />}></Route>
            <Route
              exact
              path="/main/preTest/question"
              element={<QuestionPage />}
            ></Route>
            <Route
              exact
              path="/main/preTest/:id"
              element={<ResultPage />}
            ></Route>
            <Route exact path="/myPage/:id" element={<MyUser />}></Route>
            <Route exact path="/link/:challengeId" element={<Link />}></Route>
            <Route
              exact
              path="/myPage/userProfile/edit/:userId"
              element={<MyEdit />}
            ></Route>
            <Route
              exact
              path="/detailpage/:challengeId"
              element={<Detailpage />}
            ></Route>
            <Route
              exact
              path="/detailpage/rank/:challengeId"
              element={<DetailpageRank />}
            ></Route>
            <Route
              exact
              path="/detailpage/link/:challengeId"
              element={<DetailpageLink />}
            ></Route>
            <Route exact path="/challenge" element={<Challenge />} />
          </Routes>
        </Router>
      </DivBox>
    </Background>
  );
}

const Background = styled.div`
  @media (max-width: 576px) {
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  display: flex;
  box-sizing: border-box;
  border: 4px solid #151419;
  height: 100vh;
  width: 100vw;
`;

const LeftSide = styled.div`
  @media (max-width: 576px) {
    display: none;
    border: none;
  }
  border-right: 2px solid #151419;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  #title {
    border-bottom: 2px solid black;
    padding: 45px 220px;
    width: 100vw;
    display: flex;
    justify-content: start;
    box-sizing: border-box;
    z-index: -1;
    #titleText {
      width: 630px;
      height: 100px;
      font-size: 88px;
      font-family: Gmarket SansBold;
    }
  }
  #mainImage {
    padding: 0 140px;
    border-bottom: 2px solid black;
    height: 364px;
    #logo {
      margin: 43px;
    }
  }
  #lowerBox {
    padding: 0px 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    border-bottom: 2px solid #151419;
    width: 100vw;
    flex: 2;
    #upperText {
      margin-bottom: 16px;
      font-size: 26px;
      font-family: Gmarket SansMedium;
    }
    #lowerText {
      display: flex;
      box-sizing: border-box;
      font-size: 60px;
      font-family: Gmarket SansBold;
    }
  }
  #bottomBox {
    padding: 30px 280px;
    #bottomText {
      display: flex;
      font-size: 20px;
      font-family: Gmarket Sans;
    }
  }
`;

const Banner = styled.div`
  border-left: 2px solid black;
  width: 420px;
  height: 323px;
  position: absolute;
  top: 195px;
  left: 580px;
`;

const What = styled.div`
  border-bottom: 2px solid black;
  height: 65px;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  font-size: 20px;
  font-family: Gmarket SansBold;
  .event {
    font-family: Gmarket Sans;
    padding: 15px 0;
  }
`;

const Icon = styled.div`
  display: flex;
  .alignNoBorder {
    display: space-around;
    width: 200px;
    padding: 10px;
    height: 230px;
    .baemin {
      width: 45px;
      padding: 25px;
    }
    .coupon_p {
      padding: 0 0 10px 0px;
      margin: 0;
      font-size: 14pxx;
      font-weight: 600;
    }
    .first {
      font-size: 12px;
      font-weight: 600;
    }
    .people {
      display: inline-block;
      background-color: black;
      color: #fff;
      font-weight: 600;
      margin: 10px 0 0 0;
      font-weight: 600;
      font-size: 12px;
    }
  }
  .align {
    border-left: 2px solid black;
    .ameri {
      width: 90px;
      padding: 13px 0 0 0;
    }
    .coupon_p {
      padding: 0 0 10px 10px;
      margin: 0;
      font-size: 14px;
      font-weight: 600;
    }
    .second {
      padding-left: 10px;
      font-size: 12px;
      font-weight: 600;
    }
    .survey {
      border: 1px solid #1fb57e;
      color: #1fb57e;
      margin: 8px 0 0 10px;
      font-weight: 600;
      display: inline-block;
      cursor: pointer;
    }
    .people {
      display: inline-block;
      background-color: black;
      color: #fff;
      font-weight: 600;
      margin: 10px 0 0 10px;
      font-weight: 600;
      font-size: 12px;
    }
  }
`;

const People = styled.p`
  display: inline-block;
  background-color: black;
  color: #fff;
  font-weight: 600;
  margin-left: 8px;
  font-weight: 600;
  font-size: 12px;
`;

const DivBox = styled.div`
  @media (max-width: 576px) {
    margin: 0 auto;
    max-width: 375px;
    max-height: 935px;
  }
  width: 375px;
  max-height: 94%;
  margin: 0 auto;
  background-color: #fff;
`;

const Logo = styled.div`
  max-width: 379px;
  height: 44px;
  background-color: #151419;
  #logo {
    margin: 15px 0 0 20px;
    width: 140px;
    position: absolute;
  }
  #mainlogo {
    margin: 10px 0 30px 220px;
  }
`;

export default App;
