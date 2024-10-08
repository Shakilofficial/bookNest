import { SET_FILTER } from "./actionTypes";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
