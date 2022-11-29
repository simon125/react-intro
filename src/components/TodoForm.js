export const TodoForm = (props) => {
  return (
    <>
      <input
        value={props.todoName}
        onChange={props.handleChange}
        type="text"
        placeholder="Enter todo name..."
      />
      <input
        type="checkbox"
        checked={props.status}
        onChange={props.handleStatusChange}
      />
      <button onClick={props.handleSubmitClick}>Dodaj TODO</button>
    </>
  );
};
