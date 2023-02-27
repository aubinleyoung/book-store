const { createSlice } = require('@reduxjs/toolkit');

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: [] },
  reducers: {
    getCategories(state) {
      return {
        ...state,
        categories: ['Under construction'],
      };
    },
  },
});

export const { getCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
