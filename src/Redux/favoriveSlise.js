import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
    plusFavoriteList(state, action) {
      return (state = [...state, action.payload]);
    },
    minusFavoriteList(state, action) {
      return (state = state.filter(user => user !== action.payload));
    },
  },
});
export const { plusFavoriteList, minusFavoriteList } = favoriteSlice.actions;
