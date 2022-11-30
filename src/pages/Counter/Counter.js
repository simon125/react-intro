import React, { useState } from "react";
import { IncrementButton } from "./components/IncrementButton";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");

  const onNavItemChange = (e) => {
    setCurrentPage(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    setCounter(100);
  };

  const handleIncrementClick = () => {
    /**
     * 2 + 1
     */
    console.log(
      `Starta wartość countera: ${counter}, Nowa Wartość Countera: ${
        counter + 1
      }`
    );
    setCounter(counter + 1);
  };

  const handleDecrementClick = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      {/* <button onClick={}>+5</button> */}
      {/* <button onClick={handleIncrementClick}>+1</button> */}
      <IncrementButton
        onIncrementClickCokolwiek={handleIncrementClick}
        zmienna1="asdasd"
        zmienna2={123}
      />
      {/* <DectementButton onDecrementClick={handleDecrementClick}/> */}

      {/* <button onClick={handleDecrementClick}>-1</button> */}
      {/* <button onClick={}>-5</button> */}
    </div>
  );
};
