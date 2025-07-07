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

  return (
    <div>
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
