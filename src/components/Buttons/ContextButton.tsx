import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { openBalanceModule } from "../../features/paymentServices/paymentServicesSlice.ts";
import "./style.scss";
import { selectUserData } from "../../features/user/userSlice.ts";
import { Currency, CurrencySymbols } from "../../constants.ts";

export const ContextButton = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(selectUserData);
  
  const handleAddBalance = () => {
    dispatch(openBalanceModule());
  };
  
  const handleDropdown = () => {
    console.log("Dropdown button clicked!");
  };
  
  const amount = userData?.balance.amount ?? 0;
  const currency = userData?.balance.currency ?? Currency.USD;
  const percent = userData?.percent ?? 0;
  
  return (
    <div className="context-button__wrapper">
      <button
        className="context-button__dropdown context-button"
        onClick={handleDropdown}
      >
        <span>{amount} {CurrencySymbols[currency]}</span>
        <span>{percent}%</span>
        <img
          src="/assets/icons/down-chevron.svg"
          alt="down-chevron"
          className="context-button__dropdown--icon"
        />
      </button>
      <button
        className="context-button__add context-button"
        onClick={handleAddBalance}
      >
        <img
          src="/assets/icons/plus.svg"
          alt="plus"
        />
      </button>
    </div>
  );
};
