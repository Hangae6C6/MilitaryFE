import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ActionCreators as userActions } from "../redux/modules/user";
import { getCookie } from "./cookie";

import Main from "../pages/Main";
import Detail from "../pages/Main";
import Login from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import MyUser from "../pages/MyUser";
import Chat from "../pages/Chat";
import BeginPage from "../pages/test/BeginPage";
import QuestionPage from "../pages/test/QuestionPage";
import KakaoAuth from "./KakaoAuth"
import NaverAuth from "./NaverAuth";
import Nav from "../component/Nav"
import UserData from "../component/user/UserData";

function App() {
  const dispatch = useDispatch();
  const token = getCookie("token");
  const router = useSelector((state) => state.router.location.pathname);

  useEffect(() => {
    if (token) {
      dispatch(userActions.loginCheckDB());
    }
  }, [router]);

  return (
    <Background>
      <DivBox>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/postDetail" element={<Detail />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/userdata" element={<UserData />}></Route>
            <Route path="/oauth/kakao/callback" exact component={KakaoAuth}></Route>
            <Route path="/oauth/naver/callback" exact component={NaverAuth}></Route>
            <Route exact path="/detail/chat" element={<Chat />}></Route>
            <Route exact path="/main/preTest" element={<BeginPage />}></Route>
            <Route exact path="/search" element={<Nav />}></Route>
            <Route
              exact
              path="/main/preTest/question"
              element={<QuestionPage />}
            ></Route>
            <Route exact path="/myPage" element={<MyUser />}></Route>
          </Routes>
        </Router>
      </DivBox>
    </Background>
  );
}

const DivBox = styled.div`
  margin: auto;
  max-width: 375px;
  max-height: 812px;
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const Background = styled.div`
  max-width: 100%;
  max-height: 100%;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

export default App;
