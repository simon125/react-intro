import React from "react";
import { useParams } from "react-router-dom";
import { UserCreator1 } from "./UserCreator1";
import { UserCreator2 } from "./UserCreator2";

export const UserCreator = () => {
  const params = useParams();
  console.log(params);

  if (params.userCreatorId === "1") {
    return <UserCreator1 />;
  }

  if (params.userCreatorId === "2") {
    return <UserCreator2 />;
  }

  return (
    <div>
      <h2>Nie obsługujemy takiego formularza wybierz id sposórd: 1, 2</h2>
    </div>
  );
};
