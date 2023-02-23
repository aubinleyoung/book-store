import React from 'react';

const Form = () => (
  <main>

    <form className="form flex p-10  gap-2">

      <input className="title rounded-xl p-5" type="text" placeholder="title" />
      <input className="atuthor rounded-xl p-5" type="text" placeholder="author" />
      <button className="add-btn bg-blue-500 rounded-xl p-5" type="submit">Add Book</button>

    </form>
  </main>
);
export default Form;
