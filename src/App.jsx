import { useEffect, useState } from "react"
import AddTask from "./Components/AddTask"
import Tasks from "./Components/Tasks"
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));    
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks() {
      // const fetchTasks = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=6", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setTasks(data);

    };
    // SE QUISER VOCÊ PODE CHAMAR UMA API PARA BUSCAR AS TAREFAS
    //fetchTasks();
  }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(newTask) {
    const newTasks = [...tasks, { ...newTask, id: v4() }];
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} /> 
      </div>
    </div>
  )
}

export default App