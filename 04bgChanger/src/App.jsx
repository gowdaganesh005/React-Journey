import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("skyblue")

  return (
    <>
      <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 shadow-2xl'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>       
            <button className='outline-none px-4 py-2 rounded-3xl shadow-xl ' onClick={()=> setColor("red")} style={{backgroundColor: "red"}} >Red</button>
            <button className='outline-none px-4 py-2 rounded-3xl shadow-xl ' onClick={()=> setColor("Green")} style={{backgroundColor: "Green"}} >Green</button>
            <button className='outline-none px-4 py-2 rounded-3xl shadow-xl ' onClick={()=> setColor("Blue")} style={{backgroundColor: "Blue"}} >Blue</button>
            <button className='outline-none px-4 py-2 rounded-3xl shadow-xl ' onClick={()=> setColor("Yellow")} style={{backgroundColor: "Yellow"}} >Yellow</button>
            <button className='outline-none px-4 py-2 rounded-3xl shadow-xl ' onClick={()=> setColor("Orange")} style={{backgroundColor: "Orange"}} >Orange</button>
            <button className='outline-none px-4 py-2 rounded-3xl shadow-xl ' onClick={()=> setColor("Lavender")} style={{backgroundColor: "Lavender"}} >Lavender</button>
            <button className='outline-none px-4 py-2 rounded-3xl shadow-xl ' onClick={()=> setColor("White")} style={{backgroundColor: "White"}} >White</button>
            <button className='outline-none px-4 py-2 rounded-3xl shadow-xl text-white text-' onClick={()=> setColor("Black")} style={{backgroundColor: "Black"}} >Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
