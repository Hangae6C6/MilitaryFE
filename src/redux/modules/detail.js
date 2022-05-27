import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const GET_USER_DETAIL = "GET_USER_DETAIL";
const GET_ALL_USER_STEPS = "GET_ALL_USER_STEPS";
const EDIT_STEP = "EDIT_STEP";
const GET_RANK_DETAIL = "GET_RANK_DETAIL";


const getUserChallengeDetail = createAction(GET_USER_DETAIL, (challenges) => ({
  challenges,
}));
const getChallengeDetail = createAction(GET_ALL_USER_STEPS, (challenges) => ({
  challenges,
}));
const getRankDetail = createAction(GET_RANK_DETAIL, (challenges) => ({
  challenges,
}));
const editStepDetail = createAction(EDIT_STEP, (challenges) => ({
  challenges,
}));

const initialState = {
  userChallengeDetail: {
    answer: [
      {
        challengeCnt: 0,
        challengeEndDate: "",
        challengeLimitNum: "",
        challengeNum: 0,
        challengeProgress: "",
        challengeTitle: "",
        challengeType: "",
        challengeViewCnt: 0,
        steps: [
          {
            stepNum: 0,
            isChecked: false,
            stepContent: "",
          },
        ],
      },
    ],
    joinlist_id: [
      {
        challengeNum: "",

        steps: [
          {
            stepNum: 0,
            isChecked: false,
            stepContent: "",
          },
        ],
        userId: "",
      },
    ],
    usernicklist1: "",
  },
  challengeDetail: [
    {
      userId: "",
      userNick:"",
      progress: 0,

    },
  ],
  Users: [],
  steps: [],
};
const changeMyStepDB = (challengeNum, userId, stepNum) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: `https://pizzaboy.shop/api/challengeStep?stepNum=${stepNum}&challengeNum=${challengeNum}&userId=${userId}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(editStepDetail(response.data.challengeJoin));
        
      });
    } catch (err) {
      console.log(err, "changeMyStep POST 요청 실패");
    }
  };
};


const postUserChallengeDetailDB = (userId, challengeId) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: `https://pizzaboy.shop/api/challengeJoin?userId=${userId}&challengeNum=${challengeId}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(getChallengeDetail(response.data));
      });
       window.location.pathname=`/detailpage/${challengeId}`;
    } catch (err) {
      console.log(err, "challengeDetail POST 요청 실패");
    }
  };
};

const getChallengeDetailDB = (challengeId) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "get",
        url: `https://pizzaboy.shop/api/challengeJoinBychallengeNum?challengeNum=${challengeId}`,
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
  return async function (dispatch) {
    try {
      await axios({
        method: "get",
        url: `https://pizzaboy.shop/api/challengeJoin?userId=${userId}`,
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

const getRankDetailDB = (challengeId) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "get",
        url: `https://pizzaboy.shop/api/challengeRanking?challengeNum=${challengeId}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(getRankDetail(response.data.rank));
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
      [EDIT_STEP]: (state, action) =>
      produce(state, (draft) => {
        draft.userChallengeDetail.joinlist_id = [action.payload.challenges];
      }),
      [GET_RANK_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.challengeDetail = action.payload.challenges;
      }),
  },
  initialState
);

const ActionCreators = {
  changeMyStepDB,
  postUserChallengeDetailDB,
  getUserChallengeDetailDB,
  getChallengeDetailDB,
  getRankDetailDB,
};

export { ActionCreators };
