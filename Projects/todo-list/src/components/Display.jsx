import React from 'react';
import './Display.css';


const Display = ( props ) => {

    return (
        <ul>
            {props.tasks.map((task, index) => (
                <li key={ index } className="taskItem">
                    <input 
                        type="checkbox"
                        checked={ task.isDone }
                        onChange={ () => props.toggleTask(index) }
                    />
                    <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                        {task.name}
                    </span>
                    <button onClick={ () => props.deleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default Display;