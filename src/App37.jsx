import React, { useEffect, useState } from "react";
import { FormCheck } from "react-bootstrap";

function Child11() {
  const [count, setCount] = useState(0);

  // useEffect : 컴포넌트 생애 주기(lifecycle)별 실행되는 코드 작성 가능한 훅(hook)
  useEffect(() => {
    // (1) initial-render(mount)
    console.log("첫 렌더링(mount) 시 실행");

    // (3) unmount : useEffect의 첫번째 파라미터로 들어가는 함수의 리턴되는 함수
    return () => {
      console.log("Unmount일 때 실행되는 코드");
    };
  }, []);

  console.log("차일드 함수 실행됨");

  return (
    <div>
      <h3>자식 컴포넌트</h3>
      <button onClick={() => setCount(count + 1)}>증가 {count}</button>
    </div>
  );
}

function MyComp1() {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <FormCheck
        type="switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <Child11 />}
    </div>
  );
}

function Child21() {
  // 이 컴포넌트가 마운트될 때 "자식21 마운트됨" 로그 출력
  // 이 컴포넌트가 언마운트될 때 "자식21 언마운트됨" 로그 출력

  useEffect(() => {
    console.log("자식21 마운트됨");

    return () => {
      console.log("unmount될 때 실행되는 코드");
    };
  }, []);

  // useEffect 여러개 사용가능
  useEffect(() => {
    console.log("mount할 때 실행되는 코드");
    return () => {
      // unmount 시
      console.log("자식 21 언마운트");
    };
  }, []);

  return (
    <div>
      <h3>자식 21</h3>
    </div>
  );
}

function MyComp2() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <FormCheck type="switch" checked={show} onChange={() => setShow(!show)} />
      {show && <Child21 />}
    </div>
  );
}

function App37(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App37;
