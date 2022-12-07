import React, { useState } from "react";

export const UserCreator2 = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [education, setEducation] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  return (
    <div>
      <h1>User Creator 2</h1>
      <input value={name} name="name" type="text" onChange={handleNameChange} />
      <input
        value={lastName}
        name="lastName"
        type="text"
        onChange={handleLastNameChange}
      />
      <input
        value={education}
        name="education"
        type="text"
        onChange={handleEducationChange}
      />
      <input
        value={address}
        name="address"
        type="text"
        onChange={handleAddressChange}
      />
      <input
        value={postalCode}
        name="postalCode"
        type="text"
        onChange={handlePostalCodeChange}
      />
    </div>
  );
};
