//5번 마이페이지 관련
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//Action Types
const GET_TYPE = "GET_TYPE";

//Action Creators
const getType = createAction(GET_TYPE, (type) => ({type}));

//Initial State
const initialState = {
type:'',
};

//middleware actions
const getTypeDB = (type) => {
    return function (dispatch) {
        axios.post(
            ''
        )
    }
}

//Reducer
export default handleActions(
    {
        [GET_TYPE] : (state, action) => 
        produce(state, (draft) => {
            draft.type = action.payload.type;
        })
    },
    initialState
)    

//Action Creator Export


