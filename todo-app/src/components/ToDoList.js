import React from 'react';
import ToDo from './ToDo.js';

const ToDoList = props => {
    return (
        <div>
            {props.todo.map(item => (
                <ToDo key={item.id} todo={item} dispatch={props.dispatch}/>
                ))}
            <button
                onClick={() => props.dispatch({type:'DELETE_ITEM', payload: props.finished})}>
                Delete Finished Items
            </button>
        </div>
    )
}