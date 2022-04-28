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
    <Background>
      <DivBox>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />}></Route>
            <Route exact path="/detail" element={<Detail />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<SignUp />}></Route>
            <Route exact path="/mypage" element={<MyUser />}></Route>
            {/* 챗봇페이지 라우팅, 컴포넌트 추후 수정 필요 */}
            <Route exact path="/user/userdata" element={<Chat />}></Route>
            <Route exact path="/user/userdata" element={<Test />}></Route>
          </Routes>
        </Router>
      </DivBox>
    </Background>
  );
}

const DivBox = styled.div`
  margin: 0px auto;
  max-width: 375px;
  max-height: 812px;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border: 1px solid black;
`;

const Background = styled.div`
  max-width:100%;
  max-height: 100%;
  width: 100vw;
  height: 100vh;

`;

export default App;
