import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book } = props;
  const { author, title } = book;

  return (
    <main className="w-full flex items-center justify-between">
      <div className="flex border-2 w-40 h-10 gap-5">
        <p>{author}</p>
        <p>by</p>
        <p>{title}</p>
        <button type="submit">Delete</button>
      </div>
    </main>

  );
};
Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};
export default Book;
