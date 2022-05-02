import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { setCookie, deleteCookie } from "../../shared/cookie";

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const SET_USER = "SET_USER";
const NICK_CHECK = "NICK_CHECK";
const SET_WARNING = "SET_WARNING";
const SET_NOTICE = "GET_NOTICE";

const initialState = {
  userId: "",
  userPw: "",
  userNick: "",
  userPwCheck: "",
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
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [NICK_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.nickCk = action.payload.nickCheckres.result;
      }),
    [SET_WARNING]: (state, action) =>
      produce(state, (draft) => {
        draft.setwarning.detail = action.payload.detail;
        draft.setwarning.text = action.payload.text;
      }),
    [SET_NOTICE]: (state, action) =>
      produce(state, (draft) => {
        draft.notice = action.payload.notice;
      }),
  },
  initialState
);

const ActionCreators = {
  //액션 생성자 내보내기
  signupDB,
};

export { ActionCreators };
