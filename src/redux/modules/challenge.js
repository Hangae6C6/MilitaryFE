import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const ADD_TITLE = "ADD_TITLE";

const addChallenge = createAction(ADD_TITLE, (challengeTitle) => ({ challengeTitle }));

const initialState = {
  challenges: [{
    challengeNum:"",
    challengeTitle:"",
    challengeType:"",
    challengeContent:"",
    challengeProgress:"",
    challengeCnt:"",
    challengeDate:"",
    steps: [
    { 
        stepNum:"",

        isChecked:false,
    },
   ]
}]
};

const addTitleDB = (challengeTitle) => {
  console.log(challengeTitle);
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: "http://13.125.228.240/api/challenge1",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
        data: {
          challengeTitle: challengeTitle
        },
      }).then((response) => {
        console.log(response);
        dispatch(addChallenge({challengeTitle}));
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
          challengeTitle: challengeTitle
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
        draft.challenges.challeunshift(action.payload.challengeTitle) ;
      }),
  },
  initialState
);

const ActionCreators = {
    addTitleDB,
    addDateDB,
};

export { ActionCreators };
