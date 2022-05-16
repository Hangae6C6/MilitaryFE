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
import gobackIcon from "../shared/icons/icnBackNormalBlack35.svg";

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
      <div className="nav"></div>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            window.location.pathname = "/";
          }}
        >
          <img src={gobackIcon} alt="goback" />
        </div>
      </div>
      <div id="title-box">
        <p id="p">필승 챌린지</p>
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

        <SNSLoginButton
          size="12pt"
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          카카오 로그인
        </SNSLoginButton>
        <SNSLoginButton1
          size="12pt"
          onClick={() => {
            window.location.href = NAVER_AUTH_URL;
          }}
        >
          네이버 로그인
        </SNSLoginButton1>
        <SNSLoginButton2
          size="12pt"
          onClick={() => {
            window.location.href = GOOGLE_AUTH_URL;
          }}
        >
          구글 로그인
        </SNSLoginButton2>
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
  max-height: 812px;
  max-width: 375px;
  height: 100vh;
  width: 100%;
  border: 2px solid #151419;
  .nav {
    width: 375px;
    height: 44px;
  }
  .top {
    height: 69px;
    width: 375px;
    border-top: 2px solid #151419;
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
    #p {
      font-size: 32px;
      font-family: Gmarket SansBold;
      margin: 65px auto;
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
  border-top: 2px soild #141519;
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
  border-top: 2px soild #141519;
  outline: none;
  font-size: 16px;
  font-family: Gmarket SansMedium;
  background-color: #141519;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #3f3f3f;
  }
`;

const SNSLoginButton = styled.button`
  width: 100%;
  height: 62px;
  border-radius: 0px;
  padding: auto;
  box-sizing: border-box;
  border-right: none;
  border-left: none;
  border-top: none;
  border-bottom: 2px soild #141519;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffd43b;
  font-family: Gmarket SansMedium;

  &:hover {
    cursor: pointer;
    background-color: #fae100;
  }
`;

const SNSLoginButton1 = styled.button`
  width: 100%;
  height: 62px;
  border-radius: 0px;
  padding: auto;
  box-sizing: border-box;
  border-right: none;
  border-left: none;
  border-top: none;
  border-bottom: 2px soild #141519;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #03c75a;
  font-family: Gmarket SansMedium;

  &:hover {
    cursor: pointer;
    background-color: #19ce60;
  }
`;

const SNSLoginButton2 = styled.button`
  width: 100%;
  height: 62px;
  border-radius: 0px;
  padding: auto;
  box-sizing: border-box;
  border-right: none;
  border-left: none;
  border-top: none;
  border-bottom: 2px soild #141519;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #e4e8eb;
  font-family: Gmarket SansMedium;

  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`;

const NextButton = styled.button`
  position: absolute;
  bottom: 21.2mm;
  width: 375px;
  height: 80px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #b2b2b2;
  border-top: 2px solid #151419;
  &:hover {
    cursor: pointer;
    background-color: #151419;
  }
`;
