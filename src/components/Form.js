import React from 'react';

const Form = () => (
  <main className="w-full form flex flex-col pl-10  absolute  left-0 rigth-0 bottom-0">
    <h1 className="self-star text-gray-500 text-2xl font-bold ">Add New Book</h1>
    <form className="form flex p-10  gap-2  bg-gray-300 m-auto w-[90%] rounded-xl">
      <input className="title rounded-xl p-5 w-[50%]" type="text" placeholder="title" />
      <input className="atuthor rounded-xl p-5  w-[40%]" type="text" placeholder="author" />
      <button className="add-btn bg-blue-500 rounded-xl p-5" type="submit">Add Book</button>

    </form>
  </main>
);
export default Form;
