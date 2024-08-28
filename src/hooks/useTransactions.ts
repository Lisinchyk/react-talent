import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks.ts";
import {
  incrementPage,
  selectFilteredTransactions,
  selectIsTransactionsLoading
} from "../features/transactions/transactionsSlice.ts";
import { getTransactions } from "../features/transactions/transactionsAPI.ts";

export const useTransactions = () => {
  const dispatch = useAppDispatch();
  
  const transactions = useAppSelector(selectFilteredTransactions);
  const isTransactionsLoading = useAppSelector(selectIsTransactionsLoading);
  
  useEffect(() => {
    dispatch(getTransactions());
  }, []);
  
  const loadMore = () => dispatch(incrementPage());
  
  return {
    transactions,
    isTransactionsLoading,
    loadMore
  };
};
