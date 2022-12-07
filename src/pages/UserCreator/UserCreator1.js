import React, { useState } from "react";

export const UserCreator1 = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    education: "",
    address: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const keyName = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [keyName]: value });
  };

  return (
    <div>
      <h1>User Creator 1</h1>
      <input
        placeholder="Name"
        value={user.name}
        name="name"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="Last Name"
        value={user.lastName}
        name="lastName"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="Education"
        value={user.education}
        name="education"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="Address"
        value={user.address}
        name="address"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="Postal Code"
        value={user.postalCode}
        name="postalCode"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};
