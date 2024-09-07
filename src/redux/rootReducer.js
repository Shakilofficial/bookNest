import { combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./books/reducer";
const rootReducer = combineReducers({
  books: bookReducer,
});

export default rootReducer;
