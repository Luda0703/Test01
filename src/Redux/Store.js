import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './carsSlice';
import {reducer as favoriteReducer} from './favoriveSlise'

const rootReducer = combineReducers({
  cars: carsReducer,
  favorite: favoriteReducer,
});

export const store = configureStore({
  reducer: rootReducer
});