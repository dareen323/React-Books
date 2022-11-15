import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/Booklist";
import Bookdetails from "./components/Bookdetails";
import Booking from "./components/Booking";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<Bookdetails />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
