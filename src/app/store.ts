import { configureStore } from '@reduxjs/toolkit'
import { paymentServicesReducer } from "../features/paymentServices/paymentServicesSlice.ts";
import { userReducer } from "../features/user/userSlice.ts";
import { transactionsReducer } from "../features/transactions/transactionsSlice.ts";
import { menuReducer } from "../features/menu/menuSlice.ts";

export const store = configureStore({
  reducer: {
    paymentServices: paymentServicesReducer,
    user: userReducer,
    transactions: transactionsReducer,
    menu: menuReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
