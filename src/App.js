import "./App.css";
import { Statistics } from "./Todolist/Statistics";
import { TodoForm } from "./Todolist/TodoForm";
import { TodoList } from "./Todolist/TodoList";

function App() {
  const todos = [
    { todoName: "Poczuyć się JSa", status: true },
    { todoName: "Poczuyć się CSSa", status: false },
    { todoName: "Poczuyć się HTMLa", status: false },
    { todoName: "Poczuyć się Reacta", status: false },
  ];

  return (
    <div className="App">
      <TodoForm />
      <Statistics todoList={todos} />
      <TodoList todoList={todos} test="hej grupo" />
    </div>
  );
}

export default App;
