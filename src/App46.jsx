import React from "react";
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router";

function Child1() {
  // useSearchParams hook : query string (request param) 정보 얻기
  //    - [URLSearchParams, set 메소드]를 배열로 리턴
  const [params] = useSearchParams();
  console.log(params);
  console.log("id", params.get("id"));
  return (
    <div>
      <h3>{params.get("id")}번 게시물 보기</h3>
    </div>
  );
}

function Child2() {
  const [params] = useSearchParams();
  return <h3>{params.get("id")} 회원 정보 보기</h3>;
}

function App46(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="board/detail" element={<Child1 />} />
          <Route path="member/detail" element={<Child2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App46;
