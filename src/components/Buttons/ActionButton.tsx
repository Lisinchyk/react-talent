import "./style.scss";

type ButtonProps = {
  onClick: () => void;
  title: string;
  disabled?: boolean;
};

export const ActionButton = ({
  onClick,
  title,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="action__button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
