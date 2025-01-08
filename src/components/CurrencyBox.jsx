import React, {useState} from "react";

function CurrencyBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'USD'}
) {

  return (
    <div className="container">
      <div className="box-title">
        <label htmlFor="amountID" className="title">{label}</label>
        <select value={selectCurrency} onChange={(e) => {onCurrencyChange(e.target.value)}}>
            {currencyOptions.map((currency) => 
            <option key={currency} value={currency}>{currency}</option>)}
        </select>
      </div>

      <div>
      <input
        type="number"
        id="amountID"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default CurrencyBox;
