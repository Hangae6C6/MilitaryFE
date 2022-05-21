//5번 마이페이지 관련
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie, setCookie } from "../../shared/cookie";
import { history } from "../../redux/configureStore";
import axios from "axios";

//Action Types
const GET_CATEGORY = "GET_CATEGORY";
const GET_RANK = "GET_RANK";
const GET_DDAY = "GET_DDAY";
const DDAY = "DDAY";
const EDIT_NICK = "EDIT_NICK";
const GET_NICK = "GET_NICK";

//Action Creators
const getCategory = createAction(GET_CATEGORY, (armyCategory) => ({
  armyCategory,
}));
const getRank = createAction(GET_RANK, (rank) => ({ rank }));
const getEndDay = createAction(GET_DDAY, (dday) => ({ dday }));
const getDDay = createAction(DDAY, (endDate) => ({ endDate }));
const editNick = createAction(EDIT_NICK, (nick) => ({ nick }));
const getNick = createAction(GET_NICK, (nick, rank) => ({ nick, rank }));

//Initial State
const initialState = {
  armyCategory: "",
  rank: "",
  dday: "",
  nick: "",
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
        console.log(res);
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
        console.log(res);
        dispatch(getCategory(res.data.userdata.armyCategory));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const DdayDB = (id, dday) => {
  return function (dispatch) {
    axios({
      method: "get",
      url: `http://13.125.228.240/api/endDay?userId=${id}&endDate=${dday}`,
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(getDDay(res.data.msg));
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
        dispatch(getEndDay(res.data.userdata.endDate));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getNickDB = (id) => {
  return function (dispatch) {
    axios({
      method: "get",
      url: `http://13.125.228.240/api/myPage/userProfile?userId=${id}`,
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(getNick(res.data.userdata.userNick));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const EditNickDB = (userId, userNick, userRank) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "put",
      url: `http://13.125.228.240/api/myPage/userProfile?userId=${userId}`,
      headers: {
        Authorization: `Bearer ${getCookie("token")}`,
      },
    })
      .then((res) => {
        console.log(res);
        const nick = getState().user.user.userNick;
        console.log(getState())
        dispatch(editNick(nick));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

//Reducer
export default handleActions(
  {
    [GET_CATEGORY]: (state, action) =>
      produce(state, (draft) => {
        draft.armyCategory = action.payload.armyCategory;
      }),
    [GET_RANK]: (state, action) =>
      produce(state, (draft) => {
        draft.rank = action.payload.rank;
      }),
    [GET_DDAY]: (state, action) =>
      produce(state, (draft) => {
        draft.dday = action.payload.dday;
      }),
    [DDAY]: (state, action) =>
      produce(state, (draft) => {
        draft.endDate = action.payload.endDate;
      }),
    [GET_NICK]: (state, action) =>
      produce(state, (draft) => {
        draft.nick = action.payload.nick;
      }),
    // [EDIT_NICK]: (state, action) =>
    //   produce(state, (draft) => {
    //     let index = draft.list.findIndex((p) => p.id === action.payload.postId);
    //     draft.list[index] = { ...draft.list[index], ...action.payload.post };
    //   }),
  },
  initialState
);
//Action Creator Export
const ActionCreators = {
  getRankDB,
  getCategoryDB,
  getDDayDB,
  DdayDB,
  EditNickDB,
  getNickDB,
};

export { ActionCreators };
