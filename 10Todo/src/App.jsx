import { TodoContext ,TodoProvider ,useTodo } from './contexts/Todocontext'
import './App.css'
import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {


  const [todos,setTodos]=useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=> [{id:Date.now(), ...todo},...prev])
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  const updateTodo=(id,todo)=> {
    setTodos((prev)=>prev.map((prevtodo)=> (prevtodo.id === id ? todo : prevtodo)))
  }
  const completedTodo=(id)=>{
    setTodos((prev)=>prev.map((todo)=>todo.id === id ?{...todo, completed: !todo.completed} :todo))
  }

  useEffect(()=>{
    const todosdata=JSON.parse(localStorage.getItem("todos"))
    if(todosdata && todosdata.length>0){
      setTodos(todosdata)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  

  return (
    <TodoProvider value={{ todos,addTodo,deleteTodo ,updateTodo,completedTodo}}>
      <div className='bg bg-gray-700 w-screen h-screen justify-center items-center flex flex-wrap'>
        <div >
          <div className='p-3'>
            < TodoForm />

          </div>
          <div className='p-3'>
           {todos.map((todo)=>(
            <div key={todo.id} className='w-full p-2'>
              <TodoItem todo={todo}/>

            </div>
           ))}

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
