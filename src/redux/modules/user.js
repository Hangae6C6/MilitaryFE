import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";
import { ActionCreators as navBarActions } from "../../redux/modules/main";
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
  return async function () {
    try {
      await axios({
        method: "post",
        url: "https://pizzaboy.shop/api/signUp",
        data: {
          userId: userId,
          userPw: userPw,
          userNick: userNick,
          userPwCheck: userPwCheck,
        },
      }).then(() => {
        window.location.pathname=`/signupData/${userId}`;
      });
    } catch (err) {
      console.log(err);
      window.alert("회원가입 실패");
    }
  };
};

const loginDB = (userId, password) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: "https://pizzaboy.shop/api/login",
        data: {
          userId,
          userPw: password,
        },
      }).then((res) => {
        let num = 1;
        const accessToken = res.data.loginToken;
        setCookie("token", `${accessToken}`);
        dispatch(setUser(res));
        dispatch(navBarActions.addNavCheckedDB(num));
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
      url: "https://pizzaboy.shop/api/logincheck",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        dispatch(getUser(res.data.user));

      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const kakaoLogin = (code) => {
  return async function (dispatch, getState, { history }) {
    axios
      .get(`https://pizzaboy.shop/api/auth/kakao/callback?code=${code}`)
      .then((res) => {
        const token = res.data.token;
        setCookie("token", token);

        dispatch(loginCheckDB());
        window.location.pathname = "/";
      })
      .catch((err) => {
        window.alert("소셜 로그인에 실패하였습니다.", err);
        window.location.pathname="/login";
      });
  };
};


const logoutDB = (userId) => {
  return function (dispatch) {
    let num = 1;
    deleteCookie("token"); 
    localStorage.removeItem("userId");
    dispatch(logout());
    dispatch(navBarActions.addNavCheckedDB(num, userId));
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
  getUser,
  signupDB,
  loginDB,
  loginCheckDB,
  logoutDB,
  kakaoLogin,
};

export { ActionCreators };
