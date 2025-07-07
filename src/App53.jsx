import React, { useState } from "react";
import axios from "axios";

function App53(props) {
  // use...(hook)들은 컴포넌트 최상단에 작성( 조건문, 반복문 사용금지 )
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");

  const [fruit, setFruit] = useState("");
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState("");

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

  function handleButton13Click() {
    const searchParams = new URLSearchParams();
    searchParams.set("name", "흥민");
    searchParams.set("age", "33");
    searchParams.set("address", "서울 강남");

    axios.get("/api/main28/sub13", { params: searchParams });
  }

  function handleButton14Click() {
    const searchParams = new URLSearchParams();
    searchParams.set("city", "seoul");
    searchParams.set("country", "korea");
    searchParams.set("id", "22");

    axios.get("/api/main28/sub14", { params: searchParams });
  }

  function handleButton15Click() {
    const p = new URLSearchParams();
    p.set("name", "hm");
    p.set("age", "33");
    p.set("country", "한국"); // encoding 되는 것을 확인
    console.log(p.toString());

    // axios.get("/api/main28/sub15?" + p.toString());
    axios.get("/api/main28/sub15?" + p);
  }

  function handleButton16Click() {
    const p = new URLSearchParams();
    p.set("fruit", "apple");
    p.set("price", "5000");
    p.set("location", "강남");

    // axios.get("/api/main28/sub16?" + p.toString());
    // axios.get("/api/main28/sub16?" + p);
    axios.get(`/api/main28/sub16?${p}`);
  }

  function handleButton17Click() {
    // query string 직접 완성
    axios.get(`/api/main28/sub17?name=${name}&age=${age}&city=${city}`);
  }
  function handleButton18Click() {
    // URLSearchParams를 연결연산자로 붙이기
    const p = new URLSearchParams();
    p.set("name", name);
    p.set("age", age);
    p.set("city", city);
    // axios.get(`/api/main28/sub18?` + p);
    axios.get(`/api/main28/sub18?${p}`);
  }
  function handleButton19Click() {
    // URLSearchParams를 config에 넣기
    const p = new URLSearchParams();
    p.set("name", name);
    p.set("age", age);
    p.set("city", city);
    // axios.get(`/api/main28/sub18?` + p);
    axios.get("/api/main28/sub19?", { params: p });
  }
  function handleButton20Click() {
    // 객체를 config.params에 넣기
    axios.get("/api/main28/sub20", {
      params: {
        name: name,
        age: age,
        city: city,
      },
    });
  }

  function handleButton21Click() {
    axios.get(
      `/api/main28/sub21?fruit=${fruit}&price=${price}&location=${location}`,
    );
  }

  function handleButton22Click() {
    const p = new URLSearchParams();
    p.set("fruit", fruit);
    p.set("price", price);
    p.set("location", location);
    axios.get(`/api/main28/sub22?${p}`);
  }

  function handleButton23Click() {
    const p = new URLSearchParams();
    p.set("fruit", fruit);
    p.set("price", price);
    p.set("location", location);
    axios.get(`/api/main28/sub23`, { params: p });
  }

  function handleButton24Click() {
    axios.get("/api/main28/sub24", {
      params: {
        fruit: fruit,
        price: price,
        location: location,
      },
    });
  }

  return (
    <div>
      <hr />
      <div>
        <div>
          <input
            type="text"
            value={fruit}
            onChange={(e) => setFruit(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      <button onClick={handleButton24Click}>요청 24</button>
      <button onClick={handleButton23Click}>요청 23</button>
      <button onClick={handleButton22Click}>요청 22</button>
      <button onClick={handleButton21Click}>요청 21</button>
      <hr />

      <div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>
      <button onClick={handleButton20Click}>요청 20</button>
      <button onClick={handleButton19Click}>요청 19</button>
      <button onClick={handleButton18Click}>요청 18</button>
      <button onClick={handleButton17Click}>요청 17</button>

      <hr />
      <button onClick={handleButton16Click}>
        요청 16 URLSearchParams 객체 활용{" toString "}
      </button>
      <hr />
      <button onClick={handleButton15Click}>
        요청 15 URLSearchParams 객체 활용{" toString "}
      </button>
      <hr />
      <button onClick={handleButton14Click}>
        요청 14 URLSearchParams 객체 활용{" "}
      </button>
      <hr />
      <button onClick={handleButton13Click}>
        요청 13 URLSearchParams 객체 활용{" "}
      </button>
      <hr />
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
