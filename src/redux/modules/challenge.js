import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const ADD_TITLE = "ADD_TITLE";
const ADD_STEP = "ADD_STEP";

const addChallenge = createAction(ADD_TITLE, (challenge) => challenge);
const addStep = createAction(ADD_STEP, (step) => step);

const initialState = {
  challenges: 
    {
      challengeTitle: "hh",
      challengeLimitNum: "11",
      challengeStartDate: "11",
      challengeEndDate: "11",
      challengeType: "1",
      steps: [{stepContent: "11", isChecked: false }],
    },
 
};

const addTitleDB = (challengeTitle) => {
  console.log(challengeTitle);
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: "http://13.125.228.240/api/challenge",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
        data: {
          challengeTitle: challengeTitle,
        },
      }).then((response) => {
        console.log(response);
        dispatch(addChallenge({ challengeTitle }));
      });
    } catch (err) {
      console.log(err);
      window.alert("챌린지 개설 실패");
    }
  };
};

const addDateDB = (challengeTitle) => {
  console.log(challengeTitle);
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: "http://13.125.228.240/api/challenge2",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
        data: {
          challengeTitle: challengeTitle,
        },
      }).then((response) => {
        console.log(response.data);
        dispatch(addChallenge(challengeTitle));
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
    [ADD_STEP]: (state, action) =>
      produce(state, (draft) => {
        draft.challenges = action.payload.challenges;
      }),
  },
  initialState
);

const ActionCreators = {
  addTitleDB,
  addDateDB,
  addChallenge,
  addStep,
};

export { ActionCreators };
