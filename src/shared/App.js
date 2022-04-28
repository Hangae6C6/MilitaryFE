import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "../pages/Main";
import Detail from "../pages/Main";
import Login from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import MyUser from "../pages/MyUser";
import Chat from "../pages/Chat";
import Test from "../pages/Test";

function App() {
  return (
    <Router>
      <Routes>
        <Background>
          <DivBox>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/postDetail" element={<Detail />}></Route>
            <Route exact path="/user/login" element={<Login />}></Route>
            <Route exact path="/user/signup" element={<SignUp />}></Route>
            <Route exact path="/mypage" element={<MyUser />}></Route>
            {/* 챗봇페이지 라우팅, 컴포넌트 추후 수정 필요 */}
            <Route exact path="/user/userdata" element={<Chat />}></Route>
            <Route exact path="/user/userdata" element={<Test />}></Route>
          </DivBox>
        </Background>
      </Routes>
    </Router>
  );
}

const DivBox = styled.div`
  max-width: 375px;
  max-height: 812px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

const Background = styled.body`
  background-color: black;
`;

export default App;
