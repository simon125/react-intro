// import React, { Component } from "react";

// export default class ComponentWithUpdatingState0Exercise extends Component {
//   state = {
//     todoName: "",
//     status: false,
//     todos: [
//       { status: false, todoName: "Pouczyć się JSa" },
//       { status: false, todoName: "Pouczyć się CSSa" },
//     ],
//   };

//   handleTodoNameChange = (event) => {
//     this.setState({ todoName: event.target.value });
//   };

//   handleStatusChange = (event) => {
//     console.log(event.target.checked);
//     this.setState({ status: event.target.checked });
//   };

//   handleSubmitClick = () => {
//     const newTodo = {
//       todoName: this.state.todoName,
//       status: this.state.status,
//     };

//     this.setState({
//       todos: [...this.state.todos, newTodo],
//       todoName: "",
//       status: false,
//     });
//   };

//   render() {
//     return (
//       <div>
//         {/*
//             zadanie ewentualnie zadanie bardziej złozone dla chętnych poniżej 🧐

//             Stwórz formularz który będzie mógł zmienić stan tego komponentu
//             do tego celu możesz użyć tagów form, input typu text oraz checkbox
//             wymienione elementy musisz obsłużyć za pomocą metod handlująych oraz eventów

//             np.
//             <input type="checkbox" onChange={this.handleStatusChange} />

//             stan formularza/inputów możesz wyświetlić w konsoli albo na ekranie po submicie
//             (<form onSubmit={this.handleSubmit}></form>) bądź
//             na onClicku po przyciśnieciu przycisku (<button onClick={this.handleClick}>Click me</button>)
//         */}
//         <input
//           type="text"
//           placeholder="Enter some todo..."
//           value={this.state.todoName}
//           onChange={this.handleTodoNameChange}
//         />
//         <input
//           type="checkbox"
//           name=""
//           id=""
//           checked={this.state.status}
//           onChange={this.handleStatusChange}
//         />
//         <button onClick={this.handleSubmitClick}>Submit</button>
//         <button onClick={() => console.log(this.state)}>
//           Pokaz aktualny stan
//         </button>
//         {this.state.todos.map((todo) => {
//           return (
//             <p>
//               Name: {todo.todoName} | Status:{" "}
//               {todo.status ? "Done" : "In progress"}
//             </p>
//           );
//         })}
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export default class ComponentWithUpdatingState0Exercise extends Component {
  state = {
    todoName: "",
    status: false,
    difficulty: "1", // 1-3   1 - łatwe   2 - średnio  3 - trudne
    dueDate: new Date().toLocaleString(),
    todos: [],
  };

  // showDifficulty = () => {
  //   const { difficulty } = this.state;

  //   if (difficulty === "1") {
  //     return "Easy";
  //   }
  //   if (difficulty === "2") {
  //     return "Medium";
  //   }
  //   if (difficulty === "3") {
  //     return "Hard";
  //   }
  // };

  showDifficulty = (difficulty) => {
    const difficultyMap = {
      1: "Easy",
      2: "Medium",
      3: "Hard",
    };

    return difficultyMap[difficulty];
  };

  handleTodoNameChange = (event) => {
    const todoName = event.target.value;
    // this.setState({ todoName: todoName }); === this.setState({ todoName });
    this.setState({ todoName });
  };

  handleStatusChange = (event) => {
    this.setState({ status: event.target.checked });
  };

  handleSubmitClick = () => {
    const { difficulty, dueDate, status, todoName } = this.state; // <===  destrukturyzacja

    const newTodo = {
      todoName,
      status,
      difficulty,
      dueDate,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todoName: "",
      status: false,
      difficulty: "1",
      dueDate: new Date().toLocaleString(),
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

        <div>
          <p>TodoName: {this.state.todoName}</p>
        </div>

        <div>
          <p>Status: {this.state.status ? "Done" : "In progress"}</p>
        </div>

        <div>
          <p>Difficulty: {this.showDifficulty(this.state.difficulty)}</p>
        </div>

        <div>
          <p>Date: {this.state.dueDate}</p>
        </div>

        <button onClick={this.handleSubmitClick}>Submit</button>

        <table>
          <thead>
            <tr>
              <th>Todo Name</th>
              <th>Status</th>
              <th>Dificulty</th>
              <th>Due date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => {
              return (
                <tr key={todo.todoName}>
                  <td>{todo.todoName}</td>
                  <td>
                    <input type="checkbox" checked={todo.status} />
                  </td>
                  <td>{this.showDifficulty(todo.difficulty)}</td>
                  <td>{todo.dueDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
