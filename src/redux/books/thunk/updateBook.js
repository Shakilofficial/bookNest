import { updated } from "../actions";

const updateBook = (updatedBook) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`http://localhost:9000/books/${updatedBook.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBook),
      });
      const book = await res.json();
      dispatch(updated(book)); // Dispatch action with updated book
    } catch (error) {
      console.error("Failed to update book", error);
    }
  };
};

export default updateBook;
