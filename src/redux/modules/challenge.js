import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const ADD_CHALLENGE = "ADD_CHALLENGE";

const addChallenge = createAction(ADD_CHALLENGE, (challenge) => ({ challenge}));

const initialState = {
  challenge: []
};

const addChallengeDB = (challengeTitle, challengeType, challengeContent) => {
  console.log(challengeTitle, challengeType, challengeContent);
  return async function (dispatch) {
    let challenges = {
      challengeTitle: "",
      challengeType: "",
      challengeContent: "",
    };
    try {
      await axios({
        method: "post",
        url: "http://13.125.228.240/api/challenge",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
        data: {
          ...challenges
        },
      }).then((response) => {
        console.log(response);
        dispatch(addChallenge(challenges));
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
        console.log(draft);
        draft.challenge.unshift(action.payload.challenge);
      }),
  },
  initialState
);

const ActionCreators = {
    addChallengeDB
};

export { ActionCreators };
