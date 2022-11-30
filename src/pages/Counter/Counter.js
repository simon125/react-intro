import React, { useState } from "react";
import { DecrementButton } from "./components/DecrementButton";
import { GenericButton } from "./components/GenericButton";
import { IncrementButton } from "./components/IncrementButton";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(100);
  };

  const handleIncrementClick = (wartoscKtoraChcemyDodac) => {
    setCounter(counter + wartoscKtoraChcemyDodac);
  };

  const handleDecrementClick = () => {
    setCounter(counter - 1);
  };

  const handleCalculateClick = (wartoscDoSkalulowania, znakMatematyczny) => {
    if (znakMatematyczny === "-") {
      setCounter(counter - wartoscDoSkalulowania);
    } else if (znakMatematyczny === "+") {
      setCounter(counter + wartoscDoSkalulowania);
    }
  };

  console.log("RENDERUJE COUNTERA");
  return (
    <div>
      <h1>{counter}</h1>

      <IncrementButton
        onIncrementClickCokolwiek={handleIncrementClick}
        zmienna1="asdasd"
        zmienna2={123}
        wartoscKtoraMaBycDodana={1}
      />
      <IncrementButton
        onIncrementClickCokolwiek={handleIncrementClick}
        zmienna1="asdasd"
        zmienna2={123}
        wartoscKtoraMaBycDodana={50}
      />
      <GenericButton
        wartoscDoSkalkulowania={5}
        znakMatematyczny={"-"}
        onCalculateClick={handleCalculateClick}
      />
      <GenericButton
        wartoscDoSkalkulowania={22}
        znakMatematyczny={"+"}
        onCalculateClick={handleCalculateClick}
      />

      <DecrementButton onDecrementClick={handleDecrementClick} />
    </div>
  );
};
