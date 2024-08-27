import { createSlice } from "@reduxjs/toolkit";
import { getPaymentServices, PaymentServicesType } from "./paymentServicesAPI.ts";
import { RootState } from "../../app/store.ts";

type BalanceType = {
  isOpen: boolean
  method: PaymentServicesType | null;
  amount: number;
};

type StateType = {
  isLoading: boolean;
  data: PaymentServicesType[];
  error: unknown;
  balance: BalanceType;
};

const initialState: StateType = {
  isLoading: false,
  data: [],
  error: null,
  balance: {
    isOpen: false,
    method: null,
    amount: 0
  }
};

const paymentServicesSlice = createSlice({
  name: "paymentServices",
  initialState,
  reducers: {
    setSelectedPaymentService: (state, action) => {
      state.balance.method = action.payload;
      
      if (!state.balance.isOpen) {
        state.balance.isOpen = true;
      }
    },
    removeSelectedPaymentService: (state) => {
      state.balance.method = null;
    },
    openBalanceModule: (state) => {
      if (!state.balance.method) {
        state.balance.method = state.data[0];
      }
      
      state.balance.isOpen = true;
    },
    closeBalanceModule: (state) => {
      state.balance.isOpen = false;
      state.balance.method = null;
      state.balance.amount = 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPaymentServices.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPaymentServices.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPaymentServices.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  }
});

export const selectPaymentServices = (state: RootState) => state.paymentServices.data;
export const selectIsPaymentServicesLoading = (state: RootState) => state.paymentServices.isLoading;
export const selectPaymentServicesError = (state: RootState) => state.paymentServices.error;
export const selectSetSelectedPaymentService = (state: RootState) => state.paymentServices.balance.method;
export const selectIsBalanceOpen = (state: RootState) => state.paymentServices.balance.isOpen;
export const selectBalanceAmount = (state: RootState) => state.paymentServices.balance.amount;

export const { setSelectedPaymentService, openBalanceModule, closeBalanceModule } = paymentServicesSlice.actions;

export const paymentServicesReducer = paymentServicesSlice.reducer;
