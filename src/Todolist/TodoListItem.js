import React from "react";

export const TodoListItem = (props) => {
  console.log(props.cokolwiek);

  return (
    <div
      style={{
        margin: "20px",
        background: "#B49477",
        padding: 20,
      }}
    >
      <p>{props.cokolwiek.todoName}</p>
    </div>
  );
};
