import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {  // it defines the initial state whetether the caert is empty or carry some thing 
    todos: [{id: 1, text: "Hello world"}]
}

export  const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {  // but yha pe declare bhi krna hai and uskki defintiion bhi likhni hai 
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
           state.todos = state.todos.filter((todo) => todo.id !=action.payload)
        },  // state give the current state of the exixiting state
    }
})

export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer