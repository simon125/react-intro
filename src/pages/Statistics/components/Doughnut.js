import React from "react";
import { Doughnut as DoughnutChart } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["In progress", "Done", "Todo"],
  datasets: [
    {
      label: "# tasks amount:",
      data: [12, 19, 3],
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

export const Doughnut = () => {
  return (
    <div style={{ width: "25vw", margin: "100px auto" }}>
      <DoughnutChart data={data} />
    </div>
  );
};
