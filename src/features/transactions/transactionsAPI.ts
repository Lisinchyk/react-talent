import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Currency, Status, TransactionType } from "../../constants.ts";

export type Transactions = {
  id: string;
  service: string;
  date: string;
  time: string;
  amount: number;
  currency: Currency;
  status: Status;
  type: TransactionType;
};

type TransactionsType = {
  id: string;
  transactions: Transactions[];
};

type ResponseType = {
  data: TransactionsType;
};

export const getTransactions = createAsyncThunk(
  "transactions/fetchData",
  async () => {
    const response: ResponseType = await axios.get(`transactions.json`);
    return response.data;
  }
);
