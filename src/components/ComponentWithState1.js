/**
 * Kolejnym zadaniem będzie stworzenie nowego komponentu o nazwie ComponentWithState1
 *
 * który również będzie posiadał swój stan (obiekt state)
 * a w nim pola todoName i status
 *
 * wyświetl dane w elemencie HTML <ul></ul> oraz <li></li>
 * dane często wyświetlamy w formie tzw listingów właśnie przy pomocy tych elementów
 *
 * ⭐⭐ dla chętnych spróbuj stworzyć stan w taki sposób żeby nie był to zwykły obiekt
 * todo
 *
 * np. state = {
 *          todo: { twój obiekt }
 *      }
 *
 * tylko żeby była to tablica todosów
 * spróbuj wyświetlić dane które są zapisane w tablicy
 *
 */

import React from "react";

export class ComponentWithState1 extends React.Component {
  state = {
    todo: {
      todoName: "Pouczyć się JSa",
      status: true,
    },
  };

  render() {
    return (
      <ul>
        <li>{this.state.todo.todoName}</li>
        <li>Is it done??: {this.state.todo.status ? "yes" : "no"}</li>
      </ul>
    );
  }
}
