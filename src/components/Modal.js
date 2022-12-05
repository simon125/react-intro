import React from "react";

export const Modal = (props) => {
  const { children } = props;

  return (
    <div>
      <dialog open>
        <article>{children}</article>
      </dialog>
    </div>
  );
};
