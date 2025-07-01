function MyComp1() {
  return <button style={{ color: "yellow" }}>멋진 버튼</button>;
}

function MyComp2() {
  return <button style={{ color: "blue" }}>멋진 버튼</button>;
}

function MyComp3() {
  return <button style={{ color: "red" }}>멋진 버튼</button>;
}

function MyComp4({ color }) {
  return <button style={{ color: color }}>너무 멋진 버튼</button>;
}

function App5() {
  return (
    <>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
      <MyComp4 color="yellow" />
      <MyComp4 color="blue" />
      <MyComp4 color="red" />
    </>
  );
}

export default App5;
