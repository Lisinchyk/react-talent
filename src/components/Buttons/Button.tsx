import { ReactNode } from "react";

type ButtonProps = {
  onClick: () => void;
  children?: string | ReactNode | ReactNode[];
  icon?: string;
  className?: string;
};

export const Button = ({
  onClick,
  children,
  icon,
  className = "",
}: ButtonProps) => {
  
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <img src={icon} alt="button-icon" className="button-icon" />}
    </button>
  );
};
