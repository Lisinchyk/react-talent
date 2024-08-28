import { useMediaQuery } from 'react-responsive'
import { Transactions } from "../../features/transactions/transactionsAPI.ts";
import { TransactionCardItem } from "./TransactionCardItem.tsx";
import { CurrencySymbols, DESKTOP_QUERY } from "../../constants.ts";
import "./style.scss";

type TransactionCardProps = {
  data: Transactions;
};

export const TransactionCard = ({ data }: TransactionCardProps) => {
  const isDesktopOrLaptop = useMediaQuery(DESKTOP_QUERY);
  
  return (
    <div>
      <div className="transaction-card">
        <div className="transaction-card__header">
          <div className="transaction-card__logo">
            <img src={`/assets/logos/${data.service.toLowerCase()}.svg`} alt="master-card"/>
          </div>
          {!isDesktopOrLaptop && (
            <TransactionCardItem
              text="Operation Status"
              value={data.status}
              className={data.status.toLowerCase()}
            />
          )}
        </div>
        <div className="transaction-card__body">
          <TransactionCardItem
            text={`by ${data.service}, ${data.currency}`}
            value={`${data.service}`}
          />
          <TransactionCardItem
            text="Transactions Number"
            value={`${data.id}`}
          />
          <TransactionCardItem
            text="Payment Date"
            value={`${data.date} at ${data.time}`}
          />
          <TransactionCardItem
            text="Amount Payed"
            value={`${data.amount}${CurrencySymbols[data.currency]}`}
          />
          {isDesktopOrLaptop && (
            <TransactionCardItem
              text="Operation Status"
              value={data.status}
              className={data.status.toLowerCase()}
            />
          )}
        </div>
      </div>
    </div>
  );
};
