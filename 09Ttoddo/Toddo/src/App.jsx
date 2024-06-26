import { useEffect, useState } from 'react'

import './App.css'
import { Todoprovider } from './context/Todocontext'
import Todosform from './components/Todosform'
import Todositem from './components/Todositem'

function App() {
  const [todos, settodos] = useState([])
 const addtodo=(todo)=>{
  settodos((prev)=>[{id: Date.now(), ...todo},...prev])
 }

 const updatetodo=(id,todo)=>{
  settodos((prev)=>prev.map((prevTodo)=>prevTodo.id === id ? todo : prevTodo))
 }

 const deletetodo=(id)=>{
  settodos((prev)=>prev.filter((todo)=>todo.id !== id))
 }

 const togglecomplete=(id)=>{
  settodos((prev)=>prev.map((todo)=> todo === id ? {...todo, completed: !todo.completed} : todo))
 }
// local storage
 useEffect(()=>{
   const todos= JSON.parse(localStorage.getItem("todos"))

   if(todos && todos.lenght > 0){
    settodos(todos)
   }
 },[])

 useEffect(()=>{

  localStorage.setItem("todos", JSON.stringify(todos))
 },[todos])


  return (
    <Todoprovider value={{todos, addtodo, updatetodo,deletetodo,togglecomplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <Todosform/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=> (
              <div key={todo.id} className='w-full'>
                <Todositem todo={todo}/>

              </div>
            ))}
        </div>
    </div>
</div>
</Todoprovider>
  )
}

export default App
