import { FaUserCircle } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => (
  <header className="w-full h-20 bg-white flex justify-between items-center px-16">
    <div className="flex justify-start items-center gap-16">
      <h1 className="text-[#0290ff] font-bold text-2xl">Bookstore CMS </h1>
      <ul className="flex gap-5 text-sm">
        <Link to="/" className=" text-[#121212] ">
          BOOKS
        </Link>
        <Link to="/categories" className="text-[#cfcfcf] ">
          CATEGORIES
        </Link>
      </ul>
    </div>
    <div>
      <FaUserCircle className="bg-[#0290ff] text-white rounded-full  text-4xl " />
    </div>
  </header>
);

export default Header;
