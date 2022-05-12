import React from "react";
import { useDispatch } from "react-redux";
import { ActionCreators as userActions } from "../../redux/modules/user";
import { setCookie } from "../cookie";

const NaverAuth = (props) => {
  const dispatch = useDispatch();
  const tokenSave = () => {
    let params = new URL(document.location).searchParams;

    let code = params.get("code");
    let state = params.get("state");

    sessionStorage.setItem("state", state);
    sessionStorage.setItem("code", code);
    console.log(code, state);

    // dispatch(userActions.NaverLogin(code, state));
  };

  try {
    tokenSave();
    window.alert("NaverAuth 컴포넌트 23번째 줄 성공");
    // window.location.href = "/";
  } catch {
    window.alert("네이버 로그인 실패, 다시 로그인 해주세요!");
    window.location.href = "/body";
  }
  return <div>네이버 로그인 페이지</div>;
};

export default NaverAuth;
