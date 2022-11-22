import React, { Component } from "react";
import { renderUsers } from "./ComponentWithUpdatingStateComplexSolution";

export default class ComponentWithUpdatingStateComplex extends Component {
  state = {
    users: [
      { id: "h2d83d", name: "Jane", age: 20 },
      { id: "diu23s", name: "John", age: 24 },
      { id: "wer3r1", name: "Joe", age: 32 },
    ],
    tasks: [
      { id: "h123das", title: "Fix the car", userId: "wer3r1" },
      { id: "sdfu23s", title: "Learn JS", userId: "h2d83d" },
      { id: "4fwe3r1", title: "Read a book", userId: "wer3r1" },
    ],
  };

  /**
   * zadanie wyświetl lsitę userów tak żeby po każdym userem znajdowały się jego taski
   * zwróć uwagę że this.state.tasks w swojej strukturze ma userId któro jest
   * id w obiektach this.state.users
   *
   * dzięki temu na ekranie powinniśmy zobaczyć userów z pogrupowanymi taskami
   * user + jego taski
   */

  render() {
    const { users, tasks } = this.state;
    return (
      <div>
        <ul>
          {/* ODKOMENTUJ FUNKCJE 👇renderUsers(users,tasks)👇 ŻEBY 
          ZOBACZYĆ NA EKRANIE REZULTAT JAKI MASZ OSIĄGNĄĆ */}

          {/* {renderUsers(users, tasks)} */}
        </ul>
      </div>
    );
  }
}
