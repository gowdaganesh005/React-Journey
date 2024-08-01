import { useState } from "react"
import { useTodo } from "../contexts/Todocontext"

function TodoItem({todo}){

    
    const [isedit ,setIsedit]=useState(false)
    const [todomsg,settodoMsg]=useState(todo.todo)


    const {updateTodo,deleteTodo,completedTodo}=useTodo()

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todomsg})
        setIsedit(false)

    }
    const completecheck=()=>{
        completedTodo(todo.id)
    }


    return(
        <>
        <div className= {`flex border border-white/10 rounded-lg px-3,py-1.5 gap-x-3 shadow-lg shadow-black text-gray-900 ${todo.completed ? "bg-[#c6e9a7]":"bg-[#ccbed7]"} `}>
        <input type="checkbox"className="cursor-pointer px-3"
        checked={todo.completed}
        onChange={completecheck}
         />
         <input type="text" 
         className={`border outline-none w-full bg-transparent rounded-lg ${isedit ? "border-black/10 px-2 ":"border-transparent"}`}
         value={todomsg}
         onChange={(e)=>settodoMsg(e.target.value)}
         readOnly={!isedit}
         />
         <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center bg-gray-200 hover:bg-gray-700 shrink-0 disabled:opacity-50 p-1"
         onClick={()=>{
            
            if(isedit) editTodo()
                else setIsedit((prev)=>!prev)
         }}
         disabled={todo.completed}
         >
            {isedit ? "Save":"Edit"}


         </button>
         <button className="inline-flex w h-8 rounded-lg text-sm border border-black/10 justify-center bg-gray-200 hover:bg-gray-700 shrink-0 p-1"
         onClick={()=>
           deleteTodo(todo.id)
         }
         
         >
            Delete
            

         </button>
        </div>
        </>
    )
}
export default TodoItem