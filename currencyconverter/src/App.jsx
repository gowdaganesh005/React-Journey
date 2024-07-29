import { useState } from 'react'

import './App.css'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount,setAmount]=useState(0)
  const [from,setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [converted ,setConverted]=useState(0)


  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)
  

  const swap=function(){
    setFrom(to)
    setTo(from)
    
  }
  const convert=function(){
    setConverted((amount*currencyInfo[to]).toFixed(2))
  }

  

  return (
    <>
    <div className=' flex  w-full h-screen justify-center items-center bg-blue-400'>
      <div className='w-full max-w-md'>
      <div className='bg-orange-200 p-4 rounded-xl 
        '>
      <InputBox 
      
      label={"From"}
      amount={Number(amount)}
      currencylist={options}
   
      selectCurrency={from}
      onAmountChange={(currency)=>setAmount(currency)}
      onChangeCurrency={(currency)=>setFrom(currency)}

      
      />
      <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 py-1 px-2 bg-blue-600 text-white rounded-md'
      onClick={()=>swap()}
      
      
      >Swap</button>
      <InputBox label={"To"}
      amount={converted}
      onAmountChange={(e)=>setConverted(e)}
      currencylist={options}
      selectCurrency={to}
      onChangeCurrency={(currency)=>setTo(currency)}
      
      />
      <button className='bg-orange-400 w-full p-3 rounded-xl'
      onClick={()=>convert()}
      >Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default App
