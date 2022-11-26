import React from "react";
import { Child } from "./Child";

export const Parent = () => {
  return (
    <div>
      <p>Parent.js</p>
      <Child />
      <Child />
      <Child />
    </div>
  );
};
