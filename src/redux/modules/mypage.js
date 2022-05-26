import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const ADD = "userdata/ADD";
const GET_USER_PROFILE = "GET_USER_PROFILE";
const addUserData = createAction(ADD, (userdata) => ({ userdata }));
const getUserProfile = createAction(GET_USER_PROFILE, (userProfile) => ({ userProfile }));
const initialState = {
  mypage:{
    User: {
      userNick:""
    },
    rank:"",
    armyCategory:"",
    startDate:"",
    endDate:"",
  },
  userdata: [],
  testResult: "",
};
const addUserDataDB = (userId, startDate, endDate, armyCategory, rank) => {
  console.log(userId, startDate, endDate, armyCategory, rank);
  return async function (dispatch) {
    let userdatas = {
      startDate,
      endDate,
      armyCategory,
      rank,
    };
    try {
      await axios({
        method: "post",
        url: `http://13.125.228.240/api/userData?userId=${userId}`,
      
        data: {
          ...userdatas
        },
      }).then((response) => {
        console.log(response);
        dispatch(addUserData(userdatas));
        window.location.pathname = "/signupDone";
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const addTestResultDB = (userId, result) => {
  return async function () {
    try {
      await axios({
        method: "post",
        url: "http://13.125.228.240/api/userTest",
        data: {
          userId,
          testResult: result,
        },
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        console.log(response);
        window.location.pathname='/';
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const getUserProfileDB = (userId) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "get",
        url: `http://13.125.228.240/api/myPage/userProfile?userId=${userId}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(getUserProfile(response));
      });
    } catch (err) {
      console.log(err, "challengeDetail userId로 GET 요청 실패");
    }
  };
};

const editUserDataDB = (userId, userNick, startDate, endDate, armyCategory, rank) => {
  console.log(userId, userNick, startDate, endDate, armyCategory, rank);
  return async function () {
   
    try {
      await axios({
        method: "put",
        url: `http://13.125.228.240/api/myPage/userProfile?userId=${userId}`,
      
        data: {
          userNick,
          startDate,
          endDate,
          armyCategory,
          rank,
        },
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        console.log(response);
        window.location.pathname = `/mypage/${userId}`;
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export default handleActions(
  {
      [GET_USER_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.mypage = action.payload.userProfile.data.userdata;
      }),
  },
  initialState
);

const ActionCreators = {
  addUserDataDB,
  addTestResultDB,
  getUserProfileDB,
  editUserDataDB,
};

export { ActionCreators };
