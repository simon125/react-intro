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
    lastName: "Doe",
    users: [],
    todo: {},
  };

  render() {
    /**
     * ⭐⭐
     * Znacie pojęcie destrukturyzacja?
     * zaraz za komentarzem
     * możecie jej użyć destrukturyzując obiekt state - często się to przydaje jak pola są używane wielokrotnie
     * i chcemy oszczędzić pisania this.state.jakiesPole
     *
     * Przykład destrukturyzacji
     *
     *  const obj = {name: 'Jane'};
     *  const {name} = obj;
     *
     */

    const { age, isAdult, lastName, name } = this.state;

    return (
      <div>
        {/* wersja z template string */}
        {/* <p>{`Name: ${this.state.name} Nazwisko: ${this.state.lastName}`}</p> */}
        {/* wersja bardziej reactowa */}
        <p>
          Name: {name} Nazwisko: {lastName}
        </p>
        <p>Age: {age}</p>
        <p>Is Adult?: {isAdult ? "yes" : "no"}</p>
        <p>{age}</p>
        <p>{age}</p>
        <p>{age}</p>
        <p>{age}</p>
      </div>
    );
  }
}

/**
 * Kolejnym zadaniem będzie stworzenie nowego komponentu o nazwie ComponentWithState1
 *
 * który również będzie posiadał swój stan (obiekt state)
 * a w nim pola todoName i status
 * przejdzmy do pliku ComponentWithState1.js
 *
 */
