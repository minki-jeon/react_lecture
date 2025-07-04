import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

// localhost:5173/learn : <h3>react 배우기</h3>
// localhost:5173/tutorial : <h3>react 공부하기</h3>
// localhost:5173/install : <h3>react 설치하기</h3>
function Learn() {
  return (
    <div>
      <h3>React 배우기</h3>
    </div>
  );
}

function Tutorial() {
  return (
    <div>
      <h3>React 공부하기</h3>
    </div>
  );
}

function Install() {
  return (
    <div>
      <h3>React 설치하기</h3>
    </div>
  );
}

function ReferenceReact() {
  return (
    <div>
      <h3>React 참고문서</h3>
    </div>
  );
}

// localhost:5173/reference/react : <h3>react 참고문서</h3>
function App42(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="learn" element={<Learn />}></Route>
          <Route path="tutorial" element={<h3>React 공부하기</h3>}></Route>
          <Route path="install" element={<Install />}></Route>
          <Route path="reference/react" element={<ReferenceReact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App42;
