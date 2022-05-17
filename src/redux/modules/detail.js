import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const POST_DETAIL = "POST_DETAIL";

const getChallengeDetail = createAction(POST_DETAIL, (challenges) => ({
  challenges,
}));

const initialState = {
  userChallengeDetail: []
};

const getUserChallengeDetailDB = (userId, challengeId) => {
  return async function (dispatch, getState) {
    try {
      await axios({
        method: "post",
        url: `http://13.125.228.240/api/challengeJoin?userId=${userId}&challengeNum=${challengeId}`,
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
    [POST_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.userChallengeDetail = action.payload.challenges;
      }),

  },
  initialState
);

const ActionCreators = {
getUserChallengeDetailDB,
};

export { ActionCreators };
