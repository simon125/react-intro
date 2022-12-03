export const TodoItem = (props) => {
  return (
    <tr>
      <td>{props.todoName}</td>
      <td>{props.status}</td>
      <td>
        <button onClick={props.onEditClick}>Edit</button>
      </td>
      <td>
        <button onClick={props.onDeleteClick}>Delete</button>
      </td>
    </tr>
  );
};
