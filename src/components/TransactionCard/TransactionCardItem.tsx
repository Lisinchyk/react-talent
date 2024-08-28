type TransactionCardItemProps = {
  text: string;
  value: string;
  className?: string
  type?: "mobile" | "desktop";
};

export const TransactionCardItem = ({
  text,
  value,
  className = "",
  type
}: TransactionCardItemProps) => (
  <div className={`transaction-card__data ${type}`}>
    <p className={className}>{value}</p>
    <p>{text}</p>
  </div>
);
