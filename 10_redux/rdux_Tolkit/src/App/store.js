import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '/featucher/todo/TodoSlice';

export const store= configureStore({
    reducer:todoReducer
})