import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export type PaymentServicesType = {
  name: string,
  icon: string,
  commission: string,
  status: string,
  isCrypto: boolean
};

type ResponseType = {
  data: PaymentServicesType[];
};

export const getPaymentServices = createAsyncThunk(
  "paymentServices/fetchAll",
  async () => {
    const response: ResponseType = await axios.get(`paymentServices.json`);
    return response.data;
  }
);
