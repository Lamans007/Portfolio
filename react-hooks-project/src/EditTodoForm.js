import React from 'react';
import UseInputState from './hooks/useInputState'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import RaisePriorityBtn from '@material-ui/icons/ArrowUpward';
import LowerPriorityBtn from '@material-ui/icons/ArrowDownward';
import Box from '@material-ui/core/Box';
import DoneBtn from '@material-ui/icons/Done';
import useVoteState from './hooks/useVoteState';


function EditTodoForm({id, editTodo, task, toggle, changePriority}){
    const [ value, handleChange, reset] = UseInputState(task)
    const [val, handleIncPriority, handleDecPriority] = useVoteState(0)


    const styles = {
        mainForm: {
            display: 'flex',
            marginLeft: '1rem', 
            whiteSpace: 'nowrap', 
            width: '100%',
            alignItems: 'inherit',
            justifyContent: 'inherit',
        
        },
        box: {
             component:"span",
             display:'inline',
             marginLeft: '1rem',
             marginRight: 'auto',


            
        },
        priorityBox : {
            display: "inline",
            backgroundColor: 'red',
            marginLeft: '1rem',
            padding: '0.3rem',
            borderRadius: '50%',
            color: '#fff',


            
        },
        textField: {
            margin:'normal', 
            
        },
        buttonBox: {
            component:"span",
             display:'inline'

    }
}
    return (
        
        <form onSubmit={ (e) => {
            e.preventDefault();
            editTodo(id, value);
            changePriority(id, val);
            reset();
            toggle();
        }} 
        style={styles.mainForm}>

        <TextField value={value} onChange={handleChange} fullWidth autoFocus/>
        <Box style={styles.box}>Change Priority Rank By: 
        <Box style={styles.priorityBox}>{val}</Box>
        </Box>
        <Box style={styles.buttonBox}>
        <IconButton aria-label='Raise-priority' onClick={handleIncPriority}>
            <RaisePriorityBtn/>
        </IconButton>

        <IconButton aria-label='Raise-priority' onClick={handleDecPriority}>
            <LowerPriorityBtn/>
        </IconButton>
        <IconButton aria-label='Done-editing' type='submit'>
            <DoneBtn/>
        </IconButton>
        </Box>

        
        </form>

        
    )
}

export default EditTodoForm;