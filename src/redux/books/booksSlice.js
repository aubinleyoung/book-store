const { createSlice } = require('@reduxjs/toolkit');

const booksSlice = createSlice({
  name: 'books',
  initialState: { books: [] },
  reducers: {
    addBook(state, action) {
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    },
    removeBook(state, action) {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.id),
      };
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
