import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar as BarChart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Todo", "In Progress", "Done"],
  datasets: [
    {
      label: "Tasks status",
      data: [1, 2, 4],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Tasks status",
      data: [1, 2, 4],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const Bar = () => {
  return (
    <div style={{ width: "50vw", margin: "100px auto" }}>
      <BarChart data={data} />
    </div>
  );
};
