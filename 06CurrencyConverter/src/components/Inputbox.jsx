import React ,{useId} from "react";

function Inputbox(
    {
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectcurrency='usd',
    amountDisable=false,
    currencyDisable=false, 
    className=""
    }

)
{
    return(
        <>
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
            <label className="text-black/40 mb-2 inline-block ">
            {label}
            </label>
            <input 
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
            />
            <select 
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={selectcurrency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)
                }
                disabled={currencyDisable}
            >
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>)
                )}
                
            </select>
            </div>
        </div>

        </>
    )
}

export default Inputbox;