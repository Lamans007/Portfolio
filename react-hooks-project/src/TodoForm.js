import React from 'react';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import useInputState from './hooks/useInputState';
import DoneBtn from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';


function TodoForm({addTodo}){
    const [value, handleChange, reset] = useInputState('');
    return (
        <Paper style={{ margin: '1rem 0', padding: '0 1rem', display: 'flex', whiteSpace: 'nowrap'}} >
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
            <TextField style={{width: '90%'}} value={value} onChange={handleChange} label='Add New Todo' />

            <IconButton aria-label='Save-button' type='submit'>
                <DoneBtn  />
            </IconButton>
            </form>
        </Paper>
    )
}

export default TodoForm;