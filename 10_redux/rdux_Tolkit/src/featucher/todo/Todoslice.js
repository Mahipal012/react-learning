import { createSlice,nanoid } from "@reduxjs/toolkit";

const initiaState={
    todos:[{id:1, text:"hello"}]
}

const TodoSlice=createSlice({
    name:'todo',
    initiaState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo}= TodoSlice.actions

export default TodoSlice.reducer