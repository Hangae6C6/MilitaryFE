//5번 마이페이지 관련
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie, setCookie } from "../../shared/cookie";
import axios from "axios";

//Action Types
const GET_INFO = "GET_INFO";
const GET_CHALLENGE = "GET_CHALLENGE";

//Action Creators
const getInfo = createAction(GET_INFO, (myInfo) => ({ myInfo }));
const getChallenge = createAction(GET_CHALLENGE, (Clist) => ({ Clist }));

//Initial State
const initialState = {
  myInfo: [{
    category:"",
    dday:"",
    rank:"",
}],
  list: [],
};

//middleware actions
const getInfoDB = () => {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://13.125.228.240/api/myPage/userProfile",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        console.log(res)
        dispatch(getInfo(res.data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getChallengeDB = (userID) => {
  return function (dispatch) {
    "http://13.125.228.240/"
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
            draft.list = action.payload.list;
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