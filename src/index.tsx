import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Menu from "./components/Menu";
import { Col, Row } from "react-bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <Row>
      <Col sm={2}>
        <Menu />
      </Col>
      <Col sm={8}>
        <App />
      </Col>
    </Row>
  </React.StrictMode>,
  document.getElementById("root")
);
