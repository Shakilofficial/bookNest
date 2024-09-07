import { ADDED, DELETED, LOADED, UPDATED } from "./actionTypes";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};
export const added = (book) => {
  return {
    type: ADDED,
    payload: book,
  };
};
export const updated = (bookId) => {
  return {
    type: UPDATED,
    payload: bookId,
  };
};
export const deleted = (bookId) => {
  return {
    type: DELETED,
    payload: bookId,
  };
};
