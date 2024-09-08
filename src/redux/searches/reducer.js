import { SEARCH_BY_NAME } from "./actionTypes";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        searchName: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
