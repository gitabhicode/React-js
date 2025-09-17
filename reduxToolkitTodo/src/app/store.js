import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/Todo/todoSlice';

// har ek application ka ek hi sotre rehta hai

export const store = configureStore({
    reducer: todoReducer
})