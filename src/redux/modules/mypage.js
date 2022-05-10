//5번 마이페이지 관련
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//Action Types
const GET_INFO = "GET_INFO";
const GET_CHALLENGE = "GET_CHALLENGE";

//Action Creators
const getInfo = createAction(GET_INFO, (myInfo) => ({ myInfo }));
const getChallenge = createAction(GET_CHALLENGE, (Clist) => ({ Clist }));

//Initial State
const initialState = {
  myInfo: null,
  list: [],
};

//middleware actions
const getInfoDB = (userID) => {
  return function (dispatch) {
    axios.post(
      "http://13.125.228.240/api/login"
        .getInfo(userID)
        .then((res) => {
          dispatch(getInfo(res.data));
        })
        .catch((err) => {
          console.log(err, "에러");
        })
    );
  };
};

const getChallengeDB = (userID) => {
  return function (dispatch) {
    "http://13.125.228.240/api/login"
      .getChallenge(userID)
      .then((res) => {
        const list = res.data;
        dispatch(getChallenge(list));
      })
      .catch((err) => {
        console.log(err, "에러");
      });
  };
};

//Reducer
export default handleActions(
    {
        [GET_INFO]:(state, action) => 
        produce(state, (draft) => {
            draft.myInfo = action.payload.myInfo;
        }),
        [GET_CHALLENGE]:(state, action) => 
        produce(state, (draft) => {
            draft.list = action.payload.myList;
        })
    },
    initialState
)
//Action Creator Export
const ActionCreators = {
    getInfoDB,
    getChallengeDB
};

export {ActionCreators};