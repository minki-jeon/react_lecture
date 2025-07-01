function MyComp1({ color, score, city, kids, skills, person }) {
  console.log("color", color); // String
  console.log("score", score); // Double
  console.log("city", city); // String
  console.log("kids", kids); // boolean
  console.log("skills", skills); // 배열
  console.log("person", person); // 객체

  return null;
}

function MyComp2({ name, age, address, married }) {
  console.log("name", name);
  console.log("age", age);
  console.log("address", address);
  console.log("married", married);

  return null;
}

// props의 타입은 뭐든지 가능
// String은 ""
// 나머지는 { }
function App7() {
  return (
    <>
      <MyComp1
        color="yellow"
        score={123.123}
        city={"seoul"}
        kids={true}
        skills={["java", "css", "react"]}
        person={{ name: "son", age: 33, team: "토트넘" }}
      />
      <MyComp2
        name="lee"
        age={44}
        address={{ city: "seoul", country: "korea" }}
        married={false}
      />
    </>
  );
}

export default App7;
