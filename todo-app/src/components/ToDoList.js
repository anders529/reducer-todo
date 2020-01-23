import React, {useState, useReducer} from "react";
import ToDo from "./ToDo";
import {initialState, ListItem} from "../reducers/reducerThingy";
const ToDoList = () => {
const  [newItem, setNewItem] = useState("");
const [state, render] = useReducer(ListItem, initialState);
    const handleDeletion = event =>{
        event.preventDefault();
        render({type: 'DELETE'})
    };
    const handleSubmit = event =>{
        event.preventDefault();
        render({type: 'ADD-ITEM', payload: newItem});
        setNewItem("")
    };
    const handleFinished = (id) => {render({ type: 'FINISHED', payload: id})};
    const handleChanges = event =>{
        event.preventDefault();
        setNewItem(event.target.value)
    };
    return(
        <div>
            <ToDo state={state} render={handleFinished} />
            <form>
                <input
                    type="text"
                    value={newItem}
                    name="item"
                    onChange={handleChanges}
                />
                <br/>
                <button onClick={handleSubmit}>Add Item</button>
                <br/>
                <button onClick={handleDeletion}>Delete Finished Items</button>
            </form>
        </div>
    )};
export default ToDoList;