import { useState } from "react";

export const NewApp = () => {
  const [counter, setCounter] = useState(0);

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

const IncrementButton = (props) => {
  console.log(props.zmienna1);
  console.log(props.zmienna2);

  // w obiekcie props jest pole onIncrementClickCokolwiek któro przechowuje funckje
  return <button onClick={props.onIncrementClickCokolwiek}>+1</button>;
};
