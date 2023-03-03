/*eslint-disable*/
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, postBook } from '../redux/books/booksSlice';
import uniqid from 'uniqid';

const Form = () => {
  const books = useSelector((state) => state.books.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAddBook = (e) => {
    const itemId = `item${books.length + 1}`;
    e.preventDefault();
    const book = {
      title,
      author,
      item_id : uniqid(),
      category: "ggggg"
    }
    e.target.reset()
    dispatch(postBook(book));
    console.log(itemId, "post", book)
  };

  return (
    <main className="w-full form flex flex-col pl-10 ">
      <h1 className="self-star text-gray-500 text-2xl font-bold ">Add New Book</h1>
      <form className="form flex p-10  gap-2  bg-gray-300 m-auto w-[90%] rounded-xl" onSubmit={handleAddBook}>
        <input className="title rounded-xl p-5 w-[50%]" type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        <input className="atuthor rounded-xl p-5  w-[40%]" type="text" placeholder="author" onChange={(e) => setAuthor(e.target.value)} />
        <button className="add-btn bg-blue-500 rounded-xl p-5" type="submit">Add Book</button>
      </form>
    </main>
  );
};

export default Form;
