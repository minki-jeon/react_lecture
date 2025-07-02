import React, { useState } from "react";

function MyComp1() {
  // 객체 내의 객체 상태값
  const [person, setPerson] = useState({
    name: "son",
    address: { city: "london", country: "uk" },
  });

  function handleNameChange(e) {
    setPerson({ ...person, name: e.target.value });
  }

  // 객체 내의 객체의 상태값 변경 메소드
  function handleCityChange(e) {
    // 얕은 복사 => 상태값 변경에 문제가 발생될 수 있다.
    // const newPerson = { ...person };
    // 깊은 복사 방식
    const newPerson = structuredClone(person);
    newPerson.address.city = e.target.value;
    console.log(newPerson);
    setPerson(newPerson);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="이름"
          value={person.name}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="도시"
          value={person.address.city}
          onChange={handleCityChange}
        />
      </div>
      <div>
        <input type="text" placeholder="국가" value={person.address.country} />
      </div>
    </div>
  );
}

function App31(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App31;
