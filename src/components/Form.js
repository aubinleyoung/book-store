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
      category: "Science fiction"
    }
    e.target.reset()
    dispatch(postBook(book));
    console.log(itemId, "post", book)
  };

  return (
    <main className="w-[90%] m-auto form flex flex-col  border-t-2 pt-5">
      <h1 className="self-star text-gray-500 text-2xl font-bold ">Add New Book</h1><br />
      <form className="form flex gap-5 m-auto w-[100%] h-10 " onSubmit={handleAddBook}>
        <input className="title border-2 p-5 w-[50%] outline-none rounded-sm" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input className="atuthor border-2 p-5  w-[35%] outline-none rounded-sm" type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
        <button className="add-btn bg-[#0290ff] rounded-sm ml-[10rem] w-40" type="submit">Add Book</button>
      </form>
    </main>
  );
};

export default Form;
