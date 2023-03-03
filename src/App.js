import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import { getBooks } from './redux/books/booksSlice';

const App = () => {
  const booklists = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(booklists.length, 'dispsss');
    dispatch(getBooks());
  }, [booklists]);

  return (
    <main className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Books props={booklists} />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </main>
  );
};

export default App;
