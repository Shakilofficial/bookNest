import { combineReducers } from "@reduxjs/toolkit";
import bookReducer from "./books/reducer";
import filterReducer from "./filters/reducer";
import searchReducer from "./searches/reducer";
const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterReducer,
  search: searchReducer,
});

export default rootReducer;
