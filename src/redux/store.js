import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

// as we export counterSlice as default from counterSlice.js as well as todoSlice from todoSlice.js so we can import it as any meaningfull name here like below.
import counter from '../features/counter/counterSlice';
import todos from '../features/todo/todoSlice';




const reducer = combineReducers({
    counter,
    todos
})

// becausee it is not default export so we have to import it anywhere with the same export name.
// In default export case it can be imported as any name from here to other component.
export const store = configureStore({ reducer });