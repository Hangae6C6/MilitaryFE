import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const GET_DETAILS = "GET_DETAILS";

const getChallengeDetail = createAction(GET_DETAILS, (challenges) => ({
  challenges,
}));

const initialState = [];

const getChallengeDetailDB = (userId) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "get",
        url: `http://13.125.228.240/api/detailPage/challengeDetail?${userId}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(getChallengeDetail(response.data));
      });
    } catch (err) {
      console.log(err);
      window.alert("challengeDetail GET 요청 실패");
    }
  };
};

export default handleActions(
  {
    [GET_DETAILS]: (state, action) =>
      produce(state, (draft) => {
        draft = action.payload.challenges;
      }),

  },
  initialState
);

const ActionCreators = {
getChallengeDetailDB,
};

export { ActionCreators };
