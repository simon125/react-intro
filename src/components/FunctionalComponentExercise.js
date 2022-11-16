import React from "react";

export const FunctionalComponentExercise = (props) => {
  const { user } = props;

  return (
    <li>
      {user.name} | {user.age}
    </li>
  );
};
