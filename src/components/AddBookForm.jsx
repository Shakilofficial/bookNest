import { useState } from "react";
import { useDispatch } from "react-redux";
import addBook from "../redux/books/thunk/addBook";

const AddBookForm = () => {
  const dispatch = useDispatch();

  // State for the form inputs
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      ...formData,
      price: Number(formData.price), // Ensure price is a number
      rating: Number(formData.rating), // Ensure rating is a number
      id: Date.now(), // Generate a unique ID (or use other logic)
    };

    // Dispatch the added action
    dispatch(addBook(newBook));

    // Clear form
    setFormData({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="lws-bookName">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="lws-bookName"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-author">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="lws-author"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-thumbnail">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="lws-thumbnail"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="lws-price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="lws-price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-rating">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="lws-rating"
                name="rating"
                min="1"
                max="5"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="lws-featured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={formData.featured}
              onChange={handleChange}
            />
            <label htmlFor="lws-featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button type="submit" className="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
