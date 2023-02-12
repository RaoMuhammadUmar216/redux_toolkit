import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            _id: Math.random(new Date()),
            title: "Some Coding",
            desc: "I learnt Redux Toolkit Which is amazing."
        },
        {
            _id: Math.random(new Date().getSeconds()),
            title: "Some Coding here",
            desc: "I learnt Redux  Which is amazing."
        },
        {
            _id: Math.random(new Date().getHours()),
            title: "Some Coding too",
            desc: "I learnt TailwindCSS Which is amazing."
        },
    ]
}

const todoSlice = createSlice({

    name: "Todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // initialState.push(action.payload)
            return { ...state, todos: [...state.todos, action.payload] }
        },
        deleteTodo: (state, action) => {
            return { ...state, todos: state.todos.filter(todo => todo._id !== action.payload) }
        }
    }

});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
