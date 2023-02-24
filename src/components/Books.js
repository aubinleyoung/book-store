import React from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const bookList = [
    {
      id: 1,
      title: 'The Game',
      author: 'Aubin',
    },
    {
      id: 2,
      title: 'Valide',
      author: 'Booba',
    },
    {
      id: 2,
      title: 'Eloko',
      author: 'Fally',
    },
  ];
  return (
    <main className="w-full fex flex-col  ">
      <section className="mt-5 w-10/12 flex flex-col items-stretch gap-y-10 booklist pb-10">
        <div className="flex flex-col gap-2 ">
          {bookList.map((item) => (
            <Book key={item.id} item={item} />
          ))}
        </div>
      </section>
      <br />

      <Form />
    </main>
  );
};

export default Books;
