import React from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => (
  <main className="w-full h-screen overflow-hidden bg-gray-100 flex flex-col items-center">
    <section className="mt-5 w-10/12 flex flex-col items-stretch gap-y-2 booklist">
      <Book />
    </section>
    <Form />
  </main>
);

export default Books;
