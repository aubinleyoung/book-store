import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

    filterCategories: (state, action) => ({
      ...state,
      categories: state.categories.filter((category) => category !== action.payload),
    }),

  },

});

export const { filterCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
