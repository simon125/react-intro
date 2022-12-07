import React from "react";
import { Doughnut as DoughnutChart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Doughnut = (props) => {
  const { todos } = props;

  const dataToDisplay = todos.reduce(
    (data, todo) => {
      if (todo.status === "in-progress") {
        data[0] = data[0] + 1;
      } else if (todo.status === "done") {
        data[1] = data[1] + 1;
      } else {
        data[2] = data[2] + 1;
      }

      return data;
    },
    [0, 0, 0]
  );

  const data = {
    labels: ["In progress", "Done", "Todo"],
    datasets: [
      {
        label: "# tasks amount:",
        data: dataToDisplay,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ width: "50vw", margin: "100px auto" }}>
      <DoughnutChart data={data} />
    </div>
  );
};
