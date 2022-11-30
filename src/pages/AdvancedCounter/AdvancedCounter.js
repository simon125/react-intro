import React from "react";
import { CounterSubstraction } from "./components/CounterSubstraction";
import { CounterAddition } from "./components/CounterAddition";
import { CounterOutput } from "./components/CounterOutput";

export const AdvancedCounter = () => {
  const counter = 0;

  const handleUpdateCounterState = () => {};

  return (
    <div>
      <CounterOutput />
      <CounterAddition />
      <CounterSubstraction />
    </div>
  );
};
