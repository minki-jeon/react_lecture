import React, { useState } from "react";

function MyComp1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}

function MyComp2() {
  const [person, setPerson] = useState({ name: "", email: "" });

  function handleNameChange(e) {
    person.name = e.target.value;
    console.log(person);
    // 상태가 객체이면 참조값 비교로 다른 상태인지 확인
    setPerson(person);
  }
  function handleEmailChange(e) {}

  return (
    <div>
      <input type="text" value={person.name} onChange={handleNameChange} />
      <br />
      <input type="text" value={person.email} onChange={handleEmailChange} />
    </div>
  );
}

function MyComp3() {
  const [person, setPerson] = useState({ name: "", email: "" });

  function handleNameChange(e) {
    // 상태가 객체이면 참조값 비교로 다른 상태인지 확인
    // 따라서 객체를 복사해서 써야함
    const nextPerson = { ...person }; // spread 연산자로 복사
    nextPerson.name = e.target.value;
    setPerson(nextPerson);
  }
  function handleEmailChange(e) {
    const nextPerson = structuredClone(person); // 신상 메소드 사용
    nextPerson.email = e.target.value;
    setPerson(nextPerson);
  }

  return (
    <div>
      <input type="text" value={person.name} onChange={handleNameChange} />
      <br />
      <input type="text" value={person.email} onChange={handleEmailChange} />
    </div>
  );
}

function MyComp4() {
  const [student, setStudent] = useState({
    name: "",
    className: "",
    score: 0.0,
  });
  // 연습
  // 아래 input요소에 값이 출력되도록 코드 작성
  return (
    <div>
      <div>
        <input
          type="text"
          value={student.name}
          onChange={(e) => {
            const nextStudent = { ...student };
            nextStudent.name = e.target.value;
            setStudent(nextStudent);
          }}
        />
      </div>
      <div>
        <input
          type="text"
          value={student.className}
          onChange={(e) =>
            setStudent({ ...student, className: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="number"
          step={0.1}
          value={student.score}
          onChange={(e) => setStudent({ ...student, score: e.target.value })}
        />
      </div>
    </div>
  );
}

function App30(props) {
  return (
    <div>
      <MyComp4 />
      <hr />
      <MyComp3 />
      <hr />
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App30;
