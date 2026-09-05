import { useState } from "react";
import TaskCard from "../components/TaskCard";
import TaskInput from "../components/TaskInput";

interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

export default function TodolistPage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string, description: string) => {
    const newTask = { id: Date.now(), title, description, done: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  return (
    <div className="container mt-4">
      <h2>My To-Do List</h2>
      <TaskInput onAdd={addTask} />

      <div className="mt-3">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            done={task.done}
            onDelete={() => deleteTask(task.id)}
            onDone={() => toggleDone(task.id)}
          />
        ))}
      </div>
    </div>
  );
}
