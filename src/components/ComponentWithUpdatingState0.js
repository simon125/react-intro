import React, { Component } from "react";

export default class ComponentWithUpdatingState extends Component {
  state = {
    name: "Jane",
    age: 30,
    isAdult: true,
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Eevent Listenery - handlowanie eventów
   * na przykładzie onClicka oraz onChange
   */

  handleClick() {}

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Is Adult?: {this.state.isAdult ? "yes" : "no"}</p>

        {/* 
        Bardzo częstą pomyłką jest wywoływanie event handlerów od razu tzn tak jak poniżej

        <button onClick={this.handleClick()}>
          Click me to update state and rerender component
        </button>
      */}

        <button onClick={this.handleClick}>
          Click me to update state and rerender component
        </button>
      </div>
    );
  }
}
