function MyComp1(param) {
  console.log(param);
  console.log(param.color);
  const color = param.color;
  console.log("컬러변수", color);
  return null;
}

function MyComp2(param) {
  // const address = param.address;
  const { address } = param; // 분해할당
  console.log("주소", address);
  return null;
}

// 분해할당
// {address: "뉴욕"}
function MyComp3({ address }) {
  console.log("주소3", address);
  return null;
}
function MyComp4({ city }) {
  console.log("도시", city);
  return null;
}
function MyComp5({ city, country, address = "기본 주소" }) {
  console.log("도시5", city);
  console.log("나라5", country);
  console.log("주소5", address);
  return null;
}

function MyComp6({ score, className, location = "기본위치" }) {
  console.log("점수6", score);
  console.log("분류6", className);
  console.log("위치6", location);
  return null;
}

function App6() {
  return (
    <>
      <MyComp1 color="yellow" />
      {/*  MyComp1({color:"yellow"}) */}
      <MyComp1 color="red" />
      <MyComp2 address="seoul" />
      <MyComp2 address="jeju" />
      <MyComp3 address="뉴욕" />
      <MyComp3 address="시카고" />
      <MyComp4 city="서울" />
      <MyComp4 city="워싱턴" />
      <MyComp5 city="인천" country="한국" address="강남" />
      <MyComp5 city="텍사스" country="미국" address="라스베가스" />
      <MyComp5 city="오사카" country="일본" />
      <MyComp6 score="A" className="중앙" location="신촌" />
      <MyComp6 score="B" className="센터" location="강남" />
      <MyComp6 score="C" className="기린" />
    </>
  );
}

export default App6;
