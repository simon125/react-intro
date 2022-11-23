import React, { Component } from "react";

export default class ComponentWithUpdatingState extends Component {
  state = {
    wartoscZInputa: "",
    todos: [],
  };
  /**
   * 1) tworzymy inputa którego będziemy obługiwać przy pomcy onChange
   * 2) zapisaywać stan z inputa do statu this.setState
   * 3) będziemy mieć przycik i po kliknięciu będziemy updatować stan
   * 3a) dodawać wpisany tekst w inpucie do tablicy this.state.todos
   * 3b) po przyciśnięciu będziemy usuwali to co mamy w inpucie
   */

  render() {
    return <div></div>;
  }
}
