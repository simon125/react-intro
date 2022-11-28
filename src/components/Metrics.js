import React from "react";
import { Metric } from "./Metric";
import classes from "./Metrics.module.css";
import "./Metrics.css";

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

/**
 * podejście funkcyjne
 */

const metrics = [
  {
    title: "Work",
    time: "4hrs",
    lastWeekTime: "5hrs",
    bgColor: "orange",
  },
  {
    title: "Play",
    time: "32hrs",
    lastWeekTime: "5hrs",
    bgColor: "skyblue",
  },
  {
    title: "Study",
    time: "4hrs",
    lastWeekTime: "8hrs",
    bgColor: "red",
  },
  {
    title: "Exercise",
    time: "4hrs",
    lastWeekTime: "5hrs",
    bgColor: "green",
  },
  {
    title: "Social",
    time: "32hrs",
    lastWeekTime: "5hrs",
    bgColor: "purple",
  },
  {
    title: "Self Care",
    time: "4hrs",
    lastWeekTime: "8hrs",
    bgColor: "yellow",
  },
];

// metrics.map((metricData)=>/* komponent z propsami z metricData */);

export const MetricsContainer = () => {
  return (
    <section className={classes.metricsContainer}>
      {metrics.map((metricData) => (
        <Metric key={metricData.title} metricData={metricData} />
      ))}
      {/* <Metric title="" time="" lastWeekTime="" />
      <Metric title={} time={} lastWeekTime={} />
      <Metric title time lastWeekTime /> */}
    </section>
  );
};

const addTwoNumbers = (a, b) => a + b;

addTwoNumbers(1, 2);
addTwoNumbers(3, 4);
addTwoNumbers(4, 5);

/**
 * podejście klasowe
 *
 */
// export class MetricsContainer extends React.Component {
//   render() {
//     return (
//       <div>
//         <Metric title="Work" time="4hrs" lastWeekTime="5hrs" />
//         {/* <Metric1 />
//         <Metric2 />
//         <Metric3 /> */}
//       </div>
//     );
//   }
// }

// /**
//  * jak działają propsy w komponencie klasowym
//  */

// class Metric extends React.Component {
//   render() {
//     return (
//       <section>
//         <h2>{this.props.title}</h2>
//         <p>{this.props.time}</p>
//         <p>{this.props.lastWeekTime}</p>
//       </section>
//     );
//   }
// }
