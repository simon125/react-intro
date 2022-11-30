import React, { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleSubmitClick = (todoName) => {
    // dodawanie todoName do tabicy
    setTodos([...todos, todoName]);
  };

  const handleDeleteClick = (todoToDelete) => {
    //  tworzymy nową tablicę odfiltrowaną
    // ustawiamy ją jako nowy stan
    const newTodos = todos.filter((todo) => todoToDelete !== todo);
    setTodos(newTodos);
  };
  /**
   * 1) komórka pamięci dla todos - czyli nowy useState z pustą tablicą jako wartosc poczatkowa
   * 2) button z onClickiem - na onCLicku wywołaj funkcje która będzie dodawać todoName do tablicy
   * oraz będzie czyścić todoName tak żeby można było wpisać nowego todosa
   * 3) wyświetl tablice todos używając {todos.map( tutaj zwróć elemnt JSX z treścią todosa )}
   */

  return (
    <div className="App">
      <TodoForm handleSubmitClick={handleSubmitClick} />

      <ul>
        {todos.map((todo123) => {
          return (
            <TodoItem
              key={todo123}
              todo={todo123}
              onDeleteClick={() =>
                console.log(`Todo które chcę edytować: ${todo123}`)
              }
              funkcjaUsuwajacaPrzekazanaWPropsach={() =>
                handleDeleteClick(todo123)
              }
            />
          );
        })}
      </ul>
    </div>
  );
};
