import React, { useState } from "react";
// TODO : { }로 감싸야하는 이유????????
function MyComp1() {
  let count = 1;

  function handleButtonClick() {
    count++;
    console.log("버튼 클릭", count);
  }

  return (
    <div>
      {count} <br /> <button onClick={handleButtonClick}>count 증가</button>
    </div>
  );
}

function MyComp2() {
  // 컴포넌트 처음 그려진(Rendering) 이후에는 상태(State)가 변경되어야 다시 그려진다. (= Re-Rendering)
  // 상태(State)는 React가 관리하는 값으로, 컴포넌트는 useState()로 상태값을 얻고 상태 Update 가능하다

  // useState : 초기값을 매개변수로 받고, 현재 상태값과 상태값 업데이트 할 수 있는 메소드를 2개를 배열로 반환
  const arr = useState(1);
  let count = arr[0]; // 현재 상태
  let setCount = arr[1]; // 상태를 업데이트하는 메소드

  function handleButtonClick() {
    // 상태 변경할 때는 useState에서 받은 값의 index[1]에 있는 함수를 사용해야한다.
    setCount(count++); // 상태 변경 -> Re-Rendering
    console.log("버튼 클릭", count);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={handleButtonClick}>count 증가</button>
    </div>
  );
}

function MyComp3() {
  // const arr = useState(1);
  // const count = arr[0];
  // const updateCount = arr[1];

  // useState 분해할당
  // const a = [5, 7];
  // const [num1, num2] = a;
  const [count, setCount] = useState(1);
  function handleButtonClick() {
    setCount(count + 1);
  }

  return (
    <div>
      {count}
      <button onClick={handleButtonClick}>세번째 버튼</button>
    </div>
  );
}

function MyComp4() {
  const [message, setMessage] = useState("첫번째 메시지");

  function handleButton2Click() {
    setMessage("두번째 메시지");
    // console.log(message);
  }

  return (
    <div>
      {message}
      <br />
      <button onClick={() => setMessage("첫번째 메시지")}>1번</button>
      <button onClick={handleButton2Click}>2번</button>
    </div>
  );
}

function MyComp5() {
  const [color, setColor] = useState("black");

  return (
    <div>
      <div style={{ backgroundColor: color, padding: "20px" }}></div>
      <button onClick={() => setColor("red")}>빨강</button>
      <button onClick={() => setColor("blue")}>파랑</button>
      <button onClick={() => setColor("yellow")}>노랑</button>
    </div>
  );
}

function MyComp6() {
  const [imagePath, setImagePath] = useState("/public/bear.jpg");

  return (
    <div>
      <img className="w-100" src={imagePath} alt="" />
      <br />
      <button onClick={() => setImagePath("/public/bear.jpg")}>곰</button>
      <button onClick={() => setImagePath("/public/eagle.jpg")}>독수리</button>
      <button onClick={() => setImagePath("/public/bee.jpg")}>벌</button>
    </div>
  );
}

const images = ["/public/bear.jpg", "/public/eagle.jpg", "/public/bee.jpg"];
function MyComp7() {
  const [nextImg, setNextImg] = useState(0);
  // const [index, setIndex] = useState(0);

  function handleNextBtnClick() {
    // if (nextImg >= 2) {
    //   setNextImg(0);
    //   console.log(nextImg);
    // } else {
    //   setNextImg(nextImg + 1);
    //   console.log(nextImg);
    // }

    /*
      let nextIndex = index + 1;
      if (nextIndex >= images.length) {
        nextIndex = 0;
      }
      setIndex(nextIndex);
     */
    setNextImg((nextImg + 1) % 3);
  }

  function handlePrevBtnClick() {
    // if (nextImg <= 0) {
    //   setNextImg(2);
    // } else {
    //   setNextImg(nextImg - 1);
    // }
    /*
      let nextIndex = index - 1;
      if (nextIndex < 0) {
        nextIndex = images.length - 1;
      }
      setIndex(nextIndex);
     */
    setNextImg((nextImg + 2) % 3);
  }

  function handleNextBtnClick2() {
    setNextImg((nextImg + 1) % images.length);
  }
  function handlePrevBtnClick2() {
    setNextImg((nextImg - 1 + images.length) % images.length);
  }

  return (
    <div>
      <img className="w-100" src={images[nextImg]} alt="" />

      <button onClick={handlePrevBtnClick2}>이전</button>
      <button onClick={handleNextBtnClick2}>다음</button>
      <hr />
      <button onClick={handlePrevBtnClick}>이전</button>
      <button onClick={handleNextBtnClick}>다음</button>
    </div>
  );
}

function App23(props) {
  return (
    <div>
      <MyComp7 />
      <hr />
      {/* 이미지 경로 변경 */}
      <MyComp6 />
      <hr />
      {/* 스타일 변경 */}
      <MyComp5 />
      <hr />
      <MyComp4 />
      <hr />
      <MyComp3 />
      <hr />
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App23;
