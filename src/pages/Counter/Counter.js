import React, { useState } from "react";
import { useParams } from "react-router-dom";
export const Counter = () => {
  const { value } = useParams();
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {value}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -1
      </button>
      <p>{counter}</p>
    </div>
  );
};
