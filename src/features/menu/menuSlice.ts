import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store.ts";

type StateType = {
  isOpen: boolean
};

const initialState: StateType = {
  isOpen: false
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isOpen = true;
    },
    closeMenu: (state) => {
      state.isOpen = false;
    }
  }
});

export const selectIsMenuOpen = (state: RootState) => state.menu.isOpen;

export const { openMenu, closeMenu } = menuSlice.actions;

export const menuReducer = menuSlice.reducer;
