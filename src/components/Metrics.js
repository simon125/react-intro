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

/**
 * PO WPROWADZENIU DO PROPSÓW :)
 *
 * Już wiesz czym są propsy - jest to sposób na przekazywanie danych w drzewie komponentów
 * pamiętamy komponent reactowy tooo? ... funckja lub klasa (klasa "pod spodem" to też funkcja :p)
 * a do funkcji można przekazywać argumenty czyli propsy są zwykłymi argumentami dla
 * komponentów.
 *
 * Dla przypomnienia czym są propsy przeanalizuj sobie przykłady w folderze Todolist
 *
 * 👇Anatomia propsów👇
 *
 * *********👇- nazwa propsa/parametru
 * <Metric label="Liczba zadań skończonych" value={countDone()} />
 *
 * ******************👇-wartość propsa/parametru tutaj jest to string
 * <Metric label="Liczba zadań skończonych" value={countDone()} />
 *
 * *******************************************👇-kolejny props/nazwa propsa
 * <Metric label="Liczba zadań skończonych" value={countDone()} />
 *
 * **************************************************👇-wartość dla tego propsa może to być zmienna albo funkcja albo funkcja która coś zwraca
 * <Metric label="Liczba zadań skończonych" value={countDone()} />
 *
 * ZADANIE:
 * przerób poniższe komponenty na komponenty funkcyjne (przykładowe komponenty funkcyjne są w folderze Todolist)
 * zaimplementuj je w taki sposób żeby komponenty Metric1 Metric2 oraz Metric3 można było
 * zapisać za pomocą jednego komponentu czyli komponentu Metric
 * żeby to osiągnąć komponent będzie musiał przyjmować propsy
 * w których będziemy przekazywać informacje takie jak
 * - tytuł o typie string (np. 'Work', 'Play', 'Study')
 * - time o typie string (np. '4hrs', '32hrs')
 * - lastWeekTime o typie string (np. '5hrs', '10hrs')
 * przykładowe dane jak masz wyświetlić znajdują się również w pliku z designem (patrz MetricsDesign.png)
 *
 * następnym zadaniem będzie odwzorowanie designu tzn napisz style które dadzą nam podobny resultat z designu (patrz patrz MetricsDesign.png)
 * ❗nie zapomnij zaimportować pliku z cssami do pliku gdzie jest komponent
 * ❗nie zapomnij zaimportować pliku z komponentem MetricsContainer do pliku App.js - pamiętaj również o wywołaniu komponentu
 *
 *
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
