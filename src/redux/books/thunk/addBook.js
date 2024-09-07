import { added } from "../actions";

// Thunk to add a new book
const addBook = (bookData) => {
  return async (dispatch) => {
    try {
      // Make POST request to the API to add the new book
      const res = await fetch("http://localhost:9000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData), // Send the book data
      });

      // Assuming the server returns the newly added book
      const newBook = await res.json();

      // Dispatch the added action to add the book to the store
      dispatch(added(newBook));
    } catch (error) {
      console.error("Failed to add book", error);
    }
  };
};

export default addBook;
