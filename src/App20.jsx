import React from "react";
import { Button } from "react-bootstrap";

function AwesomeButton({
  children,
  onClick = () => console.log("멋진버튼1 클릭"),
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px",
        backgroundColor: "black",
        color: "white",
        fontSize: "2rem",
      }}
    >
      {children}
    </button>
  );
}

function AwesomeHeader({ children, onDoubleClick }) {
  return (
    <h1
      onDoubleClick={onDoubleClick}
      style={{
        fontStyle: "italic",
        fontWeight: "bold",
        padding: "10px",
        backgroundColor: "skyblue",
        color: "yellow",
        fontSize: "2rem",
      }}
    >
      {children}
    </h1>
  );
}
// TODO : propTypes ???
// AwesomeHeader.propTypes = {
//   onDoubleClick: PropTypes.func,
//   children: PropTypes.node
// };

function App20(props) {
  const handleAwesomeHeaderDoubleClick = () => {
    console.log("제목 더블클릭");
  };
  const handleAwesomeHeaderDoubleClick2 = () => {
    console.log("제목 더블클릭2");
  };
  return (
    <div>
      <AwesomeHeader onDoubleClick={handleAwesomeHeaderDoubleClick}>
        제목 마우스 더블클릭
      </AwesomeHeader>
      <AwesomeHeader onDoubleClick={handleAwesomeHeaderDoubleClick2}>
        제목2 마우스 더블클릭
      </AwesomeHeader>

      <hr />
      <button onClick={() => console.log("보통의 버튼 클릭")}>
        브라우저 컴포넌트 버튼
      </button>
      {/* 컴포넌트의 event prop (onClick) + 컨텐츠(Children) */}
      <AwesomeButton onClick={() => console.log("멋진버튼1 클릭")}>
        멋진버튼1
      </AwesomeButton>
      <AwesomeButton>멋진버튼2</AwesomeButton>

      <Button
        variant="outline-secondary"
        onClick={() => console.log("부트스트랩 버튼 클릭")}
      >
        부트스트랩 버튼
      </Button>
    </div>
  );
}

export default App20;
