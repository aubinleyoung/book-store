import { createSlice } from '@reduxjs/toolkit';

const appKey = 'u40ajfPiLMr5vadQ5qEo';
const baseURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appKey}/books`;

export const getBooksList = () => async (dispatch) => {
  const books = await fetch(`${baseURL}`).then((response) => response.json());
  const booksID = Object.keys(books);
  const formatedBooks = [];
  booksID.map((key) => formatedBooks.push({
    id: key,
    title: books[key][0].title,
    author: books[key][0].author,
    category: books[key][0].category,
  }));
  dispatch(getBooks(formatedBooks));
};

// export const postBook = (newBook) => async (dispatch) => {
//   await fetch(`${baseURL}`, {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: newBook.id,
//       title: newBook.title,
//       author: newBook.author,
//       category: newBook.category,
//     }),
//     headers: { 'Content-type': 'application/json; charset=UTF-8' },
//   });
//   dispatch(addBook(newBook));
// };

const initialState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      const { id } = action.payload;
      const newState = { ...state };
      newState.books = state.books.filter((book) => book.item_id !== id);
      return newState;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
