import { useState } from "react";
import "./Metric.css";

export const Metric = (props) => {
  const { label, value } = props;

  return (
    <div className="metrics-container">
      <p className="typography">
        {label}: {value}
      </p>
    </div>
  );
};
