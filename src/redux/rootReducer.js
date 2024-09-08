import { combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./books/reducer";
import filterReducer from "./filters/reducer";

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer, // Ensure this matches the filter state structure
});

export default rootReducer;
