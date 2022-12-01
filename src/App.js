import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { TodoList } from "./pages/TodoList/TodoList";
import { Home } from "./pages/Home/Home";
import { Statistics } from "./pages/Statistics/Statistics";
import { TodoForm } from "./pages/TodoForm/TodoForm";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleCurrentPageChange = (event) => {
    setCurrentPage(event.target.value);
  };

  return (
    <div>
      <Navigation
        currentPage={currentPage}
        onNavItemChange={handleCurrentPageChange}
      />
      <div style={{ marginTop: 20 }}>
        {currentPage === "home" && <Home />}
        {currentPage === "todoform" && <TodoForm />}
        {currentPage === "todolist" && <TodoList />}
        {currentPage === "statistics" && <Statistics />}
      </div>
    </div>
  );
}

export default App;
