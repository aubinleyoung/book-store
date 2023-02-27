import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => (
  <header className="w-full h-20 pl-10 gap-16  bg-white flex justify-start items-center">
    <h1 className="text-blue-500 font-bold text-2xl">Bookstore CMS </h1>
    <ul className="flex gap-5">
      <Link to="/books" className=" text-blue-500 ">
        Books
      </Link>
      <Link to="/categories" className="text-blue-500 ">
        Categories
      </Link>
    </ul>
  </header>
);

export default Header;
