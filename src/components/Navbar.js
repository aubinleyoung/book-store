import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => (
  <header className="w-full h-20 bg-white flex justify-center items-center">
    <ul className="flex gap-5">
      <Link to="/books" className="font-bold text-blue-500 ">Books</Link>
      <Link to="/categories" className="font-bold text-blue-500 ">Categories</Link>
    </ul>
  </header>
);

export default Header;
