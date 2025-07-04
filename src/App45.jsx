import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router";

function Child1() {
  // react route : 경로(Path) => Dynamic Segments
  let param = useParams(); // Dynamic Segments를 얻는 hook
  console.log(param);

  return (
    <div>
      <h3>{param.mySubPath}번 게시물 보기</h3>
    </div>
  );
}

function Child2() {
  // let param = useParams();
  const { content } = useParams();
  return <h3>{content} 배우기</h3>;
}

function App45(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn">
            <Route path=":mySubPath" element={<Child1 />} />
          </Route>
          <Route path="java">
            <Route index path=":content" element={<Child2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App45;
