import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };

  return (
    <>
      <div className="border-2 p-5">
        <section className="flex flex-col text-blue-500">
          <p>
            Author:
            <span>
              {' '}
              {item.author}
            </span>
          </p>
          <p>
            Title:
            <span>
              {' '}
              {item.title}
            </span>
          </p>
          <p>
            Category:
            <span>
              {' '}
              {item.category}
            </span>
          </p>
          <button onClick={() => handleDelete(item.item_id)} type="button" className="bg-red-500 rounded-xl p-1 w-16">
            remove
          </button>
        </section>
      </div>
    </>
  );
};

export default Book;
Book.propTypes = { item: PropTypes.objectOf.isRequired };
