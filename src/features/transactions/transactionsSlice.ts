import { createSlice } from "@reduxjs/toolkit";
import { getTransactions, Transactions } from "./transactionsAPI.ts";
import { RootState } from "../../app/store.ts";

type StateType = {
  isLoading: boolean;
  data: Transactions[];
  error: unknown;
};

const initialState: StateType = {
  isLoading: false,
  data: [],
  error: null
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTransactions.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.data = action.payload.transactions;
      state.isLoading = false;
    });
    builder.addCase(getTransactions.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  }
});

export const selectTransactionsData = (state: RootState) => state.transactions.data;
export const selectIsTransactionsLoading = (state: RootState) => state.transactions.isLoading;
export const selectTransactionsError = (state: RootState) => state.transactions.error;

export const transactionsReducer = transactionsSlice.reducer;
