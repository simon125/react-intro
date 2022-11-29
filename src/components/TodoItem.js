export const TodoItem = (props) => {
  return (
    <li>
      {props.todo}
      <button onClick={props.onDeleteClick}>Edit</button>
      <button onClick={props.funkcjaUsuwajacaPrzekazanaWPropsach}>
        Delete
      </button>
    </li>
  );
};
