import "./App.css";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div >
        <Navbar />
        <main className="py-12 2xl:px-6">
          <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
            <BookList />
            <AddBookForm />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
