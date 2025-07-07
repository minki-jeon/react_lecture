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

  return (
    <div>
      <button onClick={handleButton3Click}>요청 보내기 3</button>
      <hr />
      <button onClick={handleButton2Click}>요청 보내기 2</button>
      <hr />
      <button onClick={handleButton1Click}>요청 보내기 1</button>
    </div>
  );
}

export default App53;
