import React, { Component } from "react";

export default class ComponentWithUpdatingState1 extends Component {
  state = {
    numbers: [],
    users: [
      { id: "h2d83d", name: "Jane", age: 20 },
      { id: "diu23s", name: "John", age: 24 },
      { id: "wer3r1", name: "Joe", age: 32 },
    ],
    tasks: [
      { id: "h123das", title: "Fix the car", age: 20 },
      { id: "sdfu23s", title: "Learn JS", age: 24 },
      { id: "4fwe3r1", title: "Read a book", age: 32 },
    ],
  };

  handleClick = () => {
    const newNumbers = [...this.state.numbers, this.state.numbers.length + 1];
    this.setState({ numbers: newNumbers });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.numbers.map((number) => {
            return <li key={number}>{number}</li>;
          })}
        </ul>

        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} | {user.age}
              </li>
            );
          })}
        </ul>

        <button onClick={this.handleClick}>
          Click me to update state and rerender component
        </button>
      </div>
    );
  }
}
