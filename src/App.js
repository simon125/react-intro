import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { TodoList } from "./pages/TodoList/TodoList";
import { Home } from "./pages/Home/Home";
import { Statistics } from "./pages/Statistics/Statistics";
import { TodoForm } from "./pages/TodoForm/TodoForm";
import { Routes, Route } from "react-router-dom";
import { Counter } from "./pages/Counter/Counter";
import { UserCreator } from "./pages/UserCreator/UserCreator";

import React from "react";

function App() {
  return (
    <div>
      <Navigation />

      {/* 

      /user-creator-1
      /user-creator-2

      */}

      <div style={{ marginTop: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-form" element={<TodoForm />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route
            path="/counter/:testowyParametr/:kolejnyTestowyParametr"
            element={<Counter />}
          />
          <Route
            path="/user-creator/:userCreatorId"
            element={<UserCreator />}
          />
          /user-creator/cześćGrupo15
          <Route
            path="*"
            element={<img src="https://http.cat/404" alt="404" />}
          />
        </Routes>

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo-form" element={<TodoForm />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/counter/:value" element={<Counter />} />
          <Route
            path="*"
            element={<img src="https://http.cat/404" alt="404" />}
          />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;
