import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.ts";
import { getTransactions, Transactions } from "./transactionsAPI.ts";
import { FilterSortValues, MAX_TRANSACTIONS_PER_PAGE, Status } from "../../constants.ts";

type StateType = {
  isLoading: boolean;
  data: Transactions[];
  error: unknown;
  page: number;
  filter: FilterSortValues | null;
};

const initialState: StateType = {
  isLoading: false,
  data: [],
  error: null,
  page: 1,
  filter: null
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    incrementPage: (state) => {
      const lastPage = Math.ceil(state.data.length / MAX_TRANSACTIONS_PER_PAGE);
      
      if (state.page === lastPage) {
        return;
      }
      
      state.page += 1;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
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

export const selectIsTransactionsLoading = (state: RootState) => state.transactions.isLoading;
const selectTransactionsData = (state: RootState) => state.transactions.data;
const selectCurrentPage = (state: RootState) => state.transactions.page;
const selectFilterType = (state: RootState) => state.transactions.filter;

const filterByStatus = (transactions: Transactions[], status: Status) => {
  return transactions.filter((item) => item.status === status);
};

const selectSortedTransactions = createSelector(
  selectTransactionsData,
  selectFilterType,
  (transactions, filter) => {
    switch (filter) {
      case FilterSortValues.Active: {
        return filterByStatus(transactions, Status.Active);
      }
      case FilterSortValues.Performed: {
        return filterByStatus(transactions, Status.Performed);
      }
      case FilterSortValues.Processing: {
        return filterByStatus(transactions, Status.Processing);
      }
      
      default: {
        return transactions;
      }
    }
  }
);

export const selectFilteredTransactions = createSelector(
  selectSortedTransactions,
  selectCurrentPage,
  (transactions, currentPage) => {
    return transactions.slice(0, currentPage * MAX_TRANSACTIONS_PER_PAGE);
  }
);

export const { incrementPage, setFilter } = transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
