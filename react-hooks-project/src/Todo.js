import React, { useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import EditTodoForm from './EditTodoForm';
import UseToggleState from './hooks/UseToggleState';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Box from '@material-ui/core/Box';



function Todo({task, priority, completed, removeTodo, id, toggleTodo, editTodo, changePriority}) {
    const [isEditing, toggle] = UseToggleState(false);



    return (                 
    <ListItem style={{height: '64px'}} >
        {isEditing ? (<EditTodoForm toggle={toggle} editTodo={editTodo} task={task} id={id} priority={priority} changePriority={changePriority} />) : (
        <>
        <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)} />
        <ListItemText style={{textDecoration: completed ? 'line-through' : 'none',
            marginLeft: '1rem', color: completed ? 'grey' : 'black', fontStyle: completed ? 'italic' :'normal' }}>
        <Box display='inline' marginRight='1rem' color='red'> Priority Rank: {priority} </Box> {task}

        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => removeTodo(id)} >
                <DeleteIcon/>
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggle}>
                <EditIcon/>
            </IconButton>
        </ListItemSecondaryAction>
        </>
        )} 
    </ListItem>
    )
}

export default Todo;