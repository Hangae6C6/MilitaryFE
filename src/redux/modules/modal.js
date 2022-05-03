import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

const ADD_USERDATA = "ADD_USERDATA";

const addUserData = createAction(ADD_USERDATA, (userdata) => ({ userdata}));

const initialState = {
  userdata: {
    startDate: "",
    endDate: "",
    armCategory: "",
    rank: "",
  },
};

const addUserDataDB = (startDate, endDate, armCategory, rank) => {
  console.log(startDate, endDate, armCategory, rank);
  return async function (dispatch) {
    try {
      await axios({
        method: "post",
        url: "http://13.125.228.240/api/modal/userdata",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
      }).then((response) => {
        console.log(response);
        // dispatch(addUserData(response));
      });
    } catch (err) {
      console.log(err);
      window.alert("회원정보 추가 실패");
    }
  };
};

export default handleActions(
  {
    [ADD_USERDATA]: (state, action) =>
      produce(state, (draft) => {
        console.log(draft);
        draft.userdata.unshift(action.payload.userdata);
      }),
  },
  initialState
);

const ActionCreators = {
    addUserDataDB
};

export { ActionCreators };
