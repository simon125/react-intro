import React from "react";

/**
 * Stówrz komponent który będzie wyświetlał dokładnie taką samą treść jak na
 * grafice, dla ćwieczenia możesz użyć stanu żeby przechować dane takie jak
 * tytuł = 'Work'
 * liczba godzin = 32hrs
 * liczba godzin w poprzednim tygodniu = last week 36hrs
 *
 * definicja komponentu niech będzie w tym samym pliku
 */

export class MetricsContainer extends React.Component {
  render() {
    return (
      <div>
        <Metric1 />
        <Metric2 />
        <Metric3 />
      </div>
    );
  }
}

class Metric1 extends React.Component {
  render() {
    return (
      <section>
        <h2>Work</h2>
        <p>32hrs</p>
        <p>Last week - 36hrs</p>
      </section>
    );
  }
}
class Metric2 extends React.Component {
  render() {
    return (
      <section>
        <h2>Play</h2>
        <p>10hrs</p>
        <p>Last week - 8hrs</p>
      </section>
    );
  }
}
class Metric3 extends React.Component {
  render() {
    return (
      <section>
        <h2>Study</h2>
        <p>4hrs</p>
        <p>Last week - 7hrs</p>
      </section>
    );
  }
}
