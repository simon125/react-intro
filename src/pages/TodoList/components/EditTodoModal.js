import React from "react";
import { Modal } from "../../../components/Modal";

export const EditTodoModal = (props) => {
  console.log(props.todoToEdit);

  return (
    <Modal>
      <h3>Confirm your action!</h3>
      <input
        type="text"
        name="todoName"
        placeholder="New title"
        value={props.todoToEdit.todoName}
        onChange={props.onEditFormChange}
      />

      <select
        name="status"
        id=""
        value={props.todoToEdit.status}
        onChange={props.onEditFormChange}
      >
        <option value="todo">Todo</option>
        <option value="in-progress">In progress</option>
        <option value="done">Done</option>
      </select>
      <footer>
        <a
          href="#cancel"
          role="button"
          className="secondary"
          onClick={props.onCancelClick}
        >
          Cancel
        </a>
        <a href="#confirm" role="button" onClick={props.onEditConfirmClick}>
          Confirm
        </a>
      </footer>
    </Modal>
  );
};
