import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

function App43(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="board/list" element={<h3>게시물 목록</h3>} />
          <Route path="board/detail" element={<h3>게시물 상세</h3>} />
          <Route path="board/edit" element={<h3>게시물 수정</h3>} />
          <Route path="member">
            <Route path="list" element={<h3>회원 목록</h3>} />
            <Route path="detail;" element={<h3>회원 상세</h3>} />
            <Route path="edit" element={<h3>회원 수정</h3>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App43;
