import React from "react";
import classes from "./Navigation.module.css";

export const Navigation = (props) => {
  const { onNavItemChange, currentPage } = props;
  console.log("Navigation sie renderuje");
  return (
    <div className={classes.navigationContainer}>
      <label>
        Home
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          checked={currentPage === "home"}
          value="home"
          onChange={onNavItemChange}
        />
      </label>
      <label>
        Todo Form
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          checked={currentPage === "todoform"}
          value="todoform"
          onChange={onNavItemChange}
        />
      </label>
      <label>
        Todo List
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          checked={currentPage === "todolist"}
          value="todolist"
          onChange={onNavItemChange}
        />
      </label>
      <label>
        Statistics
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          checked={currentPage === "statistics"}
          value="statistics"
          onChange={onNavItemChange}
        />
      </label>
    </div>
  );
};
