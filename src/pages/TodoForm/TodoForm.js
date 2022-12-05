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

    // przygotowanie obiektu todo do wysłania go do backendu - tzn ten obiekt będzie zapisany
    // w naszej fejkowej bazie danych (nie sugeruj się słowem fejkowa - mechanika i zasada działania fetcha jest identyczna jak dla prawdziwych przypadków)
    const todoToCreate = {
      todoName, // przypominam o skrótowym zapisie tzn. jeżeli klucz jest takim samym słowem co zmienna z wartością można zapisać tylko klucz
      // tzn zapis samego { todoName } jest ekwiwalentem { todoName: todoName }
      status, // status tak samo jak todoName używa takiego samego słowa jako klucz i zmiennej do trzymania wartości dla statusu
    };

    // pod tym komentarzem powinno znajdować się wywołanie fetcha
    // do tworzenia nowego todo
    // czyli request http który tworzy nowy rekord ma się wywoływać gdy user kliknie przycisk submit
    fetch("http://localhost:4000/todos", {
      method: "POST", // wskazanie metody jest zawsze konieczne gdy robimy request inny niż typu GET
      headers: { "Content-Type": "application/json" }, // w headerach inforumujemy o tym jaki typ danych przesyłamy w requescie my tutaj wysyłamy JSONa
      body: JSON.stringify(todoToCreate), // do klucza body (pamiętasz że request HTTP składa się z nagłówków/heaederów oraz z body/ciała) przekazujemy informacje/dane które chcemy wysłać do backendu
      // w naszym przypadku wysyłamy obiekt todo w formacie JSON
    })
      .then(() => {
        alert(
          "Udało się stworzyć nowe todo! Nie wierzysz? sprawdź zakładkę todolist :)"
        );
      })
      .catch(() => {
        console.error("Coś poszło nie tak :/");
      });

    // resetowanie stanu do wartości początkowych
    setTodoName("");
    setStatus("todo");
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
