import React, { Component } from "react";

/**
 * TEN PLIK OTWIERAMY PO PRZEROBIENIU PLIKU ComponentWithUpdatingState1
 */

class NameAndSurename extends Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Surename: {this.props.surename}</p>
      </div>
    );
  }
}

/**
 * zadanie 1
 * utwórz komponent który będzie wyświetlał this.state.user.age
 * do wyświetlenia wieku użyj elementu <h4></h4>
 * wywołaj/użyj tego komponentu wewnątrz komponentu ComponentWithProps
 *
 * zadanie 2
 * utwórz komponent który będzie wyświetlał this.state.user.profesion
 * do wyświetlenia zawodu użyj elementu <p></p>
 * wywołaj/użyj tego komponentu wewnątrz komponentu ComponentWithProps
 *
 * zadanie 3
 * utwórz komponent który będzie wyświetlał this.state.user.tasks
 * zauważ że jest to lista/tablica - do tego celu użyj funckji map żeby wyświetlić
 * wszystkie elementy
 * wywołaj/użyj tego komponentu wewnątrz komponentu ComponentWithProps
 */

// zadanie 1
class Age extends Component {
  render() {
    return <h4>Name: {this.props.age}</h4>;
  }
}

// zadanie 2
class Profession extends Component {
  render() {
    return <p>Name: {this.props.profesion}</p>;
  }
}

export default class ComponentWithPropsSolution extends Component {
  state = {
    user: { name: "Jane", surename: "Doe", age: 20, profesion: "Developer" },
    tasks: [
      "Pouczyć się JSa",
      "Pouczyć się CSSa",
      "Pouczyś się reacta",
      "Pouczyć się HTMLa",
    ],
  };

  /**
   *
   * 👉PROPSY - sposób na przekazywanie danych w drzewie komponentów
   * 👉PROPSY - przekazuje się z Parent Componentu do Children Componenów
   * 👉PROPSAMI - mogą być dane (obiekty, zmienne, stringi, numbery, booleany, tablice)
   * oraz mogą być to funkcje
   *
   */

  render() {
    return (
      <div>
        <NameAndSurename
          name={this.state.user.name}
          surename={this.state.user.surename}
        />
        <Age age={this.state.user.age} />
        <Profession profesion={this.state.user.profesion} />
      </div>
    );
  }
}
