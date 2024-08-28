import { useAppDispatch } from "../../app/hooks.ts";
import { useTransactions } from "../../hooks/useTransactions.ts";
import { TransactionCard } from "../../components/TransactionCard/TransactionCard.tsx";
import { ActionButton } from "../../components/Buttons/ActionButton.tsx";
import { Section } from "../../components/Section/Section.tsx";
import { Filter, OptionType } from "../../components/Filter/Filter.tsx";
import { setFilter } from "../../features/transactions/transactionsSlice.ts";
import { FILTER_OPTIONS, FilterSortValues } from "../../constants.ts";

export const Transactions = () => {
  const dispatch = useAppDispatch();
  const { transactions, isTransactionsLoading, loadMore } = useTransactions();
  
  if (isTransactionsLoading) {
    return <h1>Loading...</h1>;
  }
  
  const handleFilterChange = (value: OptionType["value"]) => {
    dispatch(setFilter(value as FilterSortValues));
  };
  
  return (
    <Section
      title="Transactions"
      headerElement={
        <Filter
          options={FILTER_OPTIONS}
          onFilterChange={handleFilterChange}
        />
      }
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
        onClick={loadMore}
        title="Show More"
      />
    </Section>
  );
};
