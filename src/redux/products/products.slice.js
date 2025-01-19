import { createSlice } from "@reduxjs/toolkit";
import {
  apiGetAllProducts,
  apiGetProductDetails,
  apiGetProductsByQuery,
} from "./products.operation";

const INITIAL_STATE = {
  productDetails: null,
  isLoading: false,
  error: false,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(apiGetProductDetails.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetProductDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload;
      })
      .addCase(apiGetProductDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiGetAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(apiGetAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiGetProductsByQuery.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiGetProductsByQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(apiGetProductsByQuery.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
