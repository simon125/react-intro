import React, { useEffect } from "react";
import { Bar } from "./components/Bar";
import { Doughnut } from "./components/Doughnut";

export const Statistics = () => {
  useEffect(() => {
    console.log("Montuje component Statistics");

    return () => {
      console.log("Odmontowywuje component Statistics");
    };
  }, []);

  return (
    <div>
      <div style={{ display: "flex", gap: 50, justifyContent: "center" }}>
        <label>
          <input type="checkbox" /> Show data in Doughnut
        </label>
        <label>
          <input type="checkbox" /> Show data in Bar
        </label>
      </div>
      <Doughnut />
      <Bar />
    </div>
  );
};
