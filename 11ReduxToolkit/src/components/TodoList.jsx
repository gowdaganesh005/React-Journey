
import { useDispatch, useSelector } from "react-redux"
import { removetodo } from "../features/todo/todoSlice"

function TodoItem({todo}){
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()

    return(
        <>
        {todos.map((todo)=>(
            <li key={todo.id}>
        <div className= {`flex border border-white/10 rounded-lg px-3,py-1.5 gap-x-3 shadow-lg shadow-black text-gray-900  bg-[#c6e9a7] `}>
       
         <div
         className={`border outline-none w-full bg-transparent rounded-lg  border-black/10 px-2 `}>{todo.text}</div>
        
         <button className="inline-flex w h-8 rounded-lg text-sm border border-black/10 justify-center bg-gray-200 hover:bg-gray-700 shrink-0 p-1"
         onClick={()=>
           dispatch(removetodo(todo.id))
         }
         
         >
            Delete
            

         </button>
        </div>
        </li>
        ))}
        </>
    )
}
export default TodoItem