import { TransactionCard } from "../../components/TransactionCard/TransactionCard.tsx";
import { ActionButton } from "../../components/Buttons/ActionButton.tsx";
import { Section } from "../../components/Section/Section.tsx";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { selectIsTransactionsLoading, selectTransactionsData } from "../../features/transactions/transactionsSlice.ts";
import { useEffect } from "react";
import { getTransactions } from "../../features/transactions/transactionsAPI.ts";

export const Transactions = () => {
  const dispatch = useAppDispatch();
  const transactions = useAppSelector(selectTransactionsData);
  const isTransactionsLoading = useAppSelector(selectIsTransactionsLoading);
  
  useEffect(() => {
    dispatch(getTransactions());
  }, []);
  
  const handleShowMoreButton = () => {
    console.log("Show more button clicked!");
  };
  
  if (isTransactionsLoading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <Section
      title="Transactions"
      icon={<img src="src/assets/icons/filters.svg" alt="filters" />}
      onClick={() => console.log("Filter button clicked!")}
    >
      <div>
        {transactions.map((transaction, index) => (
          <div key={transaction.id + index}>
            <TransactionCard
              data={transaction}
            />
          </div>
        ))}
      </div>
      <ActionButton
        onClick={handleShowMoreButton}
        title="Show More"
      />
    </Section>
  );
};
