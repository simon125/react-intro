import React, { Component } from "react";

import classes from "./component2.module.css";

export default class Component2 extends Component {
  render() {
    return (
      <div className={classes.superClass}>
        Component2
        <p className="component-container">
          To jest paragraf i będe miał style które pochodzą z klasy
          component-container mimo że zostały zaimportowane one w innym
          komponencie
        </p>
      </div>
    );
  }
}
