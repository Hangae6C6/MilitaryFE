//SY
import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { ActionCreators as userActions } from "../redux/modules/user";
import {
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
  GOOGLE_AUTH_URL,
} from "../shared/socialLogin/auth";
import gobackIcon from "../shared/icons/arrowWhite.png";
import logo from "../shared/icons/handlogo11.png";
import kakao from "../shared/images/kakao_login_small.png";
import naver from "../shared/images/naver login.png";

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const isId = (id) => {
    let pattern = /^[a-zA-z0-9]{4,12}$/;
    return pattern.test(id);
  };

  const isPwd = (password) => {
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[\w]{8,}$/;
    return pattern.test(password);
  };

  const login = () => {
    if (id === "" || password === "") {
      window.alert("빈칸을 입력해주세요.");
      return;
    }

    if (!isId(id)) {
      window.alert("잘못된 이메일 형식입니다.");
      return;
    }

    if (!isPwd(password)) {
      window.alert(
        "비밀번호는 최소 8자, 하나 이상의 문자와 숫자로 입력해주세요."
      );
      return;
    }

    dispatch(userActions.loginDB(id, password));
  };

  return (
    <Container>
      <div className="nav">
        <img id="logo" src={logo} alt="img" height="53" />
      </div>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            window.location.pathname = "/";
          }}
        >
          <img src={gobackIcon} alt="goback" width="20" height="18" />
        </div>
      </div>
      <div id="title-box">
        <p id="p">솔저챌린저스</p>
      </div>
      <Box2>
        <LoginInput
          value={id}
          placeholder="아이디를 입력하세요"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <LoginInput
          value={password}
          placeholder="비밀번호를 입력하세요"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <LoginButton
          onClick={() => {
            login();
          }}
        >
          로그인
        </LoginButton>
        <SocialLogin>
          <img
            id="kakao"
            src={kakao}
            alt="kakao"
            width="60"
            onClick={() => {
              window.location.href = KAKAO_AUTH_URL;
            }}
          />
      
        </SocialLogin>
      </Box2>
      <NextButton
        onClick={() => {
          window.location.href = "/signup";
        }}
      >
        {" "}
        회원가입
      </NextButton>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  max-width: 375px;
  height: 100vh;
  width: 100%;
  border: 2px solid #151419;
  .nav {
    width: 375px;
    height: 44px;
    background-color: #151419;
    #logo {
      margin: 13px 0 0 20px;
      width: 140px;
    }
  }
  .top {
    height: 69px;
    width: 375px;
    border-top: 4px solid #ffffff;
    background-color: #151419;
  }
  .arrow {
    position: absolute;
    margin: 17px 0px 0px 20px;
    cursor: pointer;
  }
  #title-box {
    width: 375px;
    height: 159px;
    display: flex;
    border-top: 2px solid #151419;
    background-color: #151419;

    #p {
      font-size: 34px;
      font-family: Gmarket SansBold;
      margin: 35px auto;
      color: #ffffff;
    }
  }
`;

const Box2 = styled.div`
  display: grid;
`;

const LoginInput = styled.input`
  width: 100%;
  height: 62px;
  padding: 16px;
  outline: none;
  border-right: none;
  border-left: none;
  border-top: 2px solid #141519;
  border-bottom: none;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Gmarket SansMedium;
`;
const LoginButton = styled.button`
  width: 100%;
  height: 62px;
  border-right: none;
  border-left: none;
  border-top: 2px solid #141519;
  outline: none;
  font-size: 22px;
  font-family: Gmarket SansMedium;
  background-color: #ffffff;
  color: #151419;
  &:hover {
    cursor: pointer;
    background-color: #151419;
    color: #ffffff;
  }
`;

const SocialLogin = styled.div`
width: 375px;
#kakao{
  margin: 30px 10px 0 155px;
  cursor: pointer;
}
#naver{
cursor: pointer;
}
`;


const NextButton = styled.button`
  position: fixed;
  bottom: 0.2em;
  width: 375px;
  height: 84px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #151419;
  border-top: 2px solid #151419;
  cursor: pointer;
`;
