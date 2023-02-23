import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => (
  <header className="w-full h-20">
    <ul className="flex">
      <Link to="/books">Books</Link>
      <Link to="/categories">Categories</Link>
    </ul>
  </header>
);

export default Header;
