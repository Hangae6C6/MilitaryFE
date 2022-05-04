import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const GET_POST = "main/GET";

const getPost = createAction(GET_POST, (cards) => ({
  cards,
}));

const initialState = {
  cards: [],
};

const getPostDB = () => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: "http://13.125.228.240/api/main",
        // headers: {
        //   Authorization: `Bearer ${getCookie("token")}`,
        // },
      }).then((response) => {
        console.log(response);
        dispatch(getPost(response.data));
      });
    } catch (err) {
      console.log(err);
      window.alert("GET 요청 실패");
    }
  };
};

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.cards = action.payload.cards;
      }),
  },
  initialState
);

const ActionCreators = {
  getPostDB,
  
};

export { ActionCreators };
