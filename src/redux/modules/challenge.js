import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const ADD_TITLE = "ADD_TITLE";

const addChallenge = createAction(ADD_TITLE, (challenge) => challenge);


const initialState = {
  challenges: []
};

const addChallengeDB = (challenges) => {
  console.log(challenges);
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: "http://13.125.228.240/api/challenge",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
        data: {
          challenges,
        },
      }).then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log(err);
      window.alert("챌린지 개설 실패");
    }
  };
};



export default handleActions(
  {
    [ADD_TITLE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action)
        draft.challenges = action.payload.challenge;
      }),
   
  },
  initialState
);

const ActionCreators = {
  addChallengeDB,
  addChallenge,

};

export { ActionCreators };
