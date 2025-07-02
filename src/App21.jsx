import React from "react";

function App21(props) {
  function handleButtonClick(e) {
    // e : (관습) event 객체의 약자
    console.log(e);

    // stopPropagation() : 이벤트 전달 막기
    e.stopPropagation();
    console.log("버튼 클릭");
  }

  return (
    // Event bubbling : button의 이벤트(onClick)가 실행될 때, 상위 태그(div) 영역의 이벤트(onClick)도 실행되는 현상
    // - stopPropagation : 이벤트 전달 막기, bubbling을 방지하기 위해 사용하는 method
    <div className="p-5 bg-info" onClick={() => console.log("div 클릭")}>
      <p
        className="bg-danger"
        onClick={(e) => {
          e.stopPropagation();
          console.log("para 클릭");
        }}
      >
        Lorem ipsum dolor.
      </p>
      <button onClick={handleButtonClick}>버튼</button>
    </div>
  );
}

export default App21;
