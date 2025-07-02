import React, { useState } from "react";

function MyComp1() {
  const [number1, setNumber1] = useState(1);
  const [number2, setNumber2] = useState(10);

  console.log(number1, number2);

  return (
    <div>
      {/*div*2>div{1}+button{버튼}*/}
      <div>
        <div>{number1}</div>
        <button onClick={() => setNumber1(number1 + 1)}>버튼1</button>
      </div>
      <div>
        <div>{number2}</div>
        <button onClick={() => setNumber2(number2 - 1)}>버튼2</button>
      </div>
    </div>
  );
}

function MyComp2() {
  // 컴포넌트 하나에 두 개 이상의 useState 사용 가능 (여러 상태값이 있을 수 있다.)
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  return (
    <div>
      {/*div*2>input[value=""]*/}
      <div>
        <input
          type="text"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={text2}
          onChange={(e) => setText2(e.target.value)}
        />
      </div>
    </div>
  );
}

function App26(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App26;
