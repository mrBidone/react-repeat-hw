import { createSlice } from "@reduxjs/toolkit";
import {
  fetchBaseCurrencyThunk,
  fetchExchangeCurrencyThunk,
  fetchLatestSymbolsThunk,
} from "./operations";

const initialState = {
  baseCurrency: "",
  exchangeInfo: null,
  loading: false,
  error: null,
  rates: [],
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchBaseCurrencyThunk.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
      }) //треба додати стани pending та reject!!!!!!!!!!!!!!!!!!!!
      .addCase(fetchExchangeCurrencyThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExchangeCurrencyThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.exchangeInfo = payload;
      })
      .addCase(fetchExchangeCurrencyThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.exchangeInfo = null;
        state.error = payload;
      })
      .addCase(fetchLatestSymbolsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLatestSymbolsThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.rates = payload;
      })
      .addCase(fetchLatestSymbolsThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.rates = [];
        state.error = payload;
      }),
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
