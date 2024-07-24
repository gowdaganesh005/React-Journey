import { useState,useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setPassword]=useState("")

  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{   // callback hook is a hook is used to  load the function which may be used repeteadly similar to the use effect and improving the efficeincy and optimization

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&*_+-=?/"

    for(let i=1;i<=length;i++){
      pass += str.charAt(Math.floor(Math.random()*str.length+1))
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard =useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{             // use effect hook will execute the funcion given to us whenever there is change in params mentioned
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])

  

  

  return (
   <>
   <div className=' w-full  max-w-md mx-auto bg-indigo-950 rounded-lg shadow-2xl px-4 py-4 items-center my-5'>
    
      <h1 className='flex jsutify-center text-white justify-center text-2xl '>Password Generator</h1>
      <div className='justify-center px-3 py-3 flex shadow-xl'>
      <input 
      type="text" 
      value={password}
      placeholder='Password'
      className='flex  px-2 py-1 rounded-lg '
      readOnly
      ref={passwordRef}
      
      />
      <button className='outline-none bg-blue-300 px-3 py-1 shrink-0 rounded-lg'
      onClick={copyPasswordToClipboard}>copy</button>
      
    </div>
    <div className='flex text-sm  justify-center'>
      <div className='flex items-center '>
        <input 
        type="range" 
        min={8}
        max={100} 
        value={length}
        className='cursor-pointer text-blue-50 '
        onChange={(e)=>setLength(e.target.value)}
        
        /> <label className='text-white px-3' >Length ( {length} )</label>
      
    </div>
    
    <div className='flex text-sm  '>
      <input type="checkbox"
      defaultChecked={numberAllowed} 
      onChange={()=>setNumberAllowed((prev)=>!prev)}
      />
      <label className='text-white px-1' >Numbers</label>

    </div>
    <div className='flex text-sm gap '>
      <input type="checkbox"
      defaultChecked={charAllowed} 
      onChange={()=>setcharAllowed((prev)=>!prev)}
      />
      <label className='text-white px-1' >Characters</label>

    </div>
    </div>
    </div>
   
   
   </>
  )
}

export default App
