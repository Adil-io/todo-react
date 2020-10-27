import React from 'react';
import './todo.css';

import {MdDelete} from 'react-icons/md'

const Todo = ({todos, deleteTodo}) => {
    // console.log(todos.length);
    
    let todoList = todos.length ? 
    todos.map(todo => {
        let {id, title} = todo
        return(
           
            <div key={id} className="todo-card" >
                <span>
                    <h2>{title}</h2>
                    <MdDelete size="20px" onClick={() => deleteTodo(id)} cursor='pointer' />
                </span>
            </div>
        )   
    }) : <p>No Todo Left</p> 

    return(
        <div className="todo-list">
            { todoList }
        </div>
    )
}

export default Todo;

// Preferably React LifeCycle is used in Class based Component!!