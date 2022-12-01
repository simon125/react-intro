import React from "react";
import { Modal } from "../../../components/Modal";

export const EditTodoModal = (props) => {
  return (
    <Modal>
      <h3>Confirm your action!</h3>
      <input type="text" placeholder="New title" />
      <textarea
        name=""
        placeholder="New content"
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <footer>
        <a
          href="#cancel"
          role="button"
          class="secondary"
          onClick={props.onCancelClick}
        >
          Cancel
        </a>
        <a href="#confirm" role="button">
          Confirm
        </a>
      </footer>
    </Modal>
  );
};
