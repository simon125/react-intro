import React, { useState } from "react";
import { EditTodoModal } from "./components/EditTodoModal";
import { TodoItem } from "./components/TodoItem";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { todoName: "test", status: "done", id: Math.random() },
    { todoName: "test", status: "done", id: Math.random() },
    { todoName: "test", status: "done", id: Math.random() },
  ]);

  const [openModal, setOpenModal] = useState(false);

  const handleDeleteClick = (todoToDelete) => {
    //  tworzymy nową tablicę odfiltrowaną
    // ustawiamy ją jako nowy stan
    const newTodos = todos.filter((todo) => todoToDelete !== todo);
    setTodos(newTodos);
  };

  const handleEditClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                todoName={todo.todoName}
                status={todo.status}
                onDeleteClick={() =>
                  console.log(`Todo które chcę edytować: ${todo}`)
                }
                onEditClick={handleEditClick}
                funkcjaUsuwajacaPrzekazanaWPropsach={() =>
                  handleDeleteClick(todo)
                }
              />
            );
          })}
        </tbody>
      </table>
      {openModal && <EditTodoModal onCancelClick={() => setOpenModal(false)} />}
    </div>
  );
};
