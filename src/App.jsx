import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const handleTaskInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() === '') return; 

    const newTask = {
      id: Date.now(),
      text: taskText,
    };

    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  return (
    <div className="App">
      <h1>Список задач</h1>
      <div className="todo-container">
        <input
          type="text"
          placeholder="Добавить новую задачу"
          value={taskText}
          onChange={handleTaskInputChange}
        />
        <button onClick={handleAddTask}>Добавить</button>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;