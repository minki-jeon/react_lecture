import React, { createContext, useContext, useState } from "react";

function ChildComp13({ text }) {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}

function ChildComp12({ text }) {
  return (
    <div>
      <ChildComp13 text={text} />
    </div>
  );
}

function ChildComp11({ text }) {
  return (
    <div>
      <ChildComp12 text={text} />
    </div>
  );
}

function MyComp1() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ChildComp11 text={text} />
    </div>
  );
}

function ChildComp23({ addItem }) {
  return (
    <div>
      <h3>목록</h3>
      <ul>
        {/*  목록 출력 */}
        {addItem.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ChildComp22({ addItem }) {
  return (
    <div>
      <ChildComp23 addItem={addItem} />
    </div>
  );
}

function ChildComp21({ addItem }) {
  return (
    <div>
      <ChildComp22 addItem={addItem} />
    </div>
  );
}

function MyComp2() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function handleAddClick() {
    setList([...list, text]);
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>추가</button>
      <ChildComp21 addItem={list} />
    </div>
  );
}

function ChildComp33() {
  // step2. use context
  const message = useContext(MsgContext);

  return <div>메시지 : {message}</div>;
}

function ChildComp32() {
  return (
    <div>
      <ChildComp33 />
    </div>
  );
}

function ChildComp31() {
  return (
    <div>
      <ChildComp32 />
    </div>
  );
}

// step1. create context
const MsgContext = createContext(null);
function MyComp3() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {/* // step3. provide context*/}
      <MsgContext value={message}>
        <ChildComp31 />
      </MsgContext>
    </div>
  );
}

// step1. create context
const ListContext = createContext(null);
function ChildComp43() {
  // step2. use context
  const list = useContext(ListContext);

  return (
    <div>
      <h3>
        <ul>
          {/*  목록 출력 */}
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </h3>
    </div>
  );
}
function ChildComp42() {
  return (
    <div>
      <ChildComp43 />
    </div>
  );
}
function ChildComp41() {
  return (
    <div>
      <ChildComp42 />
    </div>
  );
}
function MyComp4() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  // list를 context 사용해서 ChildComp43에서 출력해보기 실습
  return (
    // step3. provide context
    <ListContext value={list}>
      <div>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button onClick={() => setList([...list, item])}>추가</button>
        <ChildComp41 />
      </div>
    </ListContext>
  );
}

function App35(props) {
  return (
    <div>
      {/* using context */}
      <MyComp4 />
      {/* using context */}
      <MyComp3 />
      <hr />
      {/*prop drilling*/}
      <MyComp2 />
      <hr />
      {/*prop drilling*/}
      <MyComp1 />
    </div>
  );
}

export default App35;
