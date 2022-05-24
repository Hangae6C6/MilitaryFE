import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const GET_POST = "GET_POST";
const GET_PROGRESS = "GET_TOTALPROGRESS";
const GET_TEST_COUNT = "GET_TEST_COUNT";

const getPost = createAction(GET_POST, (cards) => ({
  cards,
}));
const getProgress = createAction(GET_PROGRESS, (totalProgress) => ({
  totalProgress,
}));

const getTestCount = createAction(GET_TEST_COUNT, (testCount) => ({
  testCount,
}));



const initialState = {
  cards: [{
    challengeCnt: 0,
    challengeEndDate:"",
    challengeLimitNum: 0,
    challengeNum: 0,
    challengeProgress: "",
    challengeTitle:"",
    challengeType: "",
    challengeViewCnt: 0,
    steps: [{
      stepNum: 0,
      isChecked:false,
      stepContent:"",
    },]
  },],
  totalProgress: {
    totalChallengeProgress:0,
    userId: "",
  },
  testCount: 0
};

const getPostDB = () => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: "http://13.125.228.240/api/main",
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
        url: `http://13.125.228.240/api/main/challenge?userId=${userId}`,
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

const addVeiwCountDB = (challengeId, challengeCnt) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "post",
        url: `http://13.125.228.240/api/categoryClick?challengeNum=${challengeId}`,
        data: {
          challengeCnt,
        },
      }).then((response) => {
      
        window.location.pathname = `/detailpage/${challengeId}`;
      });
    } catch (err) {
      console.log(err);
      window.alert("challengeDetail GET 요청 실패");
    }
  };
};

const addTestCountDB = (testViewCount) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: `http://13.125.228.240/api/main/testCount?userId=${testViewCount}`,
      }).then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log(err);
      window.alert("addTestCount 요청 실패"); 
    }
  };
};

const getTestCountDB = () => {
  return async function (dispatch) {
    try {
      await axios({
        method: "get",
        url: "http://13.125.228.240/api/main/testCountRead",
      }).then((response) => {
        dispatch(getTestCount(response.data));
        console.log(response.data)
      });
    } catch (err) {
      console.log(err);
      window.alert("getTestCount 요청 실패");
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
      [GET_TEST_COUNT]: (state, action) =>
      produce(state, (draft) => {
        draft.testCount = action.payload.testCount;
      }),
  },
  initialState
);

const ActionCreators = {
  getPostDB,
  getProgressDB,
  addVeiwCountDB,
  addTestCountDB,
  getTestCountDB,
};

export { ActionCreators };
