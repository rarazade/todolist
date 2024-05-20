import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'

const ToDoForm = ({ handleClick }) => {
    const [todo, setTodo] = useState("")

    return (
        <div >
            <p style={{ textAlign: 'center' }}>~ Today I need to ~</p>
            <div>
                <TextField
                    style={{ width: '23rem' }}
                    label="Task"
                    variant="filled"
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }} />
                <Button
                    style={{ marginLeft: '1rem', marginTop: '0.7em' }}
                    variant="contained"
                    onClick={() => {
                        handleClick(todo)
                        setTodo("")
                    }}
                >Submit</Button>
            </div>
        </div>
    )
}

export default ToDoForm