import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/booksSlice';

const Book = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <div className="border-2 p-5 bg-white w-[90%] m-auto ">
        <div className="flex justify-between items-center w-[100%]">
          <section className="flex flex-col">
            <p>
              <span className="text-gray-500 text-xs font-bold">
                {' '}
                {item.category}
              </span>
            </p>
            <p>

              <span className="font-bold text-black ">
                {' '}
                {item.title}
              </span>
            </p>

            <p>

              <span className="text-[#4386bf] text-xs">
                {' '}
                {item.author}
              </span>
            </p>
            <br />

            <div className="comment flex items-center gap-2 text-[#4386bf] text-xs">
              <span>Comments</span>
              <hr className="w-px h-5 bg-gray-300" />
              <button
                onClick={() => handleDelete(item.id)}
                type="button"
                className="text-[#4386bf]"
              >
                Remove
              </button>
              <hr className="w-px h-5 bg-gray-300" />
              <span>Edith</span>
            </div>
          </section>
          <section className="flex  w-[50%] justify-evenly items-center">

            <div className="flex items-center book-progress">
              <div className="flex items-center relative justify-center w-12 h-12 overflow-hidden rounded-full bg-[#0290ff]">
                <div className="absolute top-0 left-0 w-7 h-7 bg-blue-200" />
                <div className="absolute w-10 h-10 rounded-full bg-white" />
              </div>
              <p className="ml-3 text-md text-gray-500">
                <span className="text-2xl text-gray-600 font-bold">

                  64 %
                </span>
                <br />
                Completed
              </p>
            </div>
            <hr className="w-px h-16 bg-gray-300" />
            <div className="book-status ">
              <p className="text-sm text-gray-400">CURRENT CHAPTER</p>
              <p className="text-sm text-black">Chapter 17</p>
              <p className="my-1 text-gray-600" />
              <button className="py-2 px-10 mt-1flex items-center justify-center rounded-sm bg-[#0290ff] text-white" type="button">UPDATE PROGRESS</button>
            </div>
          </section>
        </div>

      </div>
    </>
  );
};

export default Book;
Book.propTypes = { item: PropTypes.objectOf.isRequired };
