import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskInput from "../components/TaskInput";
import TaskCard from "../components/TaskCard";
import Footer from "../components/Footer";
import { initialTasks } from "../libs/Todolist";

export default function TodolistPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />

      <div className="d-flex flex-grow-1">
        <Sidebar username="นภัสดล จำปา" type="Student" />

        <main
          className="p-4 flex-grow-1"
          style={{ maxWidth: "720px", margin: "0 auto" }}
        >
          <TaskInput />

          <div className="mt-3">
            {initialTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                isDone={task.isDone}
              />
            ))}
          </div>
        </main>
      </div>

      <Footer year="2026" fullName="นภัสดล จำปา" studentId="680610687" />
    </div>
  );
}
