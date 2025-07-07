import React from "react";
import axios from "axios";

function App54(props) {
  function handleButton1Click() {
    axios.request({ method: "post", url: "/api/main29/sub1" });
  }

  function handleButton2Click() {
    axios.post("/api/main29/sub2"); // .request()에 비해 사용 빈도가 높다.
  }

  function handleButton3Click() {
    axios.post("/api/main29/sub3");
  }

  function handleButton4Click() {
    // 두번째 파라미터는 json으로 직렬화(stringify, ending) 처리되어 전송
    axios.post("api/main29/sub4", { name: "son", age: 44 });
  }

  function handleButton5Click() {
    axios.post("/api/main29/sub5", {
      address: "seoul",
      score: 88.12,
      country: "korea",
    });
  }

  function handleButton6Click() {
    axios.post("/api/main29/sub6", {
      val1: "신촌", // string
      val2: 66, // number
      val3: 77.12, // number
      val4: true, // boolean
      val5: null, // NULL
    });
  }

  return (
    <div>
      <button onClick={handleButton6Click}>
        post 6 w/ data (boolean, string, number, null)
      </button>
      <hr />
      <button onClick={handleButton5Click}>post 5 w/ data</button>
      <hr />
      <button onClick={handleButton4Click}>post 4 w/ data</button>
      <hr />
      <button onClick={handleButton3Click}>post 3</button>
      <hr />
      <button onClick={handleButton2Click}>post 2</button>
      <hr />
      <button onClick={handleButton1Click}>post 1</button>
    </div>
  );
}

export default App54;
