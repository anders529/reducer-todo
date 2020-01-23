import React from "react"
import ToDoList from "./components/ToDoList";
import "./App.css"

function App() {
    return (
        <div className="App">
            <h1>Things To Get Done:</h1>
            <ToDoList/>
        </div>
    )
}
export default App;