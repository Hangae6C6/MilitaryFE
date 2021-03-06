import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const GET_POST = "GET_POST";
const GET_PROGRESS = "GET_TOTALPROGRESS";
const GET_TEST_COUNT = "GET_TEST_COUNT";
const GET_NAV_CHECKED = "GET_NAV_CHECKED";

const getPost = createAction(GET_POST, (cards) => ({
  cards,
}));
const getProgress = createAction(GET_PROGRESS, (totalProgress) => ({
  totalProgress,
}));

const getTestCount = createAction(GET_TEST_COUNT, (testCount) => ({
  testCount,
}));

const getNavChecked = createAction(GET_NAV_CHECKED, (navBar) => ({
  navBar,
}));

const initialState = {
  cards: [
    {
      challengeCnt: "",
      challengeEndDate: "",
      challengeLimitNum: "",
      challengeNum: "",
      challengeProgress: "",
      challengeTitle: "",
      challengeType: "",
      challengeViewCnt: "",
      steps: [
        {
          stepNum: "",
          isChecked: false,
          stepContent: "",
        },
      ],
    },
  ],
  totalProgress: {
    totalChallengeProgress: 0,
    userId: "",
  },
  testCount: 0,
  navBar: {},
};

const getPostDB = () => {
  return async function (dispatch) {
    try {
      await axios({
        method: "get",
        url: "https://pizzaboy.shop/api/main",
      }).then((response) => {
        dispatch(getPost(response.data));
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const getProgressDB = (userId) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "get",
        url: `https://pizzaboy.shop/api/main/challenge?userId=${userId}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(getProgress(response.data));
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const addVeiwCountDB = (challengeId, challengeCnt) => {
  return async function () {
    try {
      await axios({
        method: "post",
        url: `https://pizzaboy.shop/api/categoryClick?challengeNum=${challengeId}`,
        data: {
          challengeCnt,
        },
      }).then((response) => {
        window.location.pathname = `/detailpage/${challengeId}`;
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const addTestCountDB = (testViewCount) => {
  return async function () {
    try {
      await axios({
        method: "post",
        url: `https://pizzaboy.shop/api/main/testCount?userId=${testViewCount}`,
      }).then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const getTestCountDB = () => {
  return async function (dispatch) {
    try {
      await axios({
        method: "get",
        url: "https://pizzaboy.shop/api/main/testCountRead",
      }).then((response) => {
        dispatch(getTestCount(response.data.countread.TestCount));
      });
    } catch (err) {
      console.log(err);
    }
  };
};
const addNavCheckedDB = (navNum, userId) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: `https://pizzaboy.shop/api/main/iconclick?btnNum=${navNum}`,
      }).then((response) => {
  
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const getNavCheckedDB = () => {
  return async function (dispatch) {
    try {
      await axios({
        method: "get",
        url: "https://pizzaboy.shop/api/main/iconclickRead",
      }).then((response) => {
        dispatch(getNavChecked(response.data.iconRead));
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const checkUserdataDB = () => {
  return async function (dispatch) {
    try{
      await axios ({
        method: "post",
        url: "https://pizzaboy.shop/api/main/preTest1",
      }).then((response) => {
        console.log(response)
       
            });
      }catch (err) {
        console.log(err);
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
    [GET_NAV_CHECKED]: (state, action) =>
      produce(state, (draft) => {
        draft.navBar = action.payload.navBar;
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
  getNavCheckedDB,
  addNavCheckedDB,
  checkUserdataDB,
};

export { ActionCreators };
