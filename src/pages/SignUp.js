//SY
import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Container>
      <Box2>
        <LoginInput
          // value={userName}
          placeholder="아이디를 입력하세요"
          // onChange={(e) => {
          //   setUsername(e.target.value);
          // }}
        />
        <LoginInput
          // value={nickname}
          placeholder="닉네임을 입력하세요"
          // onChange={(e) => {
          //   setNickname(e.target.value);
          // }}
        />
        <LoginInput
          // value={pw}
          placeholder="비밀번호를 입력하세요"
          type="password"
          // onChange={(e) => {
          //   setPw(e.target.value);
          // }}
        />
        <LoginButton
        // onClick={() => {
        //   signup();

        // }}
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
  align-items: flex-start;
  border: 1px solid red;
`;


const Box2 = styled.div`
  margin-top: 70px;
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
  background-color:  #ffd43b;
  &:hover {
    cursor: pointer;
    background-color:  #ffd43b;
  }
`;

const TextButton = styled.span`
  
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
