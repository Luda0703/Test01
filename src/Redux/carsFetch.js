import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://649de9769bac4a8e669e7228.mockapi.io";

export const fetchCars = createAsyncThunk(
    "cars/fetchAll",
    async (_, thunkAPI) => {
      try {
        const response = await axios.get("/cars");
        console.log(response.data)
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
      
    }
  );

  export const addCar = createAsyncThunk (
    "cars/addCar",
    async (car, thunkAPI) => {
      try {
        const response = await axios.post('/cars', car);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
)

export const deleteCar = createAsyncThunk (
    "cars/deleteCar",
    async (id, thunkAPI) => {
      try {
        const response = await axios.delete(`/cars/${id}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
)