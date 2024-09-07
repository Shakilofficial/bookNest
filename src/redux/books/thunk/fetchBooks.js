import { loaded } from "../actions";

// Thunk to fetch books
const fetchBooks = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:9000/books");
      const books = await res.json();
      dispatch(loaded(books)); // Dispatch the loaded action with books
    } catch (error) {
      console.error("Failed to fetch books", error);
    }
  };
};

export default fetchBooks;
