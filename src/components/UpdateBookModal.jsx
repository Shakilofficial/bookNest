import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function UpdateBookModal({ book, onUpdate, onClose }) {
  const [name, setName] = useState(book.name);
  const [author, setAuthor] = useState(book.author);
  const [price, setPrice] = useState(book.price);
  const [rating, setRating] = useState(book.rating);
  const [thumbnail, setThumbnail] = useState(book.thumbnail);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = {
      id: book.id, // Keep the same ID
      name,
      author,
      price,
      rating,
      thumbnail,
    };
    onUpdate(updatedBook); // Call the onUpdate prop to dispatch the update
  };

  return (
    <Dialog open={true} as="div" className="relative z-10" onClose={onClose}>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <DialogPanel className="bg-white p-6 rounded-md shadow-md max-w-md w-full">
          <DialogTitle className="text-lg font-semibold">
            Update Book : {name}
          </DialogTitle>

          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Book Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <input
                type="number"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="1"
                max="5"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Thumbnail URL
              </label>
              <input
                type="text"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              />
            </div>

            <div className="flex justify-between space-x-2">
              <button type="button" onClick={onClose} className="submit">
                Cancel
              </button>
              <button type="submit" className="submit">
                Update Book
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

// Prop validation
UpdateBookModal.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};
