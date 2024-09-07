import { ADDED, DELETED, LOADED, UPDATED } from "./actionTypes";
import { initialState } from "./initialState";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED: {
      return action.payload;
    }
    case ADDED: {
      return [
        ...state,
        {
          id: nextBookId(state),
          ...action.payload, // Add the new book data
        },
      ];
    }
    case DELETED: {
      return state.filter((book) => book.id !== action.payload);
    }
    case UPDATED: {
      return state.map((book) =>
        book.id === action.payload.id
          ? { ...book, ...action.payload } // Update only the fields, preserving the object
          : book
      );
    }
    default:
      return state;
  }
};

export default reducer;
