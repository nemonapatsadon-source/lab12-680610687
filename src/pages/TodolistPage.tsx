import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TaskInput } from "../components/TaskInput";
import { TaskCard } from "../components/TaskCard";
import { Footer } from "../components/Footer";

function App() {
  // ข้อมูลตัวอย่าง
  const sampleTask = {
    id: 1,
    title: "Read a book",
    description: "Vite + React",
    isDone: false,
  };

  return (
    <div className="d-flex">
      <Sidebar username="napatsadon" type="admin" />
      <div className="flex-grow-1">
        <Header />
        <div className="p-4">
          <h2>Todo List</h2>
          <TaskInput />
          <TaskCard task={sampleTask} />
        </div>
        <Footer year={2026} fullName="napatsadon jampa" studentId="680610687" />
      </div>
    </div>
  );
}

export default App;
