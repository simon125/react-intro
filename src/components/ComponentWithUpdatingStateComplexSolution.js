import React, { Component } from "react";

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

  render() {
    const { users, tasks } = this.state;
    return (
      <div>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} | {user.age} | task:{" "}
                {tasks
                  .filter((task) => task.userId === user.id)
                  .map((task) => task.title)
                  .join(", ")}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export const renderUsers = (users, tasks) => {
  return users.map((user) => {
    return (
      <li key={user.id}>
        {user.name} | {user.age} | task:{" "}
        {tasks
          .filter((task) => task.userId === user.id)
          .map((task) => task.title)
          .join(", ")}
      </li>
    );
  });
};
