import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    toggleFavorites: (state, action) => {
      const { id } = action.payload;
      const isExists = state.some(c => c.id === id);
      console.log(id);

      if (isExists) {
        const index = state.findIndex(c => c.id === id);
        if (index !== -1) state.splice(index, 1);
      } else {
        state.push(action.payload);
      }
    },
  },
});

export const { toggleFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
