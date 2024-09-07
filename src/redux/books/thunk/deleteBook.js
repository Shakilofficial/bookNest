import { deleted } from "../actions";

const deleteBook = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:9000/books/${id}`, {
        method: "DELETE",
      });
      // Dispatch the action to remove the book from the Redux store
      dispatch(deleted(id));
    } catch (error) {
      console.error("Failed to delete book", error);
    }
  };
};

export default deleteBook;
