import React from "react";

export const IncrementButton = (props) => {
  console.log(props.zmienna1);
  console.log(props.zmienna2);

  // w obiekcie props jest pole onIncrementClickCokolwiek któro przechowuje funckje
  return <button onClick={props.onIncrementClickCokolwiek}>+1</button>;
};
