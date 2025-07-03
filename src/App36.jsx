import React, { useState } from "react";
import { Form } from "react-bootstrap";

function ChildComp11() {
  const [count, setCount] = useState(1);

  return (
    <div className="border bg-info">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

function MyComp1() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (
    <div>
      {/* checked=true 인 경우에 ChildComp11 호출(context 보이도록) */}
      <Form.Check
        type="switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {checked && <ChildComp11 />}
      {/* checked로 사라졌다가 보일때마다 컴포넌트가 새로 생성된다 (count 리셋) */}

      <hr />
      <Form.Check
        type="switch"
        checked={checked2}
        onChange={() => setChecked2(!checked2)}
      />
      {checked2 && <ChildComp11 />}
    </div>
  );
}

// component의 lifecycle :
//     - initial render (= mount): 컴포넌트 트리에 붙을 때
//     - re-render (= update) : 상태가 변경될 때
//     - unmount : 컴포넌트 트리에서 떨어짐
// => useEffect : component의 lifecycle에 맞춰(단계별) 실행시킬 수 있는 메소드를 갖고있다.
function App36(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App36;
