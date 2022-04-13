import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import MenuMobile from "./components/MenuMobile";
import MenuDesktop from "./components/MenuDesktop";

ReactDOM.render(
  <React.StrictMode>
    <div id="nav-m">
      <MenuMobile />
    </div>
    <nav className="slider-bar">
      <MenuDesktop />
    </nav>
    <div id="section">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
