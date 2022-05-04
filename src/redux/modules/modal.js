import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import { getCookie } from "../../shared/cookie";

const ADD = "userdata/ADD";

const addUserData = createAction(ADD, (userdata) => ({ userdata }));

const initialState = {
  userdata: [],
};

const addUserDataDB = (startDate, endDate, armyCategory, rank) => {
  console.log(startDate, endDate, armyCategory, rank);
  return async function (dispatch) {
    let userdatas = {
      startDate: startDate,
      endDate: endDate,
      armyCategory: armyCategory,
      rank: rank,
    };
    try {
      await axios({
        method: "post",
        url: "http://13.125.228.240/api/modal/userdata",
        headers: {
          Authorization: `Bearer ${getCookie("token")}`,
        },
        data: {
          ...userdatas
        },
      }).then((response) => {
        console.log(response.data);
        dispatch(addUserData(userdatas));
      });
    } catch (err) {
      console.log(err);
      window.alert("회원정보 추가 실패");
    }
  };
};

export default handleActions(
  {
    [ADD]: (state, action) =>
      produce(state, (draft) => {
        draft.userdata.unshift(action.payload.userdata);
      }),
  },
  initialState
);

const ActionCreators = {
  addUserDataDB,
  addUserData,
};

export { ActionCreators };
