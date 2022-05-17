//5번 마이페이지 관련
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie, setCookie } from "../../shared/cookie";
import axios from "axios";

//Action Types
const GET_CATEGORY = "GET_CATEGORY";
const GET_RANK = "GET_RANK";
const GET_DDAY = "GET_DDAY";

//Action Creators
const getCategory = createAction(GET_CATEGORY, (armyCategory) => ({ armyCategory }));
const getRank = createAction(GET_RANK, (rank) => ({ rank }));
const getDDay = createAction(GET_DDAY, (dday) => ({ dday }));

//Initial State
const initialState = {
  userdata: [{
    armyCategory:"",
    rank:"",
    dday:0,
}],
};

//middleware actions
const getRankDB = (id) => {
  return function (dispatch) {
    axios({
      method: "get",
      url: `http://13.125.228.240/api/myPage/userProfile?userId=${id}`,
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        console.log(res)
        dispatch(getRank(res.data.userdata.rank));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getCategoryDB = (id) => {
  return function (dispatch) {
    axios({
      method: "get",
      url: `http://13.125.228.240/api/myPage/userProfile?userId=${id}`,
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        console.log(res)
        dispatch(getCategory(res.data.userdata.armyCategory));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getDDayDB = (id) => {
  return function (dispatch) {
    axios({
      method: "get",
      url: `http://13.125.228.240/api/myPage/userProfile?userId=${id}`,
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        console.log(res)
        dispatch(getCategory(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//Reducer
export default handleActions(
    {
        [GET_CATEGORY]:(state, action) => 
        produce(state, (draft) => {
            draft.armyCategroy = action.payload.armyCategory;
        }),
        [GET_RANK]:(state, action) => 
        produce(state, (draft) => {
            draft.rank = action.payload.rank;
        }),
        [GET_DDAY]:(state, action) => 
        produce(state, (draft) => {
            draft.dday = action.payload.dday;
        })
    },
    initialState
)
//Action Creator Export
const ActionCreators = {
    getRankDB,
    getCategoryDB,
    getDDayDB,
};

export {ActionCreators};