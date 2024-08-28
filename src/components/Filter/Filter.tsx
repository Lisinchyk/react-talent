import { useState } from "react";
import "./style.scss";

export type OptionType = {
  label: string;
  value: string;
};

type FilterProps = {
  options: OptionType[];
  onFilterChange: (value: OptionType["value"]) => void;
};

export const Filter = ({
  options,
  onFilterChange,
}: FilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const handleFilterToggle = () => {
    setIsFilterOpen(prevState => !prevState);
  };
  
  const onSelect = (value: OptionType["value"]) => {
    onFilterChange(value);
    handleFilterToggle();
  };
  
  return (
    <div className="filter__container">
      <button className="filter__button" onClick={handleFilterToggle}>
        <img src="/assets/icons/filters.svg" alt="filters"/>
      </button>
      {isFilterOpen && (
        <ul className="filter__dropdown">
          {options.map((option) => (
            <li
              key={option.value}
              className="filter__item"
              onClick={() => onSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
