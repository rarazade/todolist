import React, { useState } from 'react'

import ToDoForm from '../components/ToDoForm'
import ToDoList from '../components/ToDoList'
import { Button } from '@mui/material'

const ToDo = () => {
    const [todos, setTodos] = useState([])

    const handleClick = (todo) => {
        const newTodo = { id: todos.length + 1, task: todo, complete: false }
        setTodos([...todos, newTodo])
        console.log(todos)
    }

    const handleCheckBox = (id) => {
        const newTodos = [...todos]
        const index = newTodos.findIndex(todo => todo.id === id)

        newTodos[index].complete = !newTodos[index].complete
        setTodos(newTodos)
    }

    const removeCompleted = () => {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    const wrapper = {
        width: '30rem',
        margin: 'auto',
        marginTop: '2rem',
        padding: '5rem',
        background: 'white',
        borderRadius: '15px'
    }
    return (
        <div className="ToDoList" style={wrapper}>
            <h2 className='title' style={{ textAlign: 'center' }}>To-Do List</h2>
            <ToDoForm handleClick={handleClick} />
            <ToDoList todo={todos} handleCheckBox={handleCheckBox} />
            {todos.length ?
                <Button variant='outlined' color='error' style={{ width: '30rem' }} onClick={removeCompleted}>
                    Remove Completed
                </Button>

                : <></>}
        </div>
    )
}

export default ToDo