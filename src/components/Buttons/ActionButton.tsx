import "./style.scss";

type ButtonProps = {
  onClick: () => void;
  title: string;
};

export const ActionButton = ({
 onClick,
 title,
}: ButtonProps) => {
  return (
    <button
      className="action__button"
      onClick={onClick}
    >
      {title}
    </button>
  );
};
