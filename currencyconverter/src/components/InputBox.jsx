


function InputBox({
    label,
    amount=0,
    onAmountChange,
    selectCurrency="usd",
    onChangeCurrency,
    currencylist=[],
    
}){
    return(
        <>
        <div className="bg-white max-w-md rounded-2xl my-3" >
        <div className="flex  mx-4  justify-between  ">
            
            <label className="p-3">
                {label}
            </label>
            <label className="p-3 ">
                Currency Type</label>
        </div>
        <div className="p-1 flex justify-between" >
            <input 
            className="outline-none  bg-gray-400 mx-4 my-1 py-0.5 px-2 rounded-md max-w-sm "
            type="number" 
            value={amount}
            
            onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>


            <select className="justify-center mx-4 w-full"
            value={selectCurrency}
            onChange={(e)=>onChangeCurrency && onChangeCurrency(()=>(e.target.value))}
            >
                {currencylist.map((cur)=>(
                    <option 
                    
                   
                    key={cur}
                    value={cur} >{cur}</option>

                ))}
                
            </select>
            
        
            
        </div>
        </div>
        </>
    )
}

export default InputBox