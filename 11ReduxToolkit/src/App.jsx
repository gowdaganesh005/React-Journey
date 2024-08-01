import { useState } from 'react'

import './App.css'
import TodoItem from './components/TodoList'
import TodoForm from './components/Todoform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg bg-gray-700 w-screen h-screen justify-center items-center flex flex-wrap'>
        <div >
          <div className='p-3'>
            < TodoForm />

          </div>
          <div className='p-3'>
           < TodoItem />

          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
