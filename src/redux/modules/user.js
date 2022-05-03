import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

const setUser = createAction(SET_USER, (token) => ({ token }));
const logout = createAction(LOGOUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

const initialState = {
  user: {
    userId: "",
    userPw: "",
    userNick: "",
  },
  is_login: false,
};

const signupDB = (userId, userPw, userNick, userPwCheck) => {
  console.log(userId, userPw, userNick, userPwCheck);
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "post",
        url: "http://13.125.228.240/api/signUp",
        data: {
          userId: userId,
          userPw: userPw,
          userNick: userNick,
          userPwCheck: userPwCheck,
        },
      }).then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log(err);
      window.alert("회원가입 실패");
    }
  };
};

const loginDB = (id, password) => {
  console.log(id, password);
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: "http://13.125.228.240/api/login",
        data: {
          userId: id,
          userPw: password,
        },
      }).then((res) => {
        const accessToken = res.data.loginToken;
        setCookie("token", `${accessToken}`);
        dispatch(setUser(res));
        document.location.href = "/user/login";
        
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const loginCheckDB = () => {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://13.125.228.240/api/logincheck",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        dispatch(setUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    console.log(code);
    axios({
      method: "get",
      url: "http://13.125.228.240/api/kakao/login",
    })
      .then((res) => {
        // console.log("res", res);
        const token = res.data.user.token;
        const userId = res.data.user.userId;
        const userName = res.data.user.userName;
        console.log(userName);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);
        dispatch(loginCheckDB());
        console.log("로그인 확인");
        window.location.replace("/"); 
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        // window.location.replace("/");
      });
  };
};

const NaverLogin = (code) => {
  return function (dispatch, getState, { history }) {
    console.log(code);
    axios({
      method: "get",
      url: "http://13.125.228.240/api/naver/login",
    })
      .then((res) => {
        // console.log("res", res);
        const token = res.data.user.token;
        const userId = res.data.user.userId;
        const userName = res.data.user.userName;
        console.log(userName);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userName", userName);
        dispatch(loginCheckDB());
        console.log("로그인 확인");
        window.location.replace("/"); 
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        // window.location.replace("/");
      });
  };
};

const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    deleteCookie("token"); // 쿠키에서 토큰 삭제
    localStorage.removeItem("userId");
    dispatch(logout());
    history.replace("/");
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.user = action.payload.token.user;
        draft.is_login = true;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const ActionCreators = {
  //액션 생성자 내보내기
  getUser,
  signupDB,
  loginDB,
  loginCheckDB,
  logoutDB,
  kakaoLogin,
  NaverLogin,
};

export { ActionCreators };
