import { useState } from "react"
import { useTodo } from "../contexts/Todocontext"

function TodoForm(){

    const [todo,setTodo]=useState("")
    const {addTodo}=useTodo()

    const add=(e)=>
    {
        e.preventDefault()
        if(!todo) return 
        addTodo({todo:todo,completed:false})
        setTodo("")
    }

    return(
        <>
       

        <form className="flex" onSubmit={add}>
  <input
    type="text"
    id="Username"
    className="p-2  border-black/10 rounded-l-lg px-3 outline-none duration-150  justify-center w-72 "
    placeholder="Write Todo"
    onChange={(e)=>setTodo(e.target.value)}
    value={todo}
  />
  <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
    Add
  </button>

</form>
  
  

  

        </>
    )
}
export default TodoForm