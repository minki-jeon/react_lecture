import React, { useEffect, useState } from "react";
import * as PropTypes from "prop-types";
import { FormCheck } from "react-bootstrap";

function MyComp1({ value }) {
  return <div className="border">value * 2 : {value * 2}</div>;
}

let someValue = 0;
function MyComp2() {
  someValue = someValue + 1;
  return <div className="border bg-light">someValue : {someValue}</div>;
}

function MyComp3() {
  useEffect(() => {
    // 마운트가 될 때 실행 코드
    console.log("comp3 마운트");

    return () => {
      // 언아운트가 될 때 실행 코드
      console.log("comp3 언마운트");
    };
  }, []);

  return (
    <div>
      <h3>MyComp 3</h3>
    </div>
  );
}

function Child41() {
  useEffect(() => {
    console.log("child41 mounted");
    return () => {
      console.log("child41 un-mounted");
    };
  }, []);
  return (
    <div>
      <h3>child41 component</h3>
    </div>
  );
}

function MyComp4() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <FormCheck type="switch" checked={show} onClick={() => setShow(!show)} />
      {show && <Child41 />}
    </div>
  );
}

function App38(props) {
  // strict mode : 렌더링할 때, 모든 컴포넌트를 [마운트->언마운트->마운트] 과정을 수행한다.
  // pure component : 함수(컴포넌트) 밖의 데이터를 변경하지 말 것.
  return (
    <div>
      <MyComp4 />
      <hr />
      <MyComp3 />
      <hr />
      {/* Not-Purity : 함수(컴포넌트) 바깥에서 값을 변경하려는 것
                - strict mode 에서 원하는 결과가 나오지 않을 수 있다. */}
      <MyComp2 />
      <MyComp2 />
      <MyComp2 />
      <hr />
      {/* Purity */}
      <MyComp1 value={2} />
      <MyComp1 value={1} />
    </div>
  );
}

export default App38;
