import React, { useState } from 'react';
import './Task.css';

const Task = ( {addNewTask} ) => {
    const [task, setTask] = useState("");
    const [taskError, setTaskError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const handleAddTask = (e) => {
        if (e.target.value.length === 0) {
            setTaskError("Cannot add a blank task!")
        } else {
            setTask(e.target.value)
            setTaskError("");
        }
    }

    const createTask = (e) => {
        e.preventDefault();
        if(task && !taskError) {
            addNewTask(task);
            setTask("")
        }
        setHasBeenSubmitted(true)
    }


    return (
        <form onSubmit= { createTask }>
            <div>
                <label>Enter a task: </label>
                <input 
                    type="text"
                    value = { task }
                    onChange = {  handleAddTask } 
                />
                {
                taskError ?
                <p>{ taskError }</p> :
                ""
                }
                <button type="submit">Add</button>
            </div>
        </form>
    )
}


export default Task;