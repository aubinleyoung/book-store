import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const booklists = useSelector((state) => state.books.books);

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
