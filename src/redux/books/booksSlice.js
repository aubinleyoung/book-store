import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appKey = 'u40ajfPiLMr5vadQ5qEo';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appKey}/books`;

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const books = await fetch(baseURL).then((data) => data.json());
    const booksID = Object.keys(books);
    const formatedBooks = [];
    booksID.map((key) => formatedBooks.push({
      id: key,
      title: books[key][0].title,
      author: books[key][0].author,
      category: books[key][0].category,
    }));
    // console.log('format', formatedBooks);
    return formatedBooks;
  },
);
/*eslint-disable*/
export const postBook = createAsyncThunk(
  'books/postBooks',
  async (newBook) => {
    await axios.post(baseURL, newBook);
    return newBook;
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id) => {
    await axios.delete(`${baseURL}/${id}`);
    return id;
  },
);

const initialState = {
  books: [],
  status: null,
};
const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.books.push(payload);
    },
    removeBook: (state, { payload }) => {
      state.books = state.books.filter((book) => book.id !== payload);
    },
  },
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.status = 'pending';
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      state.status = 'fulfilled';
      state.books = payload;
    },
    [postBook.fulfilled]: (state, { payload }) => {
      state.status = 'added';
      state.books.push(payload);
    },
    [deleteBook.fulfilled]: (state, { payload }) => {
      state.status = 'deleted';
      state.books = state.books.filter((book) => book.id !== payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
