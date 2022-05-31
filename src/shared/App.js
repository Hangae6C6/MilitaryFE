import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ActionCreators as userActions } from "../redux/modules/user";
import { getCookie } from "./cookie";
import Event from "./banner";
import logo from "./icons/handlogo11.png";
import mainlogo from "./icons/mainlogo.png";

import Main from "../pages/Main";
import Detailpage from "../pages/detail/Detailpage";
import Guide from "../pages/Guide";
import Login from "../pages/LogIn";
import SignUp from "../pages/signup/SignUp";
import SignupDone from "../pages/signup/SignupDone";
import MyUser from "../pages/MyUser";
import Chat from "../pages/Chat";
import ChatSocket from "../element/chat/ChatSocket";
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
          <Event />
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
          <img onClick={()=>{
            window.location.pathname='/';
          }} id="mainlogo" src={mainlogo} alt="img" height="23" width="130" />
        </Logo>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route
              exact
              path="/signupdata/:id"
              element={<SignupData/>}
            ></Route>
            <Route exact path="/signupdone" element={<SignupDone />}></Route>
            <Route
              path="/api/auth/kakao/callback"
              exact
              element={<KakaoAuth/>}
            />
            <Route
              exact
              path="/detail/chat/:challengeId"
              element={<Chat/>}
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
            <Route exact path="/link/:challengeId,:userId" element={<Link />}></Route>
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
            <Route exact path="/chatsocket/:challengeId,:userNick" element={<ChatSocket />} />
            <Route exact path="/guide" element={<Guide />} />
            
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

const DivBox = styled.div`
  @media (max-width: 576px) {
    margin: 0 auto;
    max-width: 375px;
    max-height: 935px;
  }
  width: 375px;
  display: flex;
  flex-direction: column;
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
