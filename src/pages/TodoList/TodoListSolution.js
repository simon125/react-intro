import React, { useEffect, useState } from "react";
import { EditTodoModal } from "./components/EditTodoModal";
import { TodoItem } from "./components/TodoItem";
import { Bars } from "react-loader-spinner";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [filterBy, setFilterBy] = useState("");
  const [refetchAfterDelete, setRefetchAfterDelete] = useState(false);

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
  }, [filterBy, refetchAfterDelete]);

  const handleDeleteClick = (idOfTodoToDelete) => {
    /**
     * Zadanie:
     * zaimplementuj ciało funkcji handleDeleteClick w taki sposób żeby usunąć todo
     * funckja handleDeleteClick wywołuje się za kazdym razem gdy user kliknie przycisk delete
     * dla testu dodaj console.log('delete')
     * i sprawdz efekt wciskając przycisk delete an stronie todolist - możliwe że będziesz musiał/a odświeżyć strone
     *
     * do usunięcia wybranego todosa możemy wykorzystać fetcha który zrobi request pod odpowiedni endpoint
     * UWAGA
     * Żeby usunąć todo należy wykonać request http pod następujący endpoint
     * http://localhost:4000/todos/<TUTUAJ_ID_TODOSA_KTÓRE_CHCESZ_USUNĄĆ>
     *
     * np http://localhost:4000/todos/4t5y72
     * id-kiem jest ten dziwny unikatowy ciąg znaków 4t5y72
     *
     * id o którym mowa wyżej jest dostępne w parametrze - idOfTodoToDelete
     * sprawdż równierz gdzie jest użyty handleDeleteClick i upewnij się że jest przekazany id todoska
     *
     * dodaj ten parametr w template stringu do ednpointu /todos
     *
     * usuwanie musi się odbywać za pomocą metody typu DELETE
     * w tym celu dodaj drugi parametr konfiguracyjny do funkcji fetch
     * obiekt ten powinien posiadać klucz method z odpowiednią wartością DELETE
     *
     * np.
     *
     * fetch(endpoint,{
     *  method: 'POST' // miejsce na określenie metody
     * })
     *
     * żeby sprawdzić czy rekord rzeczywiście się usuną odśwież stronę chwile po kliknięciu przycisku delete
     *
     * żeby poprawić user expirence aplikacji i przerenderować aplikację z nowymi danymi możemy
     * wykorzystać fakt że w useEffect robimy request po najświeższe dane
     * dodajmy stan do naszej aplikacji typu boolean który za każdym razem będziemy togglować (zmieniać na wartość przeciwną, np z true na false, a z false na true)
     * np const [refetchAfterDelete, setRefetchAfterDelete] = useState(false);
     *
     * setRefetchAfterDelete(!refetchAfterDelete);
     *
     * taką funkcje setującą która będzie przełączać z true na false i na odwrót umieśćmy
     * w pierwyszym thenie po fetchu który usuwa todo
     * dzięki temu będziemy wiedzieć że rekord się usuną a my możemy uruchomić jeszcze raz useEffect który pobierze nowe dane
     * i wyświetli na ekranie
     *
     * ALE żeby to jeszcze wszystko zadziałało, musimy dodać zmienną refetchAfterDelete do tablicy z zależnościami w useEffecie
     *
     * przypominam
     *
     * useEffect(()=>{
     *  console.log('Wywołam się na początku oraz wtedy gdy któraś ze zmiennych w tablicy zmieni swoją wartość');
     * },[zmienna1, zmienna2, zmienna3])
     *
     */
    fetch(`http://localhost:4000/todos/${idOfTodoToDelete}`, {
      method: "DELETE",
    }).then(() => {
      setRefetchAfterDelete(!refetchAfterDelete);
    });
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
                  onDeleteClick={() => handleDeleteClick(todo.id)}
                  onEditClick={handleEditClick}
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
