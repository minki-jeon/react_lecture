import React, { useState } from "react";

function MyComp1() {
  // 상태 작성 시, 주의해야 할 점
  // 불필요하게 상태 변경을 남용을 하지말아야한다.
  const [number, setNumber] = useState(1);
  const [oddEven, setOddEven] = useState("홀수");

  function handleButtonClick() {
    setNumber(number + 1);
    if (oddEven == "홀수") {
      setOddEven("짝수");
    } else {
      setOddEven("홀수");
    }
  }

  return (
    <div>
      <div>
        <span>{number}</span>
        <span>{oddEven}</span>
      </div>
      <button onClick={handleButtonClick}>값 증가</button>
    </div>
  );
}

function MyComp2() {
  // 불필요한 useState를 가급적 사용하지 않는 방식으로 작성한다.
  // 상태값 oddEven를 상태값 number를 활용해서 얻는 방식으로 useState를 최소화
  const [number, setNumber] = useState(1);
  let oddEven = number % 2 == 0 ? "짝수" : "홀수";

  function handleButtonClick() {
    setNumber(number + 1);
  }

  return (
    <div>
      <div>
        <span>{number}</span>
        <span>{oddEven}</span>
      </div>
      <button onClick={handleButtonClick}>값 증가</button>
    </div>
  );
}

function MyComp3() {
  const [text, setText] = useState("");
  const [length, setLength] = useState(0);
  // 불필요한 length state 제거하는 방식으로 변경할 것 => MyComp4
  function handleInputChange(e) {
    setText(e.target.value);
    setLength(e.target.value.length);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>{length}</p>
    </div>
  );
}

function MyComp4() {
  // 불필요한 length state 제거하는 방식으로 변경
  const [text, setText] = useState("");
  // const [length, setLength] = useState(0);
  function handleInputChange(e) {
    setText(e.target.value);
    // setLength(e.target.value.length);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      {/*<p>{length}</p>*/}
      <p>{text.length}</p>
    </div>
  );
}

function App27(props) {
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

export default App27;
