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

  function handleButton5Click() {
    axios.get("/api/main32/sub5").then((res) => {
      const data = res.data;
      console.log(data.id, data.city, data.phone.phone1, data.phone.phone2);
    });
  }

  function handleButton6Click() {
    axios.get("/api/main32/sub6").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.name,
        data.address[0],
        data.address[1],
        data.address[2],
      );
    });
  }

  function handleButton7Click() {
    axios.get("/api/main32/sub7").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.name,
        data.fruits[0],
        data.fruits[1],
        data.address.city,
        data.address.country,
      );
    });
  }

  function handleButton8Click() {
    axios.get("/api/main32/sub8").then((res) => {
      const data = res.data;
      console.log(
        data.id,
        data.title,
        data.category.author,
        data.category.genre,
        data.orders[0],
        data.orders[1],
        data.price,
      );
    });
  }

  function handleButton15Click() {
    // axios.then()은 200번대 응답 코드에만 실행된다.
    // 200번대 외에는 catch 메소드 실행한다.
    axios
      .get("/api/main32/sub15")
      .then((res) => {
        console.log("15, 성공적인 응답 받음");
      })
      .catch((err) => {
        console.log("15, 오류 메시지");
      });
  }

  function handleButton16Click() {
    axios
      .get("/api/main32/sub16")
      .then((res) => {
        console.log("16", "성공적인 응답 받음");
      })
      .catch((err) => {
        console.log("16, 오류 메시지");
      });
  }

  function handleButton17Click() {
    axios
      .get("/api/main32/sub17")
      .then((res) => {
        console.log("17잘됨");
      })
      .catch((err) => {
        console.log("17 잘 안됨");
      });
  }

  function handleButton18Click() {
    axios
      .get("/api/main32/sub18")
      .then((res) => {
        console.log("18잘됨");
      })
      .catch((err) => {
        console.log("18 잘 안됨");
      });
  }

  function handleButton19Click() {
    axios.get("/api/main32/sub19").then((res) => {
      console.log(res.data);
    });
  }

  function handleButton20Click() {
    axios.get("/api/main32/sub20").catch((err) => {
      console.log(err.response.data);
    });
  }

  function handleButton21Click() {
    axios.get("/api/main32/sub21").then((res) => {
      console.log("code 201");
      console.log(res.data[0]);
      console.log(res.data[1]);
      console.log(res.data[2]);
    });
  }

  function handleButton22Click() {
    axios.get("/api/main32/sub22").catch((err) => {
      console.log("code 500");
      console.log(err.response.data[0]);
      console.log(err.response.data[1]);
      console.log(err.response.data[2]);
    });
  }

  function handleButton23Click() {
    axios
      .get("/api/main32/sub23")
      .then((res) => {
        console.log("정상 동작");
        console.log(res.status);
      })
      .catch((err) => {
        console.log("동작 오류");
        console.log(err.response.status);
        if (err.response.status === 400) {
          console.log("클라이언트 오류");
        } else if (err.response.status === 500) {
          console.log("서버 오류");
        }
      })
      .finally(() => {
        console.log("잘되든 안되는 항상 실행되는 코드.");
      });
  }

  return (
    <div>
      <button onClick={handleButton23Click}>23 / 200, 400, 500 확률</button>
      <hr />
      <button onClick={handleButton21Click}>21 / 201번 w/ data</button>
      <button onClick={handleButton22Click}>22 / 500번 w/ data</button>
      <hr />
      <button onClick={handleButton19Click}>19 / 200번 w/ data</button>
      <button onClick={handleButton20Click}>20 / 400번 w/ data</button>
      <hr />

      <button onClick={handleButton17Click}>17 / 200번 대 응답</button>
      <button onClick={handleButton18Click}>18 / 500번 대 응답</button>

      <hr />
      <button onClick={handleButton15Click}>15 / 200번 응답</button>
      <button onClick={handleButton16Click}>16 / 400번 응답</button>

      <hr />
      <button
        onClick={() => {
          axios.get("/api/main32/sub12");
        }}
      >
        200
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub13");
        }}
      >
        405
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub14");
        }}
      >
        404
      </button>
      <hr />
      <button
        onClick={() => {
          axios.get("/api/main32/sub9");
        }}
      >
        200 code
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub10");
        }}
      >
        404 code
      </button>
      <button
        onClick={() => {
          axios.get("/api/main32/sub11");
        }}
      >
        500 code
      </button>
      <hr />
      <button onClick={handleButton8Click}>직렬화된 json 데이터 받기 8</button>
      <hr />
      <button onClick={handleButton7Click}>직렬화된 json 데이터 받기 7</button>
      <hr />
      <button onClick={handleButton6Click}>직렬화된 json 데이터 받기 6</button>
      <hr />
      <button onClick={handleButton5Click}>직렬화된 json 데이터 받기 5</button>
      <hr />
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
