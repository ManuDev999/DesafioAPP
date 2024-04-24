import React, { useState } from "react"

function App() {
const [tasks, setStaks] = useState ([]);
const [newTask, setNewTask] =useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setStaks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) =>{
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setStaks(updatedTasks);


  };
  return (
    <div>
        <h1>Lista de tareas</h1>
        <input type="text" 
          placeholder="Agregar Tarea"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Agregar Tarea</button>
        <ul>
          {tasks.map((task, index) => (
           <li key={index}>
             {task} 
             <button onClick={() => handleDeleteTask(index)}>Eliminar</button>
           </li>
           ))}          
        </ul>
    </div>
  );
}

export default App
