import "./style.scss";
import { Transactions } from "../../features/transactions/transactionsAPI.ts";
import { CurrencySymbols } from "../../constants.ts";

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
            <img src={`src/assets/logos/${data.service}.svg`} alt="master-card"/>
          </div>
          <div className="transaction-card__data">
            <p className={data.status.toLowerCase()}>{data.status}</p>
            <p>Operation Status</p>
          </div>
        </div>
        <div className="transaction-card__body">
          <div className="transaction-card__data">
            <p>by {data.service}, {data.currency}</p>
            <p>{data.type}</p>
          </div>
          <div className="transaction-card__data">
            <p>{data.id}</p>
            <p>Transactions Number</p>
          </div>
          <div className="transaction-card__data">
            <p>{data.date} at {data.time}</p>
            <p>Payment Date</p>
          </div>
          <div className="transaction-card__data">
            <p>{data.amount}{CurrencySymbols[data.currency]}</p>
            <p>Amount Payed</p>
          </div>
        </div>
      </div>
    </div>
  );
};
