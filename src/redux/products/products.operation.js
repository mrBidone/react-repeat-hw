import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const apiGetProductDetails = createAsyncThunk(
  "products/getProductDetails",
  async (productId, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${productId}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (thunkApi) => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      return data.products;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetProductsByQuery = createAsyncThunk(
  "products/getProductsByQuery",
  async (searchValue, thunkApi) => {
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products/search?q=${searchValue}`
      );
      return data.products;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
