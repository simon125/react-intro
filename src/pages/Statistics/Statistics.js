import React, { useEffect, useState } from "react";
import { Bar } from "./components/Bar";
import { Doughnut } from "./components/Doughnut";

export const Statistics = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: 50, justifyContent: "center" }}>
        <label>
          <input type="checkbox" /> Show data in Doughnut
        </label>
        <label>
          <input type="checkbox" /> Show data in Bar
        </label>
      </div>
      <Doughnut todos={todos} />
      <Bar />
    </div>
  );
};
