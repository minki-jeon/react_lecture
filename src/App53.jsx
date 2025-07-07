import React from "react";
import axios from "axios";

function App53(props) {
  function handleButton1Click() {
    axios.request({ method: "get", url: "http://localhost:8080" });
  }

  function handleButton2Click() {
    axios.request({ method: "get", url: "/api/main28/sub1" });
  }

  function handleButton3Click() {
    axios.request({ method: "post", url: "/api/main28/sub2" });
  }

  function handleButton4Click() {
    axios.request({ method: "get", url: "/api/main28/sub3" });
  }

  function handleButton5Click() {
    axios.request({ method: "post", url: "/api/main28/sub4" });
  }

  function handleButton6Click() {
    // axios.request({ method: "get", url: "/api/main28/sub6" });
    axios.get("/api/main28/sub6");
  }

  function handleButton7Click() {
    axios.get("/api/main28/sub7");
  }

  function handleButton8Click() {
    axios.get("/api/main28/sub8?name=son&age=33");
  }

  function handleButton9Click() {
    axios.get("/api/main28/sub9?address=seoul&score=88.15");
  }

  function handleButton10Click() {
    // query string 직접 입력
    axios.get("/api/main28/sub10?address=서울 강남&score=88.15");
  }

  function handleButton11Click() {
    // query string 입력 대신 config.params에 객체 대입 (자동 encoding)
    axios.get("/api/main28/sub11", {
      params: { address: "서울 신촌", score: "77.77" },
    });
  }

  function handleButton12Click() {
    axios.get("/api/main28/sub12", {
      params: { fruit: "apple", price: "6" },
    });
  }

  return (
    <div>
      <button onClick={handleButton12Click}>요청 12 + query string</button>
      <hr />
      <button onClick={handleButton11Click}>요청 11 + query string</button>
      <hr />
      <button onClick={handleButton10Click}>요청 10 + query string</button>
      <hr />
      <button onClick={handleButton9Click}>요청 9 + query string</button>
      <hr />
      <button onClick={handleButton8Click}>요청 8 w/ query string</button>
      <hr />
      <button onClick={handleButton7Click}>요청 보내기 7</button>
      <hr />
      <button onClick={handleButton6Click}>요청 보내기 6</button>
      <hr />
      <button onClick={handleButton5Click}>요청 보내기 5</button>
      <hr />
      <button onClick={handleButton4Click}>요청 보내기 4</button>
      <hr />
      <button onClick={handleButton3Click}>요청 보내기 3</button>
      <hr />
      <button onClick={handleButton2Click}>요청 보내기 2</button>
      <hr />
      <button onClick={handleButton1Click}>요청 보내기 1</button>
    </div>
  );
}

export default App53;
