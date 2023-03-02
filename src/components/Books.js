import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import Book from './Book';
import { getBooksList } from '../redux/books/booksSlice';

const Books = () => {
  const booklists = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksList());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-5 bg-[#f3f4f6;] ">
      <div className="flex flex-col gap-5 ">
        {booklists.map((item) => (
          <Book key={item.item_id} item={item} />
        ))}
      </div>
      <br />
      <Form />
    </div>
  );
};

export default Books;
