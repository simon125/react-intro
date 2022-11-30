import React, { useState } from "react";
import { NavigationSolution } from "./components/NavigationSolution";
import { Home } from "./pages/Home/Home";
import { Calculator } from "./pages/Calculator/Calculator";
import { Counter } from "./pages/Counter/Counter";
import { Other } from "./pages/Other/Other";
import { TodoList } from "./pages/TodoList/TodoList";

export const AppSolution = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleOnNavItemChange = (e) => {
    setCurrentPage(e.target.value);
  };
  return (
    <div style={{ padding: 15 }}>
      <NavigationSolution
        currentPage={currentPage}
        onNavItemChange={handleOnNavItemChange}
      />
      <div
        style={{
          marginTop: 20,
        }}
      >
        {currentPage === "home" && <Home />}
        {currentPage === "counter" && <Counter />}
        {currentPage === "todolist" && <TodoList />}
        {currentPage === "calculator" && <Calculator />}
        {currentPage === "other" && <Other />}
      </div>
    </div>
  );
};
