import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Currency } from "../../constants.ts";

type BalanceType = {
  amount: number;
  currency: Currency;
};

export type UserType = {
  id: string;
  name: string;
  balance: BalanceType;
  percent: number;
  avatar: string;
  transactionId: string;
};

type ResponseType = {
  data: UserType;
};

export const getUserData = createAsyncThunk(
  "user/fetchUserData",
  async () => {
    const response: ResponseType = await axios.get(`userData.json`);
    return response.data;
  }
);
