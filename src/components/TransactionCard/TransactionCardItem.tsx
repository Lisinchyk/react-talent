type TransactionCardItemProps = {
  text: string;
  value: string;
  className?: string
};

export const TransactionCardItem = ({
  text,
  value,
  className = ""
}: TransactionCardItemProps) => (
  <div className="transaction-card__data">
    <p className={className}>{value}</p>
    <p>{text}</p>
  </div>
);
