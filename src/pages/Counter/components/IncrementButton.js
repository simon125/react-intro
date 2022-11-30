import React from "react";

export const IncrementButton = (props) => {
  console.log(props.wartoscKtoraMaBycDodana);

  // w obiekcie props jest pole onIncrementClickCokolwiek któro przechowuje funckje
  return (
    <button
      onClick={() =>
        props.onIncrementClickCokolwiek(props.wartoscKtoraMaBycDodana)
      }
    >
      +{props.wartoscKtoraMaBycDodana}
    </button>
  );
};
