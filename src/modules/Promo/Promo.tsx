import { ChangeEvent } from "react";
import { usePromoInput } from "../../hooks/usePromoInput.ts";
import { ActionButton } from "../../components/Buttons/ActionButton.tsx";
import { Section } from "../../components/Section/Section.tsx";
import { MAX_PROMO_CODE_LENGTH } from "../../constants.ts";
import "./style.scss";

const LABEL_TEXT = "Enter promo code here. It will activate a special bonus!";

export const Promo = () => {
  const { promoCode, isPromoCodeValid, setPromoCode } = usePromoInput(MAX_PROMO_CODE_LENGTH);
  
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
  
  return (
    <Section title="Have a Promo Code?">
      <div className="promo__container">
        <label htmlFor="promo" className="promo__label">{LABEL_TEXT}</label>
        <div className="promo__input--wrapper">
          <input
            id="promo"
            className="promo__input"
            type="text"
            placeholder="Enter promo code"
            value={promoCode}
            onChange={handlePromoCodeChange}
          />
          {isPromoCodeValid && (
            <img src="src/assets/icons/check-circle.svg" alt="validation-result-icon" className="promo__input--icon" />
          )}
        </div>
        <ActionButton
          onClick={handleApplyButtonClick}
          title="Apply"
        />
      </div>
    </Section>
  );
};
