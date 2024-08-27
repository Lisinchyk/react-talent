import { createSlice } from "@reduxjs/toolkit";
import { getUserData, UserType } from "./userAPI.ts";
import { RootState } from "../../app/store.ts";

type StateType = {
  isLoading: boolean;
  data: UserType | null;
  error: unknown;
};

const initialState: StateType = {
  isLoading: false,
  data: null,
  error: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getUserData.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  }
});

export const selectUserData = (state: RootState) => state.user.data;
export const selectIsUserLoading = (state: RootState) => state.user.isLoading;
export const selectUserError = (state: RootState) => state.user.error;
export const selectUserBalance = (state: RootState) => state.user.data?.balance;

export const userReducer = userSlice.reducer;
