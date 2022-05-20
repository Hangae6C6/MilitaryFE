import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const GET_USER_DETAIL = "GET_USER_DETAIL";
const GET_ALL_USER_STEPS = "GET_ALL_USER_STEPS";


const getUserChallengeDetail = createAction(GET_USER_DETAIL, (challenges) => ({
  challenges,
}));
const getChallengeDetail = createAction(GET_ALL_USER_STEPS, (challenges) => ({
  challenges,
}));

const initialState = {
  userChallengeDetail: [],
  challengeDetail:[]
};

const postUserChallengeDetailDB = (userId, challengeId) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "post",
        url: `http://13.125.228.240/api/challengeJoin?userId=${userId}&challengeNum=${challengeId}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(getChallengeDetail(response.data));
      });
    } catch (err) {
      console.log(err, "challengeDetail POST 요청 실패");
    }
  };
};

const getChallengeDetailDB = (challengeId) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: `http://13.125.228.240/api/challengeJoinBychallengeNum?challengeNum=${challengeId}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(getChallengeDetail(response.data));
      });
    } catch (err) {
      console.log(err, "challengeDetail challengeNum GET 요청 실패");
    }
  };
};

const getUserChallengeDetailDB = (userId) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: `http://13.125.228.240/api/challengeJoin?userId=${userId}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(getUserChallengeDetail(response.data));
      });
    } catch (err) {
      console.log(err, "challengeDetail userId로 GET 요청 실패");
    }
  };
};


export default handleActions(
  {
    [GET_USER_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.userChallengeDetail = action.payload.challenges;
      }),
      [GET_ALL_USER_STEPS]: (state, action) =>
      produce(state, (draft) => {
        draft.challengeDetail = action.payload.challenges.joinlist_challengeNum;
      }),

  },
  initialState
);

const ActionCreators = {
postUserChallengeDetailDB,
getUserChallengeDetailDB,
getChallengeDetailDB,
};

export { ActionCreators };
