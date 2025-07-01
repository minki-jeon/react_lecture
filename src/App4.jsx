function MyComp1() {
  return <h1>Hello React</h1>;
}

// 이름은 UpperCamelCase
// return에 그려야할 html 코드 작성
//    - 가장 상위 요소가 하나인 것만 그려야한다.
function MyComp2() {
  return <h2>Hello Component</h2>;
}

function MyComp3() {
  return (
    <h1>
      <span>안녕</span>
      <span>컴포넌트</span>
      <button>
        <span>버튼 문구</span>
      </button>
    </h1>
  );
}

// 상위요소 2개 작성 불가
function MyComp4() {
  return (
    <div>
      <div>hello</div>
      <div>div</div>
    </div>
  );
}

// 상위요소 2개이상 작성하기 위해서는 fragment( <> </> )를 추가
function MyComp5() {
  // fragment : 가장 바깥 요소가 필요없을 때 <> </> 사용
  return (
    <>
      <div>hello</div>
      <div>comp5</div>
    </>
  );
}

function MyComp6() {
  return (
    <div>
      <h1>제목</h1>
      <p>Lorem ipsum dolor.</p>
    </div>
  );
}

function MyComp7() {
  return (
    <>
      <h2>두번째 제목</h2>
      <p>Lorem ipsum dolor.</p>
    </>
  );
}

function MyComp8() {
  return <h1>hello</h1>;
}
// 여러 줄 작성 시 괄호 ( ) 안에 작성해야한다.
function MyComp9() {
  return (
    <div>
      <h1>Lorem.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum distinctio
        doloremque dolorum, ducimus ex expedita, explicabo impedit, odio
        perspiciatis placeat possimus quam quo sequi. Ad consectetur modi
        pariatur quidem voluptatibus?
      </p>
    </div>
  );
}

function App4() {
  return (
    <>
      <MyComp1 />
      <MyComp2 />
      <MyComp3 />
      <MyComp4 />
      <MyComp5 />
      <MyComp6 />
      <MyComp7 />
      <MyComp8 />
      <MyComp9 />
      {/*
      <div>
        <h1>제목</h1>
        <p>lorem3</p>
       </div>
    */}
      <MyComp7 />
      {/*
    <h2>두번째 제목</h2>
    <p>lorem3</p>
    */}
    </>
  );
}

export default App4;
