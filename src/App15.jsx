import App14 from "./App14";
import { MyAwesomeAlert } from "./App14";

// App14.jsx에 App14, MyAwesomeAlert 컴포넌트 작성
// App14는 default export
// MyAwesomeAlert는 named export

// App15.jsx에서 App14, MyAwesomeAlert를 import해서 사용

function App15() {
  return (
    <>
      <App14 />
      <MyAwesomeAlert />
    </>
  );
}

export default App15;
