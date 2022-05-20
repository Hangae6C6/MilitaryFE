import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";
import { ActionCreators as userChallengeDataActions } from "../../redux/modules/detail";

const GET_ONE_CHALLENGE = "GET_ONE_CHALLENGE";
const ADD_NUMBER ="ADD_NUMBER";

const addChallenge = createAction(GET_ONE_CHALLENGE, (challenge) => challenge);

const initialState = {
  challenges: []
}

const addChallengeDB = (challenges, userId) => {
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
        dispatch(userChallengeDataActions.postUserChallengeDetailDB(userId, challengeId));
        setTimeout(()=>{
          window.location.pathname = `/link/${challengeId}`;
        },500); 
      });
    } catch (err) {
      console.log(err);
      window.alert("챌린지 개설 실패");
    }
  };
};

const getOneChallengeDetailDB = (challengeNum) => {
  return async function (dispatch, getState) {
    try {
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
    [GET_ONE_CHALLENGE]: (state, action) =>
      produce(state, (draft) => {
        draft.challenges= action.payload.challenge;
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
 getOneChallengeDetailDB,

};

export { ActionCreators };
