import { Metric } from "./Metric";
import "./Statistics.css";

export const Statistics = (props) => {
  const countDone = () => {
    let count = 0;
    props.todoList.map((element) => {
      if (element.status === true) {
        count++;
      }
    });
    return count;
  };
  const countInProgress = () => {
    let count = 0;
    props.todoList.map((element) => {
      if (element.status === false) {
        count++;
      }
    });
    return count;
  };

  return (
    <div className="statistics-container  mb-50">
      <p className="typography">Statistics.js</p>
      <div className="flex">
        <Metric label="Liczba zadań skończonych" value={countDone()} />
        <Metric label="Liczba zadań do zrobienia" value={countInProgress()} />
      </div>
    </div>
  );
};
