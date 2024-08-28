import { ChangeEvent } from "react";
import { ActionButton } from "../../components/Buttons/ActionButton.tsx";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import { closeBalanceModule } from "../../features/paymentServices/paymentServicesSlice.ts";
import { usePromoInput } from "../../hooks/usePromoInput.ts";
import { CurrencySymbols, MAX_PROMO_CODE_LENGTH } from "../../constants.ts";
import { selectUserBalance } from "../../features/user/userSlice.ts";
import { Amount } from "../../components/Amount/Amount.tsx";
import { Dropdown } from "../../components/Dropdown/Dropdown.tsx";
import "./style.scss";

export const Balance = () => {
  const dispatch = useAppDispatch();
  const { promoCode, isPromoCodeValid, setPromoCode } = usePromoInput(MAX_PROMO_CODE_LENGTH);
  
  const userBalance = useAppSelector(selectUserBalance);
  const currentUserAmount = userBalance?.amount || 0;
  const currentUserCurrency = userBalance?.currency
    ? CurrencySymbols[userBalance?.currency]
    : CurrencySymbols.USD;
  
  const handlePromoCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    
    if (value.length > MAX_PROMO_CODE_LENGTH) {
      return;
    }
    
    setPromoCode(value);
  };
  
  const handleApplyButtonClick = () => {
    console.log("Promo code is: ", promoCode);
  };
  
  const handleCloseBalance = () => {
    dispatch(closeBalanceModule());
  };
  
  return (
    <div className="balance">
      <div className="balance__header">
        <a
          className="balance__header--link"
          onClick={handleCloseBalance}
        >
          <img src="/assets/icons/chevron-left.svg" alt="back to the methods"/>
          <h1>Back to Payment Methods</h1>
        </a>
        <button
          className="balance__close"
          onClick={handleCloseBalance}
        >
          <img src="/assets/icons/close-icon.svg" alt=""/>
        </button>
      </div>
      <div className="balance__info">
        <p>Current Balance:</p>
        <p>{currentUserCurrency} {currentUserAmount}</p>
      </div>
      <Dropdown />
      <Amount />
      <div className="promocode">
        <h2 className="promocode__title">Promo Code</h2>
        <div className="promocode__input--wrapper">
          <input
            id="promocode"
            className="promocode__input"
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
          {isPromoCodeValid && (
            <img
              src="/assets/icons/check-circle.svg"
              alt="validation-result-icon"
              className="promocode__input--icon"
            />
          )}
        </div>
        <button className="promocode__button" onClick={handleApplyButtonClick}>Apply</button>
      </div>
      <ActionButton
        title="Deposit"
        onClick={() => console.log("Deposit button clicked!")}
      />
    </div>
  );
};
