import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

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
