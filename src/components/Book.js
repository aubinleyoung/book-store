import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ item }) => (
  <main className="pl-10 ">

    <div className="flex justify-between bg-white w-[90%] rounded-xl m-auto p-5">
      <div className="font-bold text-blue-500">
        <p>
          Title:
          <span>{item.title}</span>
        </p>
        <p>
          Author:
          <span>{item.author}</span>
        </p>

      </div>
      <button type="submit" className="add-btn bg-blue-500 rounded-xl p-5">Delete</button>
    </div>
  </main>
);

Book.propTypes = { item: PropTypes.shape().isRequired };
export default Book;
