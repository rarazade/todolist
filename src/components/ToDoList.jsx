import React from 'react'
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const ToDoList = ({ todo, handleCheckBox }) => {
    return (
        <div>
            <List>
                {todo.map((todo, index) => {
                    return (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Checkbox onChange={() => {
                                        handleCheckBox(index + 1)
                                    }} disableRipple />
                                </ListItemIcon>
                                <ListItemText primary={todo.task} className={todo.complete ? "completed" : ""} />
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export default ToDoList