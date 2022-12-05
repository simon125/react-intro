import React from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className={classes.navigationContainer}>
      <Link to="/" className={classes.navItem}>
        Home
      </Link>
      <Link to="/todo-form" className={classes.navItem}>
        Todo Form
      </Link>
      <Link to="/todolist" className={classes.navItem}>
        Todo List
      </Link>
      <Link to="/statistics" className={classes.navItem}>
        Statistics
      </Link>
      <Link to="/counter" className={classes.navItem}>
        Counter
      </Link>
    </div>
  );
};
