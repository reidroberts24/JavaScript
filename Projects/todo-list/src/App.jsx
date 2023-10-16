import React, { useState, useEffect } from 'react';
import Task from './components/Task';
import Display from './components/Display';
import './App.css'

function App() {
  const initialTasks = JSON.parse(localStorage.getItem('tasks')) || []; //use localStorage to let the data persist through refreshes
  const [tasks, setTasks] = useState(initialTasks);
  
  //implement useEffect hook to set the 'tasks' state when it changes and update the localStorage with the value
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])
  const addNewTask = (task) => {
    setTasks(
      prevTasks => [...prevTasks, {name: task, isDone: false}] // functionalize setTasks parameter to insure latest state is passed in
    );
  }

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks)
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks)
  }

  return (
    <>
      <div>
        <Task addNewTask={ addNewTask } />
        <Display tasks={ tasks } toggleTask={ toggleTask } deleteTask={ deleteTask }/>
      </div>
    </>
  )
}

export default App;
