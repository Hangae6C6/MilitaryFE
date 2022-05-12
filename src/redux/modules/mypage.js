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
const getCategory = createAction(GET_CATEGORY, (category) => ({ category }));
const getRank = createAction(GET_RANK, (rank) => ({ rank }));
const getDDay = createAction(GET_DDAY, (dday) => ({ dday }));

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
const getCateDB = () => {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://13.125.228.240/api/userData",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        console.log(res)
        dispatch(getCategory(res.data.category));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getRankDB = () => {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://13.125.228.240/api/userData",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        console.log(res)
        dispatch(getRank(res.data.rank));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getDdayDB = () => {
  return function (dispatch) {
    axios({
      method: "get",
      url: "http://13.125.228.240/api/userData",
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        console.log(res)
        dispatch(getDDay(res.data.dday));
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
            draft.category = action.payload.category;
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
    getCateDB,
    getRankDB,
    getDdayDB,
};

export {ActionCreators};