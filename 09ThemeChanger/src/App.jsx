import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './contexts/theme'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [themeMode, setthenemode] = useState("light")

  const lighttheme=()=>{setthenemode("light")}
  const darktheme=()=>{setthenemode("dark")}

  useEffect(()=> {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lighttheme,darktheme}}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto justify-end flex mb-4'>
            <Button />

          </div>
          <div className='w-full max-w-sm mx-auto '>
            <Card />
          </div>
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
