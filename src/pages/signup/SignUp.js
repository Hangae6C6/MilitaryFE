import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { ActionCreators as userActions } from "../../redux/modules/user";
import gobackIcon from "../../shared/icons/icnBackNormalBlack35.svg";

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
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[\w]{8,}$/;
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

    dispatch(userActions.signupDB(id, password, nickname, passwordCheck));
    setTimeout(()=> {
      window.location.pathname=`/signupData/${id}`;
    },1000)
  };

  return (
    <Container>
      <div className="nav"></div>
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            window.location.pathname = "/login";
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
      </Box2>


      <NextButton
        onClick={() => {
          signup();
        }}
      >
        회원가입
      </NextButton>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: block;
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
    height: 89px;
    display: flex;
    border-top: 2px solid #151419;
    background-color: #b62323;

    #p {
      font-size: 32px;
      font-family: Gmarket SansBold;
      margin: 30px auto;
      color: #ffffff;
    }
  }
`;

const Box2 = styled.div`
  height: 250px;
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
