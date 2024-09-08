import { SEARCH_BY_NAME } from "./actionTypes";

export const searchByName = (name) => ({
  type: SEARCH_BY_NAME,
  payload: name,
});
