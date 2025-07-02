import React, { useState } from "react";

function MyComp1() {
  const [count, setCount] = useState(0);

  console.log(count);

  function handleButtonClick() {
    setCount(count + 1);
    setCount(count + 1);
    // 2번 연속 update
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>증가</button>
    </div>
  );
}

function MyComp2() {
  const [count, setCount] = useState(0);

  console.log(count);

  function handleButtonClick() {
    // 상태가 변경(setUpdate)될 때, 바로 Re-Rendering 하는 것이 아니다.
    // React는 적절한 순간에 변경된 상태로 Re-Rendering 한다.
    // - 정확히는 상태값 업데이트가 바로 되는 것이 아니다.
    // 🔹 setCount(count + 1) → 기존 값 업데이트 : 현재 렌더링 기준 값
    // 🔹 setCount(prev => prev + 1) → 함수형 업데이트 : React 내부의 최신 상태값 기준
    // 🔹 useEffect(() => ..., [state]) : React 컴포넌트가 리렌더링된 "직후"에 실행되는 함수
    console.log("a: ", count);
    setCount(count + 1);
    console.log("b: ", count);
    setCount(count + 2);
    console.log("c: ", count);
    // 2번 연속 update
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>증가</button>
    </div>
  );
}

function MyComp3() {
  const [count, setCount] = useState(0);

  console.log(count);

  let number = count;
  function handleButtonClick() {
    // number++;
    // number++;
    setCount(number + 2);
  }

  return (
    <div>
      {number}
      {/*{count}*/}
      <br />
      <button onClick={handleButtonClick}>증가</button>
    </div>
  );
}

function MyComp4() {
  const [count, setCount] = useState(0);

  console.log(count);
  // console.log() 두번씩 실행되는 이유
  // - main.jsx [ <StrictMode /> ] 설정때문
  // - 개발 모드에서만 동작,
  // - 안정성 검사 도구로, 렌더링, 상태 초기화, useEffect 등 사이클을 “두 번” 실행해서 부작용이 없는지 테스트한다.
  // - 즉, 렌더링을 두 번하여 console.log()가 두 번 호출된다.

  function handleButtonClick() {
    // setCount(count + 1);
    // setCount(count + 1);
    // 2번 연속 update
    console.log("A: ", count);
    setCount((count) => count + 1);
    console.log("B: ", count);
    setCount((count) => count + 1);
    console.log("C: ", count);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>증가</button>
    </div>
  );
}

function App24(props) {
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

export default App24;
