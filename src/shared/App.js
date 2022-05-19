import "./App.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ActionCreators as userActions } from "../redux/modules/user";
import { getCookie } from "./cookie";

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
import NaverAuth from "./socialLogin/NaverAuth";
import Nav from "../component/Nav";
import SignupData from "../pages/signup/SignupData";
import Challenge from "../pages/Challenge";
import DetailpageRank from "../pages/detail/DetailpageRank";
import Link from "../pages/Link";
import MyEdit from "../pages/MyEdit";

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
      <DivBox>
        <Router >
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/signupdata/:id" element={<SignupData />}></Route>
            <Route exact path="/signupdone" element={<SignupDone />}></Route>
            <Route path="/api/auth/kakao/callback" exact element={<KakaoAuth />} />
            <Route path="/api/auth/naver/callback" exact element={<NaverAuth />}></Route>
            <Route exact path="/detail/chat/:challengeId" element={<Chat />}></Route>
            <Route exact path="/main/preTest" element={<BeginPage />}></Route>
            <Route exact path="/search" element={<Nav />}></Route>
            <Route exact path="/main/preTest/question" element={<QuestionPage />}></Route>
            <Route exact path="/main/preTest/:id" element={<ResultPage />}></Route>
            <Route exact path="/myPage/:id" element={<MyUser />}></Route>
            <Route exact path="/link/:challengeId" element={<Link />}></Route>
            <Route exact path="/myPage/userProfile/:userId" element={<MyEdit />}></Route>
            <Route exact path="/detailpage/:challengeId" element={<Detailpage />}></Route>
            <Route exact path="/detailpage/rank/:challengeId" element={<DetailpageRank />}></Route>
           
            <Route exact path="/challenge" element={<Challenge /> } />

          </Routes>
        </Router>
      </DivBox>
  );
}

const DivBox = styled.div`
  margin: 0 auto;
  max-width: 375px;
  min-height: 100vh;
  width: 100%;
  height: 100vh;
`;

export default App;
