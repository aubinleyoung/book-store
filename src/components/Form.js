import React from 'react';

const Form = () => (
  <main>
    <h2>Add New Book</h2>
    <form className="form flex">

      <input className="title" type="text" placeholder="title" />
      <input className="atuthor" type="text" placeholder="author" />
      <button className="add-btn" type="submit">Add Book</button>

    </form>
  </main>
);
export default Form;
