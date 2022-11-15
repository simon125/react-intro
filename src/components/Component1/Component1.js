import React from "react";
import "./component1.css";

export const Component1 = () => {
  /**
   *
   * superClass - klasa z css-modules nie będzie miała wpływu na napis w środku diva
   *
   * component-container klasa która będzie miała wpływ na napis w divie
   * pamiętaj żeby zaimportować plik css do komponentu
   *
   */
  return <div className="component-container superClass">Component1</div>;
};
