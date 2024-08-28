import { Transactions } from "../../features/transactions/transactionsAPI.ts";
import { TransactionCardItem } from "./TransactionCardItem.tsx";
import { CurrencySymbols } from "../../constants.ts";
import "./style.scss";

type TransactionCardProps = {
  data: Transactions;
};

export const TransactionCard = ({
  data
}: TransactionCardProps) => {
  return (
    <div>
      <div className="transaction-card">
        <div className="transaction-card__header">
          <div className="transaction-card__logo">
            <img src={`/assets/logos/${data.service.toLowerCase()}.svg`} alt="master-card"/>
          </div>
          <TransactionCardItem
            text="Operation Status"
            value={data.status}
            className={data.status.toLowerCase()}
            type="mobile"
          />
        </div>
        <div className="transaction-card__body">
          <TransactionCardItem
            text={`by ${data.service}, ${data.currency}`}
            value={`${data.id}`}
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
          <TransactionCardItem
            text="Operation Status"
            value={data.status}
            className={data.status.toLowerCase()}
            type="desktop"
          />
        </div>
      </div>
    </div>
  );
};
