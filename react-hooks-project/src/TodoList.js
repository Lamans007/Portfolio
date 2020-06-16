import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';
import UseLocalStorageState from './hooks/UseLocalStorageState';


function TodoList({ todos, removeTodo, toggleTodo, editTodo, changePriority }){
    let prioritySum = 0
        
    for (let p in todos){
        prioritySum += todos[p].priority
    }

    const [todo, setTodos] = UseLocalStorageState('todos', todos);


    useEffect(() => {
        const sortedTodos = todos.sort(function (a, b) { return (a.priority - b.priority)}).reverse();
        setTodos(sortedTodos)
      },[prioritySum]);


    if(todos.length)
    return(
        <Paper>
            <List>
            {todos.map((todo, i)=> (
                <>
                <Todo 
                changePriority={changePriority}
                task={todo.task} 
                id={todo.id} 
                key={todo.id} 
                priority={todo.priority}
                completed={todo.completed} 
                removeTodo={removeTodo} 
                toggleTodo={toggleTodo} 
                editTodo={editTodo} />
                {i < todos.length -1 && <Divider/>}
                
                </>
            ))}
            </List>
        </Paper>
    )
    return null;
}

export default TodoList;