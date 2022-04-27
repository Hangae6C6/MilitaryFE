import "./App.css";
import { BrowserRouter, Router } from "react-router-dom";
import { Route } from "react-router-dom";

import Main from "../pages/Main";
import Detail from "../pages/Main";
import Login from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import MyUser from "../pages/MyUser";
import Chat from "../pages/ChatBot";
import Test from "../pages/Test";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/postDetail' component={Detail}></Route>
      <Route exact path='/user/login' component={Login}></Route>
      <Route exact path='/user/signup' component={SignUp}></Route>
      <Route exact path='/mypage' component={MyUser}></Route>
      {/* 챗봇페이지 라우팅, 컴포넌트 추후 수정 필요 */}
      <Route exact path='/user/userdata' componenet={Chat}></Route>
      <Route exact path='/user/userdata' componenet={Test}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
