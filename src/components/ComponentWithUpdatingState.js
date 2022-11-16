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

  handleClick() {
    console.log(this);
    this.setState({ name: "Julia" });
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Is Adult?: {this.state.isAdult ? "yes" : "no"}</p>

        <button onClick={this.handleClick}>
          Click me to update state and rerender component
        </button>
      </div>
    );
  }
}
