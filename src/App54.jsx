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

  function handleButton7Click() {
    axios.post("/api/main29/sub7", {
      address: "seoul",
      score: 88.12,
      age: 33,
      married: true,
    });
  }

  function handleButton8Click() {
    axios.post("/api/main29/sub8", {
      address: "강남",
      age: 77,
      fruits: ["apple", "lemon", "mango"], // array
    });
  }

  function handleButton9Click() {
    axios.post("/api/main29/sub9", {
      name: "son",
      teams: ["서울", "런던", "제주"],
      // Object
      person: {
        name: "흥민",
        address: "서울",
        age: 33,
      },
    });
  }

  function handleButton10Click() {
    axios.post("/api/main29/sub10", {
      cityList: ["서울", "경기", "부산"],
      team: { name: "토트넘", location: "런던" },
    });
  }

  function handleButton11Click() {
    axios.post("/api/main29/sub11", ["java", "boot", "spring"]);
  }

  function handleButton12Click() {
    axios.post("/api/main29/sub12", [
      {
        name: "손",
        age: 55,
        address: "서울",
      },
      {
        name: "박",
        age: 66,
        address: "수원",
      },
      { name: "차", age: 77, address: "인천" },
    ]);
  }

  function handleButton13Click() {
    axios.post("/api/main29/sub13", {
      nickName: "흥민", //string
      // object
      team: {
        name: "토트넘",
        location: "런던",
      },
      age: 33, // number
      married: false, // boolean
      address: ["서울", "런던", "베를린"], // array
    });
  }

  function handleButton14Click() {
    axios.post("/api/main29/sub14", {
      person: {
        name: "흥민",
        age: 55,
      },
      city: "서울",
      score: 88.12,
      checked: true,
      fruits: ["apple", "lemon", "mango"],
    });
  }

  return (
    <div>
      <button onClick={handleButton14Click}>post 14 dto</button>
      <hr />
      <button onClick={handleButton13Click}>post 13 dto</button>
      <hr />
      <button onClick={handleButton12Click}>post 12 arrayObject</button>
      <hr />
      <button onClick={handleButton11Click}>post 11 array</button>
      <hr />
      <button onClick={handleButton10Click}>post 10 w/ data (object)</button>
      <hr />
      <button onClick={handleButton9Click}>post 9 w/ data (object)</button>
      <hr />
      <button onClick={handleButton8Click}>post 8 w/ data (array)</button>
      <hr />
      <button onClick={handleButton7Click}>
        post 7 w/ data (boolean, string, number)
      </button>
      <hr />
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
