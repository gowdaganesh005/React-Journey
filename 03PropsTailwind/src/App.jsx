import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let someobj={
    name:'hemanth',
    id:9847
  }
  let newArray=[23,233,13,1]

  return (
    <>
      <p className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tail Wind CSS</p>
      <Card username="hitesh" myobj={newArray} btntext='see profile'/>
      <Card />
      

    </>
  )
}

export default App
