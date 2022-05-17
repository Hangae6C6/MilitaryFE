import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const ADD_CHALLENGE = "ADD_CHALLENGE";
const ADD_NUMBER ="ADD_NUMBER";

const addChallenge = createAction(ADD_CHALLENGE, (challenge) => challenge);

const initialState = {
  challenges: []
}

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
        const challengeId = response.data.challengeNum;
        window.location.pathname = `/link/${challengeId}`;
      });
    } catch (err) {
      console.log(err);
      window.alert("챌린지 개설 실패");
    }
  };
};

const getChallengeDetailDB = (challengeNum) => {
  console.log(challengeNum)
  return async function (dispatch, getState) {
    try {
      console.log(challengeNum);
      await axios({
        method: "get",
        url: `http://13.125.228.240/api/challengeDetail?challengeNum=${challengeNum}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        dispatch(addChallenge(response.data));
      });
    } catch (err) {
      console.log(err);
 
    }
  };
};



export default handleActions(
  {
    [ADD_CHALLENGE]: (state, action) =>
      produce(state, (draft) => {
        draft.challenges= action.payload.Challenge;
      }),
      [ADD_NUMBER]: (state, action) =>
      produce(state, (draft) => {
        draft.challengeId = action.payload;
      }),
   
  },
  initialState
);

const ActionCreators = {
  addChallengeDB,
 getChallengeDetailDB,

};

export { ActionCreators };
