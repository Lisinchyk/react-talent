import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import {
  getPaymentServices,
  PaymentServicesType
} from "../../features/paymentServices/paymentServicesAPI.ts";
import {
  selectIsPaymentServicesLoading,
  selectPaymentServices,
  setSelectedPaymentService
} from "../../features/paymentServices/paymentServicesSlice.ts";
import { Cards } from "../../components/Card/Cards.tsx";
import { Section } from "../../components/Section/Section.tsx";
import "./style.scss";

export const PaymentMethods = () => {
  const dispatch = useAppDispatch();
  const isPaymentLoading = useAppSelector(selectIsPaymentServicesLoading);
  const paymentServices = useAppSelector(selectPaymentServices);
  
  useEffect(() => {
    dispatch(getPaymentServices());
  }, []);
  
  const handleCardClick = (selectedMethod: PaymentServicesType) => {
    dispatch(setSelectedPaymentService(selectedMethod));
  };
  
  if (isPaymentLoading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <Section title="Choose payment method">
      <div className="card-list__wrapper">
        <div className="card-list">
          <h3 className="card-list__title">Cards, E-Money, PIN</h3>
          {paymentServices.filter((card) => !card.isCrypto).map((cardData) => (
            <Cards
              key={cardData.name}
              status={cardData.status}
              name={cardData.name}
              icon={cardData.icon}
              commission={cardData.commission}
              onClick={() => handleCardClick(cardData)}
            />
          ))}
        </div>
        <div className="card-list">
          <h3 className="card-list__title">Cryptocurrency</h3>
          {paymentServices.filter((card) => card.isCrypto).map((cardData) => (
            <Cards
              key={cardData.name}
              status={cardData.status}
              name={cardData.name}
              icon={cardData.icon}
              commission={cardData.commission}
              onClick={() => handleCardClick(cardData)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
