// component : 함수
// component명(함수명) : UpperCamelCase
function MyAwesomeButton() {
  // 함수코드들
  // return에 : dom에 그려야할 코드 작성
  return (
    <button
      style={{
        background: "red",
        color: "yellow",
        padding: "15px",
        border: "2px solid yellow",
      }}
    >
      너무 잘 만든 버튼
    </button>
  );
}

function MyNewHeader() {
  // js 주석
  /*
  js 주석
   */
  return (
    <h1
      style={{
        background: "skyblue",
        border: "2px solid skyblue",
      }}
    >
      {/* jsx 주석 */}
      내가 작성한 제목
    </h1>
  );
}

function App3() {
  return (
    <>
      {/*h1>lorem3^p>lorem^button*2>lorem1*/}
      <h1>Lorem ipsum dolor.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab beatae
        debitis dicta harum magnam neque suscipit unde ut. Dolor exercitationem
        maxime nemo nobis nulla numquam obcaecati recusandae reiciendis tempora!
      </p>
      <button>Lorem.</button>
      <button>Eius?</button>
      <hr />
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid yellow",
          padding: "10px",
        }}
      >
        잘 만든 버튼
      </button>
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "1px solid yellow",
          padding: "10px",
        }}
      >
        잘 만든 버튼
      </button>
      <MyAwesomeButton />
      <MyNewHeader />
    </>
  );
}

export default App3;
