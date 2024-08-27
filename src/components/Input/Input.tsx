import { ChangeEvent } from "react";
import "./style.scss";

type InputProps = {
  id: string;
  placeholder: string;
  value: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  id,
  placeholder,
  value,
  onChange,
  label
}: InputProps) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className={`${id}__label label`}>Enter promo code here. It will activate a special bonus!</label>
      )}
      <input
        id={id}
        type="text"
        className={`${id}__input input`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
