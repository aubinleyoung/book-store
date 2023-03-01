/*eslint-disable*/
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const books = useSelector((state) => state.books.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    const itemId = `item${books.length + 1}`;
    e.preventDefault();
    dispatch(addBook({ item_id: itemId, title, author }));
  };

  return (
    <main className="w-full form flex flex-col pl-10 ">
      <h1 className="self-star text-gray-500 text-2xl font-bold ">Add New Book</h1>
      <form className="form flex p-10  gap-2  bg-gray-300 m-auto w-[90%] rounded-xl">
        <input className="title rounded-xl p-5 w-[50%]" type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} value={title} />
        <input className="atuthor rounded-xl p-5  w-[40%]" type="text" placeholder="author" onChange={(e) => setAuthor(e.target.value)} value={author} />
        <button className="add-btn bg-blue-500 rounded-xl p-5" onClick={handleAddBook} type="submit">Add Book</button>
      </form>
    </main>
  );
};

export default Form;
