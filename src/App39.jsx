import React from "react";
import { Table } from "react-bootstrap";

function MyComp1() {
  const list = ["java", "css", "react", "boot"];
  // key prop : list를 component로 그릴 때 각 component를 유일하게 식별하는 값
  //      - key로 동일한 component 여부 확인하여 효율적으로 component 출력
  //      - 보통 key prop의 값은, db의 primary key를 사용한다.
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function MyComp2() {
  const board = [
    { id: 3, title: "게시물 3번 제목", author: "SON" },
    { id: 5, title: "게시물 5번 제목", author: "PARK" },
    { id: 9, title: "게시물 9번 제목", author: "SON" },
    { id: 14, title: "또 다른 제목", author: "CHA" },
    { id: 21, title: "게시물 제목 21", author: "PARK" },
  ];
  return (
    <div>
      <Table striped={true}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {board.map((item) => (
            // key prop
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function App39(props) {
  return (
    <div>
      <MyComp2 />
      <hr />
      <MyComp1 />
    </div>
  );
}

export default App39;
