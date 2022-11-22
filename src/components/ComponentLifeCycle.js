import React, { Component } from "react";

export default class ComponentLifeCycle extends Component {
  state = {
    counter: 1,
  };

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate(temp, temp1) {
    console.log(temp, temp1);
  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          increase
        </button>
      </div>
    );
  }
}
