import React from "react";

export const Modal = ({ children }) => {
  return (
    <div>
      <dialog open>
        <article>{children}</article>
      </dialog>
    </div>
  );
};
