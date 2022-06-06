import React from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { ActionCreators as userActions } from "../../redux/modules/user";
import gobackIcon from "../../shared/icons/arrowWhite.png";

const SignUp = () => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  const isId = (id) => {
    let pattern = /^[a-zA-z0-9]{4,12}$/;
    return pattern.test(id); 
  };

  const isNickname = (nickname) => {
    let pattern = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,6}$/;
    return pattern.test(nickname); 
  };

  const isPwd = (password) => {
    let pattern = /^(?=.*[A-Za-z])(?=.*\d)[\w]{8,}$/;
    return pattern.test(password); 
  };

  const signup = () => {
    if (
      id === "" ||
      nickname === "" ||
      password === "" ||
      passwordCheck === ""
    ) {
      toast.error("Please fill in the blanks.", { position:"top-center" });
      return;
    }

    if (!isId(id)) {
      toast.error("Invalid ID format.", { position:"top-center" });
      return;
    }

    if (!isNickname(nickname)) {
      toast.error("Invalid Name format.", { position:"top-center" });
      return;
    }

    if (!isPwd(password)) {
      toast.error("Invalid Password format.", { position:"top-center" });
      return;
    }

    if (password !== passwordCheck) {
      toast.error("Password is incorrect", { position:"top-center" });
      return;
    }

    dispatch(userActions.signupDB(id, password, nickname, passwordCheck));

  };

  return (
    <Container>
     
      <div className="top">
        <div
          className="arrow"
          onClick={() => {
            window.location.pathname = "/login";
          }}
        >
          <img src={gobackIcon} alt="goback" width="20" height="18" />
        </div>
      </div>
      <div id="title-box">
        <p id="p">Soldier Challegners</p>
      </div>
      <Box2>
        <LoginInput
          value={id}
          placeholder="Id"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <LoginInput
          value={nickname}
          placeholder="Name"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
        <LoginInput
          value={password}
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <LoginInput
          value={passwordCheck}
          placeholder="Password Check"
          type="password"
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
        />
      </Box2>

        <div id="empty"/>
      <NextButton
        onClick={() => {
          signup();
        }}
      >
        Signup
      </NextButton>
      <ToastContainer />
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: 2px solid #151419;
 
  .top {
    height: 69px;
    width: 100%;
    border-top: 4px solid #ffffff;
    background-color: #151419;
  }
  .arrow {
    position: absolute;
    margin: 17px 0px 0px 20px;
    cursor: pointer;
  }
  #title-box {
    width: 100%;
    height: 159px;
    display: flex;
    border-top: 2px solid #151419;
    background-color: #151419;

    #p {
      font-size: 34px;
      font-family: Gmarket SansBold;
      margin: 15px 70px;
      color: #ffffff;
    }
  }

  #empty {
    width: 100%;
    border-top: #151419 2px solid;
  }
`;

const Box2 = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
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
  position: fixed;
  bottom: 0.2em;
  margin-left: -2px;
  padding: 32px 157px;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  font-family: NanumSquareMedium;
  background-color: #151419;
  border-top: 1px solid #151419;
  cursor: pointer;
`;