import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { TodoList } from "./pages/TodoList/TodoList";
import { Home } from "./pages/Home/Home";
import { Statistics } from "./pages/Statistics/Statistics";
import { TodoForm } from "./pages/TodoForm/TodoForm";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./pages/Counter/Counter";

function App() {
  return (
    <div>
      <Navigation />

      <div style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-form" element={<TodoForm />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/counter/:value" element={<Counter />} />
          <Route
            path="*"
            element={<img src="https://http.cat/404" alt="404" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
