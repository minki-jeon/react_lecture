import React from "react";

function App22(props) {
  function handleLinkClick(e) {
    // event.preventDefault() : 브라우저 기본 동작(event) 실행 방지
    e.preventDefault();
    // 정의한 href가 동작하지 않게됨.
    console.log("링크 클릭됨");
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log("검색 버튼 클릭");
  }

  return (
    <div>
      {/* onSubmit 이벤트 동작 발생 => onSubmit 이벤트 동작을 하지않고, 콘솔 메시지 출력 */}
      <form action="https://search.naver.com/search.naver">
        <input type="text" name="query" />
        {/*<button onClick={(e) => {e.preventDefault(); console.log("검색 버튼 클릭")} }>검색</button>*/}
        <button onClick={handleSearchSubmit}>검색</button>
      </form>
      <button onClick={() => console.log("버튼 클릭됨")}>버튼</button>
      <a href="https://www.google.com" onClick={handleLinkClick}>
        구글로 이동
      </a>
    </div>
  );
}

export default App22;
