import React, { Component } from "react";

import CryingCat from "../assets/cryingcat.jpg";
import SmilingCat from "../assets/smilingcat.jpg";

export default class ComponentWithUpdatingState0Exercise extends Component {
  state = {
    todoName: "",
    status: false,
    difficulty: "1", // 1-3   1 - łatwe   2 - średnio  3 - trudne
    dueDate: new Date().toLocaleString(),
    priority: 0,
    todos: [],
  };

  showDifficulty = (difficulty) => {
    const difficultyMap = {
      1: <h3>Easy</h3>,
      2: <h2>Medium</h2>,
      3: <h1>Hard</h1>,
    };

    return difficultyMap[difficulty];
  };

  handleTodoNameChange = (event) => {
    const todoName = event.target.value;
    this.setState({ todoName });
  };

  handleStatusChange = (event) => {
    this.setState({ status: event.target.checked });
  };

  handlePriorityChange = (event) => {
    this.setState({ priority: event.target.value });
  };

  handleSubmitClick = () => {
    const { difficulty, dueDate, status, todoName, priority } = this.state; // <===  destrukturyzacja

    const newTodo = {
      todoName,
      status,
      difficulty,
      dueDate,
      priority,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todoName: "",
      status: false,
      difficulty: "1",
      dueDate: new Date().toLocaleString(),
      priority: 0,
    });

    // const newTodo = {
    //   todoName: todoName,
    //   status: status,
    //   difficulty: difficulty,
    //   dueDate: dueDate
    // }

    // const newTodo = {
    //   todoName: this.state.todoName,
    //   status: this.state.status,
    //   difficulty: this.state.difficulty,
    //   dueDate: this.state.dueDate
    // }
  };

  render() {
    return (
      <div>
        {/*
            zadanie bardziej złożone

            Stwórz formularz który będzie mógł zmienić stan tego komponentu
            do tego celu możesz użyć tagów form, input (różnego typu np. text, checkbox, date ), selct + options
            wymienione elementy musisz obsłużyć za pomocą metod handlująych oraz eventów

            np.
            <input onChange={this.handleTodoNameChange} />

            <select onChange={this.handleDifficultyChange}> </select>

            stan formularza/inputów możesz wyświetlić w konsoli po submicie bądź
            na onClicku po przyciśnieciu przycisku

            ⭐
            dodaj walidacje pól wyświetl komunikat np przy pomocy funkcji alert()
            jeżeli user zostawi puste pole todoName
        */}

        <input
          type="text"
          value={this.state.todoName}
          onChange={this.handleTodoNameChange}
        />

        <input
          type="checkbox"
          checked={this.state.status}
          onChange={this.handleStatusChange}
        />

        <input
          type="range"
          min={0}
          max={10}
          value={this.state.priority}
          onChange={this.handlePriorityChange}
        />

        {/*

1) tworzymy stan dla pola priority
2) piszemy metode handlującą zmianę inputu change zapisujemy wartosć do stanu this.setState
3) dodajemy wartość przy tworzeniu nowego todo - patrz handleSubmitClick
4) wyśweitlanie ogarniemy razem ewentualnie dla chętnych dodaj nową komórke w tabelce

*/}
        <input
          type="date"
          value={this.state.dueDate}
          /* przeanalizuj w konsoli co zawiera obiekt e.target */
          onChange={(e) => this.setState({ dueDate: e.target.value })}
        />

        <select onChange={(e) => this.setState({ difficulty: e.target.value })}>
          <option value={1}>Easy</option>
          <option value={2}>Medium</option>
          <option value={3}>Hard</option>
        </select>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: 20,
          }}
        >
          <div>
            <p>
              <b>TodoName:</b> {this.state.todoName}
            </p>
          </div>

          <div>
            <p>
              <b>Status:</b> {this.state.status ? "Done" : "In progress"}
            </p>
          </div>

          <div>
            <p>
              <b>Difficulty:</b> {this.showDifficulty(this.state.difficulty)}
            </p>
          </div>

          <div>
            <p>
              <b>Date:</b> {this.state.dueDate}
            </p>
          </div>

          <div>
            <p>
              <b>Priority:</b> {this.state.priority}
            </p>
          </div>
        </div>

        <button onClick={this.handleSubmitClick}>Submit</button>

        <table>
          <thead>
            <tr>
              <th>Todo Name</th>
              <th>Status</th>
              <th>Dificulty</th>
              <th>Due date</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => {
              return (
                <tr key={todo.todoName}>
                  <td>{todo.todoName}</td>
                  <td>
                    <img
                      width={100}
                      height={100}
                      src={todo.status ? SmilingCat : CryingCat}
                      alt="cat"
                    />
                  </td>
                  <td>{this.showDifficulty(todo.difficulty)}</td>
                  <td>{todo.dueDate}</td>
                  <td>{todo.priority}/10</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
