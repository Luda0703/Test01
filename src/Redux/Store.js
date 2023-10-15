import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import { favoriteSlice } from './favoriveSlise'

const rootReducer = combineReducers({
  cars: carsReducer,
  favorite: favoriteSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer
});