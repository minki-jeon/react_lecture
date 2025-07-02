import React, { useState } from "react";
import data from "bootstrap/js/src/dom/data.js";

function MyComp1() {
  const arr = ["java", "react", "css"];

  // const paras = arr.map((item) => <p>{item}</p>);
  // console.log(paras);

  // return <div>{paras}</div>;
  return (
    <div>
      {arr.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

function MyComp2() {
  const datas = [9, 5, 1, 0];

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp3() {
  const [datas, setDatas] = useState(["java", "react", "spring"]);

  function handleButtonClick() {
    datas.push("boot");
    console.log(datas);
    // React는 배열을 참조값 비교로 상태가 변경되었는지 확인한다.
    // 따라서 이전 상태의 배열을 복사한 새 배열을 상태 변경하여 사용해야 한다.
    setDatas(datas);
  }

  console.log("상태 변경됨1");

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}

function MyComp4() {
  const [datas, setDatas] = useState(["java", "react", "spring"]);

  function handleButtonClick() {
    // React는 배열을 참조값 비교로 상태가 변경되었는지 확인한다.
    // 따라서 이전 상태의 배열을 복사한 새 배열을 상태 변경하여 사용해야 한다.
    const nextDatas = [...datas, "boot"];
    setDatas(nextDatas);
  }

  console.log("상태 변경됨2");

  return (
    <div>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleButtonClick}>추가</button>
    </div>
  );
}

function MyComp5() {
  const [list, setList] = useState(["곰", "독수리", "벌"]);

  function handleBearButtonClick() {
    const nextList = [...list];
    nextList.push("곰");
    setList(nextList);
  }

  function handleEagleButtonClick() {
    // const nextList = [...list];
    // nextList.push("독수리");
    const nextList = [...list, "독수리"];
    setList(nextList);
  }

  function handleBeeButtonClick() {
    setList([...list, "벌"]);
  }

  return (
    <div>
      {/*button*3+ul*/}
      <button onClick={handleBearButtonClick}>곰 추가</button>
      <button onClick={handleEagleButtonClick}>독수리 추가</button>
      <button onClick={handleBeeButtonClick}>벌 추가</button>
      <button onClick={() => setList([...list, "사자"])}>사자 추가</button>
      <button
        onClick={() => {
          const nextList = [...list];
          nextList.pop();
          setList(nextList);
        }}
      >
        마지막 요소 지우기
      </button>
      {/* [...list].pop() 은 숫자 3을 반환하여 list가 숫자가 되면서 렌더링 오류 발생  */}
      {/*<button onClick={() => {setList([...list].pop());}}>마지막 요소 지우기</button>*/}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp6() {
  // 추가버튼 클릭 시 input에 입력된 내용이 배열에 추가 되도록 코드 작성
  // - 입력하면(onChange) 상태값 변경(setItem())하고, 버튼 클릭(onClick)하면 입력값(item)을 배열의 상태값 변경(setDatas)한다.
  const [datas, setDatas] = useState(["java", "react", "css"]);
  const [item, setItem] = useState("");

  function handleButtonClick() {
    setDatas([...datas, item]);
    setItem("");
  }

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleButtonClick}>추가</button>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// 본인 작성 (javascript 함수 사용)
function MyComp6_2() {
  const [datas, setDatas] = useState(["java", "react", "css"]);

  function handleAddButtonClick() {
    console.log("추가 버튼 클릭");
    console.log(document.getElementById("inputText").value);
    const inputText = document.getElementById("inputText").value;
    const arr = [...datas, inputText];
    setDatas(arr);
  }

  return (
    <div>
      <input type="text" id="inputText" />
      <button onClick={handleAddButtonClick}>추가</button>
      <ul>
        {datas.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function App29(props) {
  return (
    <div>
      <MyComp6 />
      <hr />
      <MyComp6_2 />
      <hr />
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

export default App29;
