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

  /**
   * utwórz metodę która będzie wywoływana przy przyciśnieciu
   * przyisku w tym komponencie
   * niech funkcja dodaje do tablicy this.state.number
   * wybraną przez Ciebie liczbę:
   * - może ona byc generowana poprzez Math.random ALBO
   * - tworzona na postawie długości tej tablicy dzięki temu
   * stan powinien wyglądać tak: [1,2,3] po trzech kliknieciach
   */
  handleClick = () => {
    // const newNumbers = [...this.state.numbers, this.state.numbers.length + 1];
    // this.setState({ numbers: newNumbers });
  };

  /** zadanie 1:
   *
   * wyświetl listę userów (this.state.users) przy użyciu funkcji map
   * do wyświetlenia userów użyj elementów htmlowych ul oraz li
   */

  /** zadanie 2:
   *
   * wyświetl listę tasków (this.state.tasks) przy użyciu funkcji map
   * do wyświetlenia tasków użyj elementów htmlowych ul oraz li lub tabeli :)
   */

  /** Refactroing i wprowadzenie do propsów:
   *
   * 👉PROPSY - sposób na przekazywanie danych w drzewie komponentów
   * 👉PROPSY - przekazuje się z Parent Componentu do Children Componenów
   * 👉PROPSAMI - mogą być dane (obiekty, zmienne, stringi, numbery, booleany, tablice)
   * oraz mogą być to funkcje
   *
   */

  /** zadanie 3:
   *
   * przenieś listę tasków do oddzielnego komponentu
   * wywołaj komponent zamiast mapowania się po taskach podobnie jak na przykładzie userów
   * przekaż listę tasków jako propsy do kompoentu który stworzyłeś
   *
   * ⭐ obłsuż sytuacje gdy tablica tasków jest pusta i zamiast mapować się wyświetl stosowny
   * komunikat o braku danych do wyświetlenia
   */

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
