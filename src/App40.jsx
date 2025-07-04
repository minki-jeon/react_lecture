import React, { useState } from "react";

function MyComp1() {
  const [url, setUrl] = useState("/board/list");
  const [target, setTarget] = useState(url);
  let childComp = null;
  switch (target) {
    case "/board/list":
      childComp = (
        <div>
          <h3>게시물 목록</h3>
        </div>
      );
      break;
    case "/member/list":
      childComp = (
        <div>
          <h3>회원 목록</h3>
        </div>
      );
      break;
    case "/board/3":
      childComp = (
        <div>
          <h3>3번 게시물 내용</h3>
        </div>
      );
      break;
    case "/board/4":
      childComp = (
        <div>
          <h3>4번 게시물 내용</h3>
        </div>
      );
      break;
    default:
      childComp = (
        <div>
          <h3>기본 화면</h3>
        </div>
      );
      break;
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={() => setTarget(url)}>이동</button>
      </div>
      <div>{childComp}</div>
    </div>
  );
}

function App40(props) {
  return (
    <div>
      <MyComp1 />
    </div>
  );
}

export default App40;
