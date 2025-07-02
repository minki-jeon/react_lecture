import React, { useState } from "react";

function MyComp1() {
  // use... : 훅(Hook)
  // React는 첫번째 Rendering에서 호출된 훅(hook)을 순서대로 기록(기억)한다.(훅 이름이나 변수명을 기록하지 않는다.)
  // - 그렇기때문에, 훅을 사용할 때는 조건에 의해 useState을 사용해서는 안된다.
  // - 1) 조건 절에 넣으면 안된다.
  // - 2) 조건에 의한 반복문에 넣으면 안된다.
  // 훅(hook)은 컴포넌트 함수 영역의 최상위 레벨에서 순차적으로 작성(호출)되어야한다.
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  const [name, setName] = useState("son");

  // React는 호출 순서로 상태 연결을 하므로, 조건/반복으로 훅(hook) 호출 순서가 바뀌면 오류 및 상태 불일치 발생
  if (true) {
    const [message, setMessage] = useState("");
  }
  for (let i = 0; i < 3; i++) {
    const [other, setOther] = useState("");
  }
  // 또한, 작성한 훅들 중간에 다른 코드들을 작성하지 않는다.
  let a = 3 + 5;
  const [alert, setAlert] = useState("");

  return null;
}

function App28(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App28;
