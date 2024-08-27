import "./style.scss";
import { ChangeEvent, useState } from "react";

const quickAmounts = [10, 20, 30, 50, 100];

export const Amount = () => {
  const [amount, setAmount] = useState(0);
  
  const handleOnChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const regExp = /^\d+$/;
    const inputValue = event.target.value.replace("$ ", "");
    
    if (!inputValue.length) {
      setAmount(0);
    }
    
    if (!regExp.test(inputValue)) {
      return;
    }
    
    setAmount(+inputValue);
  };
  
  const handleAddAmount = (amountValue: number) => {
    setAmount(prevAmount => prevAmount + amountValue);
  };
  
  return (
    <div className="amount">
      <h3 className="amount--title">Amount</h3>
      <div className="amount--input">
        <input type="text" value={`$ ${amount}`} onChange={handleOnChangeAmount}/>
      </div>
      <div className="quicks">
        {quickAmounts.map((amount) => (
          <button
            key={amount}
            className="quicks-button"
            onClick={() => handleAddAmount(amount)}
          >
            + ${amount}
          </button>
        ))}
      </div>
      <p className="amount--warning">From 21.00 to 906.00 USD at a time</p>
    </div>
  );
};
