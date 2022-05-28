import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";
import { ActionCreators as userChallengeDataActions } from "../../redux/modules/detail";

const GET_ONE_CHALLENGE = "GET_ONE_CHALLENGE";

const addChallenge = createAction(GET_ONE_CHALLENGE, (challenge) => challenge);

const initialState = {
    challenges:{
      challengeCnt: 0,
      challengeEndDate:"",
      challengeLimitNum: 0,
      challengeNum: 0,
      challengeProgress: "",
      challengeTitle:"",
      challengeType: "",
      challengeViewCnt: 0,
      steps: []
    }
}

const addChallengeDB = (challenges, userId) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: "https://pizzaboy.shop/api/challenge",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
        data: {
          challenges,
        },
      }).then((response) => {
        const challengeId = response.data.challengeNum;
        // dispatch(userChallengeDataActions.postUserChallengeDetailDB(userId, challengeId));
        window.location.pathname = `/link/${challengeId},${userId}`;
      });
    } catch (err) {
      console.log(err);
    }
  };
};

const getOneChallengeDetailDB = (challengeNum) => {
  return async function (dispatch) {
    try {
      await axios({
        method: "get",
        url: `https://pizzaboy.shop/api/challengeDetail?challengeNum=${challengeNum}`,
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

const deleteCallengeDB = (challengeNum, userId) => {
  return async function () {
    try {
      await axios({
        method: "delete",
        url: `https://pizzaboy.shop/api/challengeout?userId=${userId}&challengeNum=${challengeNum}`,
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then(() => {
        window.location.pathname=`/mypage/${userId}`;
      });
    } catch (err) {
      console.log(err);
      window.alert("챌린지 나가기 실패");
    }
  };
};


export default handleActions(
  {
    [GET_ONE_CHALLENGE]: (state, action) =>
      produce(state, (draft) => {
        draft.challenges= action.payload.challenge;
      }),
  },
  initialState
);

const ActionCreators = {
  addChallengeDB,
 getOneChallengeDetailDB,
  deleteCallengeDB,
};

export { ActionCreators };
