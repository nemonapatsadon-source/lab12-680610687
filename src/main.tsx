import React from "react";
import ReactDOM from "react-dom/client";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodolistPage from "./pages/TodolistPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="d-flex">
      {" "}
      <Sidebar username="napatsadon" type="admin" />
      <div className="flex-grow-1">
        <Header />
        <TodolistPage />
        <Footer year="2026" fullName="นภัสดล จำปา" studentId="680610687" />
      </div>
    </div>
  </React.StrictMode>,
);
