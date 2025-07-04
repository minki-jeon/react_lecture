import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useSearchParams } from "react-router";
import { Button } from "react-bootstrap";

function Child1() {
  const [keyword, setKeyword] = useState("");
  const [params, setSearchParams] = useSearchParams();

  function handleSearchClick() {
    // Set Query String
    setSearchParams({ keyword: keyword });
  }

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handlePageButtonClick(num) {
    console.log(num + "로 이동");
    const nextSearchParams = new URLSearchParams(params);
    nextSearchParams.set("page", num);
    setSearchParams(nextSearchParams);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="검색어"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button onClick={handleSearchClick}>검색</button>
      <hr />
      <div className="d-flex justify-content-between">
        {pageNumbers.map((num) => (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => handlePageButtonClick(num)}
            key={num}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}

function Child2() {
  const [keyword, setKeyword] = useState("");
  const [params, setSearchParams] = useSearchParams();

  function handleSearchButtonClick() {
    setSearchParams({ keyword: keyword });
  }

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function handlePageButtonClick(num) {
    console.log("page-num:", num);
    const nextParams = new URLSearchParams(params); // 객체 복사
    nextParams.set("page", num); // 복사한 객체에 요소 추가
    setSearchParams(nextParams); // 복사한 객체를 기존 객체(URLSearchParams()) 다시 Set
  }

  return (
    <div>
      <div className="row g-3">
        <div className="col-auto">
          <input
            type="text"
            placeholder="회원 검색"
            className="form-control"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="form-control" onClick={handleSearchButtonClick}>
            검색
          </button>
        </div>
      </div>
      <hr />
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {pageNumbers.map((num) => (
              <li className="page-item" key={num}>
                <a
                  className="page-link"
                  key={num}
                  onClick={() => handlePageButtonClick(num)}
                >
                  {num}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <hr />
      <div>
        {pageNumbers.map((num) => (
          <Button
            key={num}
            variant="outline-primary"
            onClick={() => handlePageButtonClick()}
          >
            {num}
          </Button>
        ))}
      </div>
    </div>
  );
}

function App47(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/board/list" element={<Child1 />} />
          <Route path="/member/list" element={<Child2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App47;
