import { createContext, useContext } from "react";

 export const Todocontext=createContext({
    todos:[
        {
            id:1,
            todo:"todo msg",
            completed:false
        }
    ],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    togglecomplete:(id)=>{}
 })


 export const Todo=()=>{

    return useContext(Todocontext)
 }


 export const Todoprovider=Todocontext.Provider