import React, { Component } from "react";

export default class ComponentWithUpdatingState extends Component {
  state = {
    inputValue: "",
    todos: ["qweqwe", "QWEqwe"],
  };
  /**
   * 1) tworzymy inputa którego będziemy obługiwać przy pomcy onChange
   * 2) zapisaywać stan z inputa do statu this.setState
   * 3) będziemy mieć przycik i po kliknięciu będziemy updatować stan
   * 3a) dodawać wpisany tekst w inpucie do tablicy this.state.todos
   * 3b) po przyciśnięciu będziemy usuwali to co mamy w inpucie
   */

  // handleChange(){} // nie używamy tego bo trzeba to bindować - nie potrzebna komplikacja

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleShowCurrentStateClick = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          type="text"
          placeholder="Enter something todo..."
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            const newTodos = [...this.state.todos, this.state.inputValue]; // tworzenie tablicy w dynamiczny sposób
            this.setState({ todos: newTodos, inputValue: "" }); // ustawianie stanu tzn zapisujemy do zmiennej
            // todos nową tablicę newTodos
          }}
        >
          Dodaj todo
        </button>

        <button onClick={this.handleShowCurrentStateClick}>
          Wyświetl aktualny stan komponentu
        </button>

        {this.state.todos.map((todo) => {
          return <p key={todo}>{todo}</p>;
        })}
      </div>
    );
  }
}
