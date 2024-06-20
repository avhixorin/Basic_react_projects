import {React, useId} from 'react'

const InputBox = ({
label,
className="",
amount,
onAmountChange,
onCurrencyChange,
currencyoptions=[],
selectCurrency='usd',
amountDisable=false,
currencyDisable=false,

}) => {
const uniqueId = useId();
return (
    <div className="h-12 w-full rounded-md bg-white flex">
    <div className="w-1/2 h-full flex justify-around flex-col ml-2 ">
        <label htmlFor={uniqueId} className="text-black/40 text-xl">{label}</label>
        <input
        className="outline-none w-full bg-transparent py-1.5"
        type='number'
        placeholder='Amount'
        disabled={amountDisable}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
        id={uniqueId}
        ></input>
    </div>
    <div className="w-1/2 h-full flex justify-around items-end flex-col mr-2">
        <p
        className="text-black/40 text-xl"
        >Currency Type</p>
        <select
        className="align-right h-7 w-1/3 rounded-lg bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        >
            {currencyoptions.map((currency) => (
                <option key={currency} value={currency}>
                    {currency}
                </option>
            ))}

        </select>
    </div>
    
    
</div>
)
}

export default InputBox