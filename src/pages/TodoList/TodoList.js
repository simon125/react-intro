import React, { useEffect, useState } from "react";
import { EditTodoModal } from "./components/EditTodoModal";
import { TodoItem } from "./components/TodoItem";
import { Bars } from "react-loader-spinner";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [filterBy, setFilterBy] = useState("");

  // ten useEffect wykonuje się tylko raz przy zamontowaniu komponentu
  // ponieważ ma pustą tablice z zależnościami (2 paremetr w useEffect)
  // useEffect(() => {
  //   console.log("Montuje komponent todolist");

  //   setIsLoading(true);

  // fetch(`http://localhost:4000/todos`)
  //   .then((response) => response.json())
  //   .then((data) => setTodos(data))
  //   .finally(() => setIsLoading(false));

  //   return () => {
  //     console.log("Odmontowywuje component todoList");
  //   };
  // }, []);

  /**
   * http://localhost:4000/todos?status=done
   * http://localhost:4000/todos?status=in-progress
   * http://localhost:4000/todos?status=todo
   */

  // useEffect(() => {
  //   console.log(
  //     `Wywołuje się ponieważ zmieniła się wartość filtra aktualna wartość to ${
  //       filterBy || "all"
  //     }`
  //   );
  // }, [filterBy]);
  // tablica zależności - w zależności od tego co jest w tej tablicy - jeżeli wartość któregoś elementu
  // się zmieni spowoduje to wywołanie funkcji z pierwszego parametru useEffect
  useEffect(() => {
    console.log(
      `Wywołuje się ponieważ zmieniła się wartość filtra aktualna wartość to ${
        filterBy || "all"
      }`
    );
    const url =
      filterBy === ""
        ? "http://localhost:4000/todos"
        : `http://localhost:4000/todos?status=${filterBy}`;

    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .finally(() => setIsLoading(false));
  }, [filterBy]);

  const handleDeleteClick = (todoToDelete) => {
    //  tworzymy nową tablicę odfiltrowaną
    // ustawiamy ją jako nowy stan
    const newTodos = todos.filter((todo) => todoToDelete !== todo);
    setTodos(newTodos);
  };

  const handleEditClick = () => {
    setOpenModal(true);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  return (
    <div className="App">
      <h1>Todo list</h1>
      <h2 style={{ textAlign: "center" }}>Filters:</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 50,
          marginBottom: 50,
        }}
      >
        <label>
          All{" "}
          <input
            checked={filterBy === ""}
            type="radio"
            name="filters"
            value=""
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Todo{" "}
          <input
            checked={filterBy === "todo"}
            type="radio"
            name="filters"
            value="todo"
            onChange={handleFilterChange}
          />
        </label>
        <label>
          In progress{" "}
          <input
            checked={filterBy === "in-progress"}
            type="radio"
            name="filters"
            value="in-progress"
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Done{" "}
          <input
            checked={filterBy === "done"}
            type="radio"
            name="filters"
            value="done"
            onChange={handleFilterChange}
          />
        </label>
      </div>
      {isLoading ? (
        <Bars
          height="80"
          width="80"
          color="#4FA94D"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Edit</th>
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
      )}
      {openModal && <EditTodoModal onCancelClick={() => setOpenModal(false)} />}
    </div>
  );
};
