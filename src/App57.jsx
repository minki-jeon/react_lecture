import React from "react";
import axios from "axios";

function App57(props) {
  function handleButton1Click() {
    axios.get("/api/main32/sub1").then((res) => {
      console.log("응답 받은 후 실행되는 코드");
      console.log(res.data);
    });
  }

  function handleButton2Click() {
    axios.get("/api/main32/sub2").then((res) => {
      console.log(res.data);
    });
  }

  function handleButton3Click() {
    axios.get("/api/main32/sub3").then((res) => {
      console.log(res.data); // = axios에서 json이 parsing되어 javascript object로 반환된다.
      console.log(res.data.name);
      console.log(res.data.age);
      console.log();
      const data = res.data;
      console.log(data.name);
      console.log(data.age);
    });
  }

  function handleButton4Click() {
    axios.get("/api/main32/sub4").then((res) => {
      const data = res.data;
      console.log(data.city, data.address, data.country);
    });
  }

  return (
    <div>
      <button onClick={handleButton4Click}>직렬화된 json 데이터 받기 4</button>
      <hr />
      <button onClick={handleButton3Click}>직렬화된 json 데이터 받기 3</button>
      <hr />
      <button onClick={handleButton2Click}>데이터 받기 2</button>
      <hr />
      <button onClick={handleButton1Click}>데이터 받기 1</button>
    </div>
  );
}

export default App57;
