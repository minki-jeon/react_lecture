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
    // 상태가 변경되자마자 Re-Rendering 하는 것이 아니다.
    // React는 적절한 순간에 변경된 상태로 Re-Rendering 한다.
    // - 정확히는 상태값 업데이트가 바로 되는 것이 아니다?????????? TODO
    //
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
  // TODO : 왜 두번씩 실행되는거지?????

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
