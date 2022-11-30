import React from "react";
import classes from "./Navigation.module.css";

export const NavigationSolution = (props) => {
  return (
    <div className={classes.navigationContainer}>
      <label htmlFor="home">
        Home
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          value="home"
          checked={props.currentPage === "home"}
          onChange={props.onNavItemChange}
        />
      </label>
      <label htmlFor="counter">
        Counter
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          value="counter"
          checked={props.currentPage === "counter"}
          onChange={props.onNavItemChange}
        />
      </label>
      <label htmlFor="todoList">
        Todo List
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          value="todolist"
          checked={props.currentPage === "todoList"}
          onChange={props.onNavItemChange}
        />
      </label>
      <label htmlFor="calculator">
        Calculator
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          value="calculator"
          checked={props.currentPage === "calculator"}
          onChange={props.onNavItemChange}
        />
      </label>
      <label htmlFor="other">
        Other
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          value="other"
          checked={props.currentPage === "other"}
          onChange={props.onNavItemChange}
        />
      </label>
    </div>
  );
};
