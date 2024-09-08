import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../redux/books/thunk/fetchBooks";
import { setFilter } from "../redux/filters/actions";
import BookCard from "./BookCard";

const BookList = () => {
  const dispatch = useDispatch();

  // Get books, filter, and search term from the Redux store
  const books = useSelector((state) => state.books);
  const filter = useSelector((state) => state.filter.filter);
  const searchName = useSelector((state) => state.search.searchName);

  useEffect(() => {
    dispatch(fetchBooks()); // Fetch books on component mount
  }, [dispatch]);

  // Handle filter change
  const handleFilterClick = (filterType) => {
    dispatch(setFilter(filterType)); // Dispatch the filter action
  };

  // Filter the books based on the active filter and search term
  const filteredBooks = books
    .filter((book) => {
      if (filter === "featured") {
        return book.featured === true; // Show only featured books
      }
      return true; // Show all books when filter is 'all'
    })
    .filter((book) => {
      if (searchName) {
        return book.name.toLowerCase().includes(searchName.toLowerCase());
      }
      return true; // Show all books when searchName is empty
    });

  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            className={`filter-btn ${filter === "all" ? "active-filter" : ""}`}
            id="lws-filterAll"
            onClick={() => handleFilterClick("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${
              filter === "featured" ? "active-filter" : ""
            }`}
            id="lws-filterFeatured"
            onClick={() => handleFilterClick("featured")}
          >
            Featured
          </button>
        </div>
      </div>

      <div className="lws-bookContainer">
        {/* Render Filtered Book Cards */}
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard book={book} key={book.id} />)
        ) : (
          <p>No books available</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
