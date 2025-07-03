import React, { useState } from "react";

function MyComp1() {
  const [person, setPerson] = useState({ name: "", address: "" });

  return (
    <div>
      <div>
        <input
          type="text"
          value={person.name}
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          value={person.address}
          onChange={(e) => setPerson({ ...person, address: e.target.value })}
        />
      </div>
      <div>
        <div>
          <p>이름 : {person.name}</p>
        </div>
        <div>
          <p>주소 : {person.address}</p>
        </div>
      </div>
    </div>
  );
}

function MyInput({ person, onNameChange, onAddressChange }) {
  return (
    <div>
      <div>
        <input
          type="text"
          value={person.name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={person.address}
          onChange={(e) => onAddressChange(e.target.value)}
        />
      </div>
    </div>
  );
}

function MyOutput({ person }) {
  return (
    <div>
      <p>이름 : {person.name} </p>
      <p>주소 : {person.address}</p>
    </div>
  );
}

function MyComp2() {
  const [person, setPerson] = useState({ name: "", address: "" });

  function handleNameChange(name) {
    setPerson({ ...person, name: name });
  }
  function handleAddressChange(address) {
    setPerson({ ...person, address: address });
  }

  return (
    <div>
      <MyInput
        person={person}
        onNameChange={handleNameChange}
        onAddressChange={handleAddressChange}
      />
      <MyOutput person={person} />
    </div>
  );
}

function App34(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App34;
