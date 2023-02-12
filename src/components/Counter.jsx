import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

import '../index.css';

const Counter = () => {

  // const state = useSelector(state => state) // here state is an Object.
  // console.log(state);

  const { counter } = useSelector(state => state); // can also be destructure above state.
  // console.log(counter)

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment())
  };

  const handleDecrement = () => {
    dispatch(decrement());
  }

  return (
    <div>
      <button className='bg-gray-400 rounded-lg border py-1 px-6 my-6' onClick={handleIncrement}>+</button>
      <span>{counter}</span>
      <button className='bg-gray-400 rounded-lg border py-1 px-6 my-6' onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter