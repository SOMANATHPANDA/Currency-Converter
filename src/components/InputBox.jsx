import React, { useId, useState } from 'react'
import { FixedSizeList as List } from 'react-window';


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleCurrencySelect = (currency) => {
    onCurrencyChange && onCurrencyChange(currency);
    setIsDropdownOpen(false); // Close dropdown after selecting
  };

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >

          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}

        </select>
        {/* If you want to use Data Virtualization then you can uncomment below button and Virtualized List Dropdown and comment select */}
        {/* <button
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none w-full text-left"
          onClick={toggleDropdown}
          disabled={currencyDisable}
        >
          {selectCurrency.toUpperCase()}
        </button> */}

        {/* Virtualized List Dropdown */}
        {/* {isDropdownOpen && (
          <div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg w-full max-h-40 overflow-auto">
            <List
              height={150} // Total height of the dropdown
              itemCount={currencyOptions.length}
              itemSize={35} // Height of each item
            >
              {({ index, style }) => (
                <div
                  style={style}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleCurrencySelect(currencyOptions[index])}
                >
                  {currencyOptions[index].toUpperCase()}
                </div>
              )}
            </List>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default InputBox;