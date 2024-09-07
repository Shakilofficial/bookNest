import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";
import BookCard from "./BookCard";

const BookList = () => {
  const dispatch = useDispatch();

  // Get books from the Redux store
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks()); // Fetch books on component mount
  }, [dispatch]);

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button className="filter-btn active-filter" id="lws-filterAll">
            All
          </button>
          <button className="filter-btn" id="lws-filterFeatured">
            Featured
          </button>
        </div>
      </div>

      <div className="lws-bookContainer">
        {/* Render Book Cards */}
        {books.length > 0 ? (
          books.map((book) => <BookCard book={book} key={book.id} />)
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
