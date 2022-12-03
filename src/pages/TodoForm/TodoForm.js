import { useState } from "react";

export const TodoForm = () => {
  const [todoName, setTodoName] = useState("");
  const [status, setStatus] = useState("todo");

  const handleChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  // po więcej o fetchu zapraszam do tego krótkiego intro
  // https://www.youtube.com/watch?v=cuEtnrL9-H0
  // lub mój faworyt traversy media - w ogóle nie sugerujcie się ze filmik jest z przed 5 lat informacje tam
  // zawarte o fetchu są jak najbardziej poprawne
  // https://www.youtube.com/watch?v=Oive66jrwBs

  const handleSubmitClick = () => {
    /**
     * Zadanie!
     *
     * zaimplementuj ciało funkcji handleSubmitClick tak aby dodawało nowy rekord
     * w tym celu będziesz musiał/a
     *
     * 1) przygotować obiekt np const todoToCreate = {}
     * tzn ustawić wstawić odpowiednie pola tak żeby todoToCreate posiadało todoName oraz status - id wygeneruje się samo na fejkowym backendzie
     * 2) wywoałć odpowiednio skofigurowaną funkcje fetch - odsyłam do świetnych materiałów na yt do których linki zamieściłem wyżej
     * 3) wyczyścić stan formularza do wartości początkowych
     * 4) dodać nowe todo
     * 5) przejść do zakładki todolist i sprawdzić czy nowy todo się dodał poprawnie
     * 6) pamiętaj server z backendem musi być uruchomiony!!! w tym celu możesz skorzystać z komendy
     *  npm run start:be   którą musisz wyowłać w filderze z projektem
     *
     * w razie potrzeby możesz skorzystać z zaproponowanej przezemnie wersji w pliku TodoFormSolution.js
     */
  };

  return (
    <>
      <input
        value={todoName}
        onChange={handleChange}
        type="text"
        placeholder="Enter todo name..."
      />
      <select name="" id="" value={status} onChange={handleStatusChange}>
        <option value="todo">Todo</option>
        <option value="in-progress">In progress</option>
        <option value="done">Done</option>
      </select>
      <button onClick={handleSubmitClick}>Dodaj TODO</button>
    </>
  );
};
