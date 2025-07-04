import React from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
} from "react-router";
import "./assets/mystyle.css";

function ReactLayout() {
  return (
    <div>
      <div className="row">
        <div
          className="col-3"
          style={{ background: "skyblue", fontSize: "2rem" }}
        >
          <div className="border">
            <a href="./install">install</a>
          </div>
          <div className="border">
            <a href="./game">game</a>
          </div>
          <div className="border">
            <a href="./state">state</a>
          </div>
        </div>
        <div
          className="col d-flex justify-content-center align-items-center"
          style={{ background: "yellow" }}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

function ReactComponent() {
  return (
    <div className="d-flex gap-3 p-5">
      <div className="w-25 bg-body-tertiary">
        {/* Link : 전체 페이지를 다시 마운트하지않으려면,
                  a 태그 대신 ReactRouter의 Link Component 사용 */}
        {/* NavLink : 현재 경로와 to prop의 값이 같으면 active class 추가한다 */}
        <div>
          {/* a href => NavLink to */}
          <NavLink to="/react/install">인스톨</NavLink>
        </div>
        <div>
          <NavLink to="/react/game">게임</NavLink>
        </div>
        <div>
          <NavLink to="/react/state">스탯</NavLink>
        </div>
      </div>
      <div className="flex-1 bg-primary-subtle">
        <Outlet />
      </div>
    </div>
  );
}

function App49(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/*<Route path="react" element={<ReactLayout />}>*/}
          <Route path="react" element={<ReactComponent />}>
            <Route
              path="install"
              element={
                <div>
                  <h3>INSTALL 화면</h3>
                </div>
              }
            />
            <Route
              path="game"
              element={
                <div>
                  <h3>GAME 화면</h3>
                </div>
              }
            />
            <Route
              path="state"
              element={
                <div>
                  <h3>STATE 화면</h3>
                </div>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App49;
