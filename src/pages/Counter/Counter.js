import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const Counter = () => {
  const { testowyParametr, kolejnyTestowyParametr } = useParams();
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {testowyParametr === "test123" && <h1>Hello</h1>}
      {testowyParametr}
      <p>{kolejnyTestowyParametr}</p>
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
