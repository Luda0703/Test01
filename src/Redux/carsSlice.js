import { createSlice } from '@reduxjs/toolkit';
import { addCar, deleteCar, fetchCars } from './carsFetch';

const cars = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledAdd = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = [...state.items, action.payload];
};

const handleFulfilledDelete = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = state.items.filter(contact => contact.id !== action.payload.id);
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: cars,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFulfilled)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(addCar.pending, handlePending)
      .addCase(addCar.fulfilled, handleFulfilledAdd)
      .addCase(addCar.rejected, handleRejected)
      .addCase(deleteCar.pending, handlePending)
      .addCase(deleteCar.fulfilled, handleFulfilledDelete)
      .addCase(deleteCar.rejected, handleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
