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
      <Link to="/user-creator/1" className={classes.navItem}>
        User Creator 1
      </Link>
      <Link to="/user-creator/2" className={classes.navItem}>
        User Creator 2
      </Link>
      <Link to="/user-creator/kfuwheiufhwuie" className={classes.navItem}>
        User Creator który nie istnieje
      </Link>
      <Link to="/counter" className={classes.navItem}>
        Counter
      </Link>
    </div>
  );
};
