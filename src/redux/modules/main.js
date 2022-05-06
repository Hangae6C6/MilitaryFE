import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const GET_POST = "GET_POST";
const GET_PROGRESS = "GET_TOTALPROGRESS";

const getPost = createAction(GET_POST, (cards) => ({
  cards,
}));
const getProgress = createAction(GET_PROGRESS, (totalProgress) => ({
  totalProgress,
}));

const initialState = {
  cards: [],
  totalProgress: {},
};

const getPostDB = () => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: "http://15.164.211.53/api/main",
      }).then((response) => {
        dispatch(getPost(response.data));
      });
    } catch (err) {
      console.log(err);
      window.alert("GET 요청 실패");
    }
  };
};

const getProgressDB = (userId) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: `http://15.164.211.53/api/main/challenge?userId=${userId}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(getProgress(response.data));
      });
    } catch (err) {
      console.log(err);
      window.alert("GET 요청 실패");
    }
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.cards = action.payload.cards;
      }),
    [GET_PROGRESS]: (state, action) =>
      produce(state, (draft) => {
        draft.totalProgress = action.payload.totalProgress;
      }),
  },
  initialState
);

const ActionCreators = {
  getPostDB,
  getProgressDB,
};

export { ActionCreators };
