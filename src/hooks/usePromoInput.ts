import { useEffect, useState } from "react";

const regex = /[^A-Za-z0-9]+/g;

export const usePromoInput = (maxLength: number) => {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoCodeValid, setIsPromoCodeValid] = useState(false);
  
  useEffect(() => {
    setIsPromoCodeValid(
      promoCode.length === maxLength || regex.test(promoCode)
    );
  }, [promoCode]);
  
  return { promoCode, isPromoCodeValid, setPromoCode };
};
