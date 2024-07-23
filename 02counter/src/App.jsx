import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // react is actually used to update the values of the variable in many places in the UI and which actuallly helps in reducing js to atttach each ele and change it everytime react will react to the change and will make them availavble using hooks
  //hooks

  let [counter,setCounter]=useState(15)  // just a convection to use set as prefix juat a convention

  //here the counter is controlled by the setcounter method
 // as soon as the counter funnction setcounter is triggered the dom is analyzed and updates ora chages the state accordingly
  const addValue=function(){
    if(!(counter>=20)){
    counter+=1
    setCounter(counter) // metion the new value
    
    }
    else {
      alert("counter cannot exceed over 20")
    }
      

    console.log(counter)
   
  }
  const subValue=function(){
    if(counter<=0) alert("counter cannot go below 0")
    else setCounter(counter-1)
    console.log(counter)
  }
  // let counter=15

  return (
    <>
    <h1>Ganesh gowda</h1>
    <h2>Counter:{counter}</h2>
    <button onClick={addValue} >+ 1  ({counter})</button>

    
    <button onClick={subValue}>- 1   ({counter})</button>
    </>
  )
}

export default App
