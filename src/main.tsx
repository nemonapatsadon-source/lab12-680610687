import React from "react";
import ReactDOM from "react-dom/client";
import TodolistPage from "./pages/TodolistPage";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodolistPage />
  </React.StrictMode>,
);
