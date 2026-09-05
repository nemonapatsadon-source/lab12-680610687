import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskInput from "../components/TaskInput";
import TaskCard from "../components/TaskCard";
import Footer from "../components/Footer";

export default function TodolistPage() {
  const [tasks, setTasks] = useState<
    { id: number; title: string; description: string }[]
  >([]);

  const addTask = (title: string, description: string) => {
    const newTask = { id: Date.now(), title, description };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar username="นัสสดล จำปา" type="Student" />
        <main
          className="p-4 flex-grow-1"
          style={{ maxWidth: "720px", margin: "0 auto" }}
        >
          <TaskInput onAdd={addTask} />
          <div className="mt-3">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                {...task}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
          </div>
        </main>
      </div>
      <Footer year="2026" fullName="นัสสดล จำปา" studentId="680610687" />
    </div>
  );
}
