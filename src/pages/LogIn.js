//SY
import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { ActionCreators as userActions } from "../redux/modules/user";
import {
  KAKAO_AUTH_URL,
  NAVER_AUTH_URL,
  GOOGLE_AUTH_URL,
} from "../shared/auth";

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

        <Text bold margin="20px 5px 5px 5px" size="12pt" color="#868e96">
          소셜 계정으로 로그인
        </Text>
        <SNSLoginButton
          size="12pt"
          onClick={() => {
            window.location.href = KAKAO_AUTH_URL;
          }}
        >
          카카오 계정으로 로그인
        </SNSLoginButton>
        <SNSLoginButton1
          size="12pt"
          onClick={() => {
            window.location.href = NAVER_AUTH_URL;
          }}
        >
          네이버 계정으로 로그인
        </SNSLoginButton1>
        <SNSLoginButton2
          size="12pt"
          onClick={() => {
            window.location.href = GOOGLE_AUTH_URL;
          }}
        >
          구글 계정으로 로그인
        </SNSLoginButton2>

        <Text bold margin="10px 5px 10px 130px" color="#868e96" size="12pt">
          아직 회원이 아니신가요?{" "}
          <TextButton
            size="12pt"
            //    onClick={onClickModal}
          >
            회원가입
          </TextButton>
        </Text>
      </Box2>
    </Container>
  );
};

export default Login;

const Text = styled.div`
  color: "#222831";
  size: "14px";
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 1px solid red;
`;

const Box2 = styled.div`
  margin-top: 60px;
  display: grid;
  z-index: 10;
  border: 1px solid blue;
`;

const LoginInput = styled.input`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: 16px;
  margin: 5px;
  box-sizing: border-box;
  border: 1px solid #dcdddd;
  font-size: 16px;
  &:hover {
  }
`;

const LoginButton = styled.button`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: auto;
  margin: 5px;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

const SNSLoginButton = styled.button`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: auto;
  margin: 5px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #ffd43b;
  &:hover {
    cursor: pointer;
    background-color: #fae100;
  }
`;

const SNSLoginButton1 = styled.button`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: auto;
  margin: 5px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #03c75a;
  &:hover {
    cursor: pointer;
    background-color: #19ce60;
  }
`;

const SNSLoginButton2 = styled.button`
  width: 340px;
  height: 48px;
  border-radius: 0px;
  padding: auto;
  margin: 5px;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  background-color: #e4e8eb;
  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }
`;

const TextButton = styled.span`
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
