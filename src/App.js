import { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation";
import { ConditionalDisplaying } from "./pages/ConditionalDisplaying/ConditionalDisplaying";
import { Counter } from "./pages/Counter/Counter";
import { TodoList } from "./pages/TodoList/TodoList";

function App() {
  const [currentPage, setCurrentPage] = useState("counter");

  const handleCurrentPageChange = (event) => {
    setCurrentPage(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:4000/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  const handleAddNewPost = () => {
    fetch("http://localhost:4000/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: "asdfasdf",
        title: "Super post",
        author: "John Doe",
      }),
    });
  };

  console.log("APP RENDERUJE SIĘ");
  return (
    <div>
      <button onClick={handleAddNewPost}>dodaj post</button>
      <Navigation
        currentPage={currentPage}
        onNavItemChange={handleCurrentPageChange}
      />
      <div style={{ marginTop: 20 }}>
        {currentPage === "todolist" && <TodoList />}
        {currentPage === "counter" && <Counter />}
        {currentPage === "conditionaldisplaying" && <ConditionalDisplaying />}
      </div>
    </div>
  );
}

export default App;
