import React from "react";
import { TodoListItem } from "./TodoListItem";
import "./TodoList.css";

export const TodoList = (props) => {
  const { todoList } = props;

  return (
    <div className="todoList">
      <p>TodoList.js </p>
      <div className="todoListItems">
        {todoList.map((todo) => {
          return <TodoListItem cokolwiek={todo} key={todo.todoName} />;
        })}
      </div>
    </div>
  );
};
