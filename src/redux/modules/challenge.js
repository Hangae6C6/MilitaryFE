import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const ADD_CHALLENGE = "ADD_CHALLENGE";
const ADD_NUMBER ="ADD_NUMBER";

const addChallenge = createAction(ADD_CHALLENGE, (challenge) => challenge);
const getChallengeNum = createAction(ADD_NUMBER, (challengeNum) => challengeNum);


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
        dispatch(getChallengeNum(response.data.challengeNum));
        const challengeId = response.data.challengeNum;
        window.location.pathname = `/link/${challengeId}`;
      });
    } catch (err) {
      console.log(err);
      window.alert("챌린지 개설 실패");
    }
  };
};



export default handleActions(
  {
    [ADD_CHALLENGE]: (state, action) =>
      produce(state, (draft) => {
        console.log(action)
        draft.challenges = action.payload.challenge;
      }),
      [ADD_NUMBER]: (state, action) =>
      produce(state, (draft) => {
        console.log(action)
        draft.challengeId = action.payload;
      }),
   
  },
  initialState
);

const ActionCreators = {
  addChallengeDB,
  getChallengeNum,

};

export { ActionCreators };
