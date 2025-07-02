import React, { useState } from "react";

function MyComp1(props) {
  const [text, setText] = useState("기본 값");

  function handleInputChange(e) {
    console.log(e.target.value);
    // setText("다른 값");
    setText(e.target.value);
  }

  return (
    <div>
      {/* value를 지정하면 상태값이 변하지 않기때문에, 입력이 되지않는다. */}
      {/*<input type="text" value="기본 값" />*/}
      <input type="text" value={text} onChange={handleInputChange} />
    </div>
  );
}

function MyComp2() {
  const [message, setMessage] = useState("");
  /*
  function handleInputChange(e) {
    setMessage(e.target.value);
  }

  function handleResetClick() {
    setMessage("");
  }
  */
  return (
    <div>
      {/*
      <input type="text" value={message} onChange={handleInputChange} />
      <button onClick={handleResetClick}>리셋</button>
      */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => setMessage("")}>리셋</button>
    </div>
  );
}

function App25() {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App25;
