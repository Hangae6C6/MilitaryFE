import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as userActions } from "../redux/modules/user";

const SignUp = () => {
  const dispatch = useDispatch();

  //회원가입 목록
  const [id, setId] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  // 아이디 조건
  const isId = (id) => {
    let pattern = /^[a-zA-z0-9]{4,12}$/;
    return pattern.test(id); // 맞으면 true, 틀리면 false반환
  };

  // 닉네임 조건
  const isNickname = (nickname) => {
    let pattern = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,15}$/;
    return pattern.test(nickname); // 맞으면 true, 틀리면 false반환
  };

  // 비밀번호 조건
  const isPwd = (password) => {
    let pattern =
      /^(?=.*[A-Za-z])(?=.*\d)[\w]{8,}$/;
    return pattern.test(password); // 맞으면 true, 틀리면 false반환
  };

  const signup = () => {
    if (
      id === "" ||
      nickname === "" ||
      password === "" ||
      passwordCheck === ""
    ) {
      window.alert("빈칸을 입력해주세요.");
      return;
    }

    //아이디형식 확인
    if (!isId(id)) {
      window.alert("잘못된 형식입니다.");
      return;
    }

    //닉네임 형식 확인
    if (!isNickname(nickname)) {
      window.alert("잘못된 닉네임 형식입니다.");
      return;
    }

    //비밀번호형식 확인
    if (!isPwd(password)) {
      window.alert("잘못된 비밀번호 형식입니다.");
      return;
    }

    //비밀번호 확인
    if (password !== passwordCheck) {
      window.alert("비밀번호가 다릅니다.");
      return;
    }
    console.log(id, nickname, password);
    dispatch(userActions.signupDB(id, password, nickname, passwordCheck));
  };

  return (
    <Container>
      <Box2>
        <LoginInput
          value={id}
          placeholder="아이디"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <LoginInput
          value={nickname}
          placeholder="닉네임"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <LoginInput
          value={password}
          placeholder="비밀번호"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <LoginInput
          value={passwordCheck}
          placeholder="비밀번호 확인"
          type="password"
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />
        <LoginButton
          onClick={() => {
            signup();
          }}
        >
          회원가입
        </LoginButton>

        <Text bold margin="10px 10px 5px 142px" color="#868e96" size="12pt">
          계정이 이미 있으신가요? {"  "}
          <TextButton
            size="12pt"
            //   onClick={onClickModal}
          >
            로그인
          </TextButton>
        </Text>
      </Box2>
    </Container>
  );
};

export default SignUp;

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
  margin-top: 70px;
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
  background-color: #ffd43b;
  &:hover {
    cursor: pointer;
    background-color: #ffd43b;
  }
`;

const TextButton = styled.span`
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
