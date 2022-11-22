import React, { useState } from 'react';

const TodoApp = () => {

    const [ title, setTitle ] = useState('Carlos');
    const [ todos, setTodos ] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setTitle(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false
        }

        const temp = [...todos];
        temp.unshift(newTodo);
        setTodos(temp);
    }

    return (
        <div className='todoContainer'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    placeholder='Ingrese algo'
                    className='todoInput'
                    onChange={handleChange}
                />
                <input 
                    type='submit'
                    value='Create todo'
                    className='buttonCreate'
                    onClick={handleSubmit}
                />
                { title }
            </form>
            <div className='todosContainer'>
                {
                    todos.map(item => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoApp