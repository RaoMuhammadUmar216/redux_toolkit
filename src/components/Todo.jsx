import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo } from '../features/todo/todoSlice';
import '../index.css';

const Todo = () => {


    const [inputs, setInputs] = useState({
        title: "",
        desc: ""
    });

    const { todos } = useSelector(state => state);
    // console.log(todos.todos.map(todo => todo))

    const dispatch = useDispatch();


    const handleInputs = (e) => {

        const { value, name } = e.target;
        // console.log(value, name);

        setInputs({ ...inputs, [name]: value })

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const todoObj = {
            _id: Math.floor(new Date() * 100),
            title: inputs.title,
            desc: inputs.desc
        }
        // console.log(todoObj);

        dispatch(addTodo(todoObj));
        inputs.title = "";
        inputs.desc = "";

    };


    return (

        <div className='p-5'>
            <form action="" onSubmit={handleSubmit}>
                <div className='flex flex-col mb-4'>
                    <input className='border border-gray-400 rounded-md max-w-[18rem] py-1 px-3 mb-4' placeholder='Enter Some Title Here...' type="text" onChange={handleInputs} value={inputs.title} name='title' />
                    <input className='border border-gray-400 rounded-md max-w-[18rem] py-1 px-3' placeholder='Enter Some Description Here...' type="text" onChange={handleInputs} value={inputs.desc} name='desc' />
                </div>
                <div>
                    <button className='border rounded-md bg-gray-500 py-2 px-5'>Save</button>
                </div>
            </form>
            <br />
            <div>
                {
                    todos.todos.map(todo =>
                        <div key={todo._id} className='grid grid-cols-2 p-2'>
                            <div >
                                <div className='font-bold text-lg'>{todo.title}</div>
                                <div>{todo.desc}</div>
                            </div>
                            <button onClick={() => {
                                dispatch(deleteTodo(todo._id));
                            }} className='w-20 border rounded-md bg-green-300 font-semibold'>Delete</button>
                        </div>
                    )
                }
            </div>
        </div>



    );
}

export default Todo;