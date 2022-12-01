import React, { useEffect } from "react";

export const TodoForm = () => {
  useEffect(() => {
    console.log("Montuje component TodoForm");

    return () => {
      console.log("Odmontowywuje component TodoForm");
    };
  }, []);

  return (
    <div>
      <h1>Todo Form</h1>
    </div>
  );
};
