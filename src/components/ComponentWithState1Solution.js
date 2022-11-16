import React, { Component } from "react";

/**
 * Kolejnym zadaniem będzie stworzenie nowego komponentu o nazwie ComponentWithState1
 *
 * który również będzie posiadał swój stan (obiekt state)
 * a w nim pola todoName i status
 *
 *
 */

export default class ComponentWithState1Solution extends Component {
  state = {
    todoName: "pouczyć się JSa",
    status: false,
  };

  render() {
    return (
      <ul>
        <li>Name: {this.state.todoName}</li>
        <li>Status: {this.state.status ? "Done" : "Todo"}</li>
      </ul>
    );
  }
}
