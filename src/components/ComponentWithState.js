import React, { Component } from "react";

export default class ComponentWithState extends Component {
  /**
   * Jako ćwiczenie dodaj nowe pole do obiektu stanu (state) o nazwie
   * lastName, następnie użyj tego pola i wyświetl je obok pola name
   * 💡 hint: użyj template stringów
   *
   * ⭐ stwórz dodatkowe pole w obiekcie state o nazwie "details"
   * obiekt ten będzie zawierać dane takie jak height (wzrost) oraz weight (waga)
   * wyświetl dane w podobny sposób jak inne pola w tym obeikcie
   */
  state = {
    name: "Jane",
    age: 30,
    isAdult: true,
  };

  render() {
    /**
     * ⭐⭐
     * Znacie pojęcie destrukturyzacja?
     * zaraz za komentarzem
     * możecie jej użyć destrukturyzując obiekt state - często się to przydaje jak pola są używane wielokrotnie
     * i chcemy oszczędzić pisania this.state.****
     */
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Is Adult?: {this.state.isAdult ? "yes" : "no"}</p>
      </div>
    );
  }
}

/**
 * Kolejnym zadaniem będzie stworzenie nowego komponentu o nazwie ComponentWithState1
 *
 * który również będzie posiadał swój stan (obiekt state)
 * a w nim pola todoName i status
 *
 *
 */
