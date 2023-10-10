import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCar } from './carsFetch';

const cars = {
  items: [],
  singleCar: {},
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

const handleSingleCarFulfilled = (state, action) => {
  state.singleCar = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: cars,
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, handleFulfilled)
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCar.fulfilled, handleSingleCarFulfilled);
  },
});

export const carsReducer = carsSlice.reducer;
