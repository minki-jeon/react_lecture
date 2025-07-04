import React from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";

function ReactLayout() {
  return (
    <div>
      <div className="row">
        <div
          className="col-3"
          style={{ background: "skyblue", fontSize: "2rem" }}
        >
          {/* 전체 페이지를 다시 마운트하지않으려면,
                a 태그 대신 ReactRouter의 Link Component 사용 */}
          <div className="border">
            {/* a href => Link to */}
            <Link to="./install">install</Link>
          </div>
          <div className="border">
            <Link to="./game">game</Link>
          </div>
          <div className="border">
            <Link to="./state">state</Link>
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
        <div>
          <a href="/react/install">인스톨</a>
        </div>
        <div>
          <a href="/react/game">게임</a>
        </div>
        <div>
          <a href="/react/state">스탯</a>
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
