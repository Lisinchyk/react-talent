import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import {
  selectPaymentServices,
  selectSetSelectedPaymentService, setSelectedPaymentService
} from "../../features/paymentServices/paymentServicesSlice.ts";
import { DropdownItem } from "./components/DropdownItem.tsx";
import "./style.scss";
import { useState } from "react";
import { PaymentServicesType } from "../../features/paymentServices/paymentServicesAPI.ts";

export const Dropdown = () => {
  const dispatch = useAppDispatch();
  const [isDropdownListOpen, setIsDropdownListOpen] = useState(false);
  
  const methodList = useAppSelector(selectPaymentServices);
  const selectedMethod = useAppSelector(selectSetSelectedPaymentService);
  
  const handleOpenDropdown = () => {
    setIsDropdownListOpen(prevState => !prevState);
  };
  
  const handleSelectMethod = (method: PaymentServicesType) => {
    dispatch(setSelectedPaymentService(method));
    handleOpenDropdown();
  };
  
  const filteredMethodList = methodList.filter((method) => method.name !== selectedMethod?.name);
  
  return (
    <div className="dropdown__container">
      <button
        className="dropdown__button"
        onClick={handleOpenDropdown}
      >
        <DropdownItem
          icon={selectedMethod?.icon}
          name={selectedMethod?.name}
          commission={selectedMethod?.commission}
        />
        <img src="/assets/icons/down-chevron.svg" alt="chevron down"/>
      </button>
      {isDropdownListOpen && (
        <ul className="dropdown__list">
          {filteredMethodList.map((method) => (
            <li
              key={method.name}
              className="dropdown__item"
              onClick={() => handleSelectMethod(method)}
            >
              <DropdownItem
                icon={method.icon}
                name={method.name}
                commission={method.commission}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
