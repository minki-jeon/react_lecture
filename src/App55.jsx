import React, { useState } from "react";
import axios from "axios";

function App55(props) {
  const [myFile, setMyFile] = useState([]);

  function handleButton1Click() {
    axios.put("/api/main30/sub1");
  }

  function handleButton2Click() {
    axios.delete("/api/main30/sub2");
  }

  function handleButton3Click() {
    axios.put("/api/main30/sub3");
  }

  function handleButton4Click() {
    axios.delete("/api/main30/sub4");
  }

  function handleButton5Click() {
    axios.put("/api/main30/sub5", {
      nickName: "트럼프",
      team: {
        name: "ny",
        location: "korea",
      },
      age: 77,
      married: true,
      address: ["seoul", "busan", "jeju"],
    });
  }

  function handleButton6Click() {
    axios.delete("api/main30/sub6", {
      params: {
        name: "son",
        id: 77,
      },
    });
  }

  function handleButton7Click() {
    // file 전송시 postForm 또는 putForm
    axios.postForm("/api/main30/sub7", {
      myFile: myFile,
      name: "흥민",
      age: 33,
    });
  }

  return (
    <div>
      <div>
        <input type="file" onChange={(e) => setMyFile(e.target.files[0])} />
        <button onClick={handleButton7Click}>7 post w/ file</button>
        <hr />
      </div>

      <button onClick={handleButton6Click}>6 delete /w 요청</button>
      <hr />
      <button onClick={handleButton5Click}>5 put /w 요청</button>
      <hr />
      <button onClick={handleButton4Click}>4 delete 요청</button>
      <hr />
      <button onClick={handleButton3Click}>3 put 요청</button>
      <hr />
      <button onClick={handleButton2Click}>2 delete 요청</button>
      <hr />
      <button onClick={handleButton1Click}>1 put 요청</button>
    </div>
  );
}

export default App55;
