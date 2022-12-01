import { useState } from "react";

export const TodoForm = (props) => {
  const [todoName, setTodoName] = useState("");
  const [status, setStatus] = useState(false);

  const handleChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleStatusChange = () => {
    setStatus(!status);
  };

  return (
    <>
      <input
        value={todoName}
        onChange={handleChange}
        type="text"
        placeholder="Enter todo name..."
      />
      <input type="checkbox" checked={status} onChange={handleStatusChange} />
      <button
        onClick={() => {
          props.handleSubmitClick(todoName);
          setTodoName("");
        }}
      >
        Dodaj TODO
      </button>
    </>
  );
};
