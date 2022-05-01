import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { ActionCreators as userActions } from "../redux/modules/user";
import { userApis } from "../shared/apis";

const SignUp = () => {
  const dispatch = useDispatch();

   //회원가입 목록
   const [keypressNick, setKeypressNick] = React.useState();
   const [id, setId] = React.useState("");
   const [nickname, setnickname] = React.useState("");
   const [password, setpassword] = React.useState("");
   const [passwordCheck, setpasswordCheck] = React.useState("");
 
   //유효성 검사
   const [isNick, setIsNick] = React.useState("");
   const [isPwd, setIsPwd] = React.useState(false);
   const [samePwd, setSamePwd] = React.useState(false);
 
 
   //중복검사
   const _nickCheck = useSelector((state) => state.user.nickCk);
   const [err,setErr] = React.useState(false); // 닉네임 중복검사 에러
   const [errMsg,setErrMsg] = React.useState(""); // 닉네임 중복검사 에러메시지

    //이메일 한글막기
  const onChangeMail = (e) => {
    //좌우 방향키, 백스페이스, 딜리트, 탭키에 대한 예외
    if(e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 46 ) return;
    e.target.value = e.target.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');    
  };

  //닉네임 정규식
  const onChangeNick = (e) => {
    setnickname(e.target.value);
    setErr(false);
    dispatch(userActions.nickCheck("false"));
    setErrMsg("");

    let userNickRegex = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,7}$/;
    let NickRegex = userNickRegex.test(e.target.value);

    setKeypressNick(false);
    if (!NickRegex) {
      setIsNick(false);
    } else {
      setIsNick(true);
    }
  };

  //비밀번호 정규식

  const onChangePwd = (e) => {
    setSamePwd(false);
    const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
    const pwdcurrent = e.target.value;
    let PwdRegex = pwdRegex.test(e.target.value);
    
    setpassword(pwdcurrent);

    if (!PwdRegex) {
      setIsPwd(false);
    } else {
      setIsPwd(true);
    }

    if (pwdcurrent === passwordCheck) {
      setSamePwd(true);
    } else {
      setSamePwd(false);
    }
  };

  //비밀번호 확인

  const checkPwd = (e) => {
    setSamePwd(false);
    const pwdcurrent2 = e.target.value;
    setpasswordCheck(pwdcurrent2);
    if (pwdcurrent2 === password) {
      setSamePwd(true);
    } else {
      setSamePwd(false);
    }
  };

  const nicknameCheck = () => {
    setErr(false);
    setErrMsg("");
    // 닉네임 중복체크
    userApis
      .nicknameCheck(nickname)
      .then((res) => {
        dispatch(userActions.nickCheck(res.data));
        setKeypressNick(res.data.result);
      })
      .catch((err) => {
        console.log("닉네임 중복확인 에러", err);
        setErr(true);
        setErrMsg(err.response.data.message);
      });
  };

  

  const signup = () => {
    if (isPwd === true && samePwd === true && _nickCheck === "true") {
      // const mail = `${email}@${domain?domain:option}`;

      const signup = {
        id: id,
        nickname: nickname,
        password: password,
        passwordCheck: passwordCheck,
      };

      userApis
        .signup(signup)
        .then((res) => {
          if(res.data.result === "true"){
            window.alert("회원가입 성공")
          }
        })
        .catch((error) => {
          window.alert(error.response.data.message);
          console.log("회원가입 실패:", error);
          
        });

    } else {
      window.alert("모든 조건이 맞는지 확인해주세요.");
    }
  };  
  return (
    <Container>
      <Box2>
        <LoginInput
          // value={userName}
          placeholder="아이디"
          // onChange={(e) => {
          //   setUsername(e.target.value);
          // }}
        />
        <LoginInput
          // value={nickname}
          placeholder="닉네임"
          // onChange={(e) => {
          //   setNickname(e.target.value);
          // }}
        />
        <LoginInput
          // value={pw}
          placeholder="비밀번호"
          type="password"
          // onChange={(e) => {
          //   setPw(e.target.value);
          // }}
        />
        <LoginInput
          // value={passwordCheck}
          placeholder="비밀번호 확인"
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
