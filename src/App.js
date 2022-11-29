import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";

function App() {
  const [todoName, setTodoName] = useState("");
  const [status, setStatus] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleSubmitClick = () => {
    // dodawanie todoName do tabicy
    setTodos([...todos, todoName]);
    setTodoName("");
  };

  const handleDeleteClick = (todoToDelete) => {
    //  tworzymy nową tablicę odfiltrowaną
    // ustawiamy ją jako nowy stan
    const newTodos = todos.filter((todo) => todoToDelete !== todo);
    setTodos(newTodos);
  };

  const handleStatusChange = () => {};

  /**
   * 1) komórka pamięci dla todos - czyli nowy useState z pustą tablicą jako wartosc poczatkowa
   * 2) button z onClickiem - na onCLicku wywołaj funkcje która będzie dodawać todoName do tablicy
   * oraz będzie czyścić todoName tak żeby można było wpisać nowego todosa
   * 3) wyświetl tablice todos używając {todos.map( tutaj zwróć elemnt JSX z treścią todosa )}
   */

  return (
    <div className="App">
      <TodoForm
        todoName={todoName}
        status={status}
        handleChange={handleChange}
        handleStatusChange={handleStatusChange}
        handleSubmitClick={handleSubmitClick}
      />
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
}

export default App;

/**
 * funkcja która usuwa kliknięte todo - usuwa czyli updatuje tablice todos
 *() => {
          // tworzenie nowej tablicy bez wciśniętego elementu
          const newTodos = todos.filter(
            (currentTodo) => todo !== currentTodo
          );
          // // aktualizacja stanu todos czyli ustaiwamy zmienną newTodos jako nową wartośc stanu todos
          setTodos(newTodos);
        }
 * 1) użyj setTodos
 * 2) użyj metody filter    [].filter((el)=> warunek)
 * 3) zapisz nową tablice  patrz pkt 1
 * 4) użyj aktualnie wcisniętego todo - masz do niego dostęp odwołując się
 * do zmiennej todo
 */
// class App1 extends React.Component {
//   state = {
//     todoName: "",
//     todo: [],
//   };

//   handleChange = (event) => {
//     this.setState({});
//   };

//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.handleChange} />
//       </div>
//     );
//   }
// }
