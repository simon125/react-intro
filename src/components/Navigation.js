import React from "react";
import classes from "./Navigation.module.css";

/**
 * utwórz komponent Navigation który będzie wyświeltał dwa inputy typu radio button
 * niech każdy radio button używa tego samego atrubutu name np "navItem" tak żeby możliwe
 * było zaznaczenie jednej wartości
 * niech pierwszy radio button ma ustawione
 * value="counter" natomiast drugi value="todoList"
 *
 *
 * niech komponent przyjmuje obiekt props w którym będą dostępne kolejno
 * 1) zmienna/pole currentPage - która będzie świadczyła o aktualnie wybranej stronie
 * dzięki temu polu będziemy mogli kontrolować inputy i zaznaczać radioButtona
 * do tego celu użyj atrubutu "checked"
 * z wartością która jest warunkiem np  checked={currentPage === "counter"}
 * 2) funkcja onNavItemChangek która będzie ustawiać stan w komponencie wyżej (w parencie)
 * tzn będzie wywoływać funckje ustawiającą stan currentPage na aktualnie klikniętą wartość
 *
 * currentPage onNavItemChange - stan ten oraz funckja updatująca go będą pochodzić z useState
 * z komponentu App.js
 *
 *      <label htmlFor="home">
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
 *
 */

export const Navigation = (props) => {
  const { onNavItemChange, currentPage } = props;
  console.log("Navigation sie renderuje");
  return (
    <div className={classes.navigationContainer}>
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
        Counter
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          checked={currentPage === "counter"}
          value="counter"
          onChange={onNavItemChange}
        />
      </label>
      <label>
        Conditional Displaying
        <input
          className={classes.navItem}
          type="radio"
          name="navItem"
          checked={currentPage === "conditionaldisplaying"}
          value="conditionaldisplaying"
          onChange={onNavItemChange}
        />
      </label>
    </div>
  );
};
