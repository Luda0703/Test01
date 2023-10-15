import { createSlice } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  reducers: {
  
    // toggleFavorites: (state, {payload: favoriteCars}) => {
    //     const isExists = state.some(r => r.id === favoriteCars.id)

    //     if(isExists) {
    //         const index = state.findIndex(r => r.id !== favoriteCars.id)
    //      if (index !== -1) 
    //         state.splice(index, 1)
    //     }
    //     else {
    //         state.push(favoriteCars)
    //     }
    // }
    plusFavoriteList(state, action) {
      return (state = [...state, action.payload]);
    },
    minusFavoriteList(state, action) {
      return (state = state.filter(user => user !== action.payload));
    },
  },
});
// export const { actions, reducer } = favoriteSlice;
export const { plusFavoriteList, minusFavoriteList } = favoriteSlice.actions;
