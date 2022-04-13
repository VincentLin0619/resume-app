import React, { useState } from "react";
import "./index.css";

import styled from "styled-components";
import { Button, Offcanvas } from "react-bootstrap";
import { HashRouter } from "react-router-dom";

const MenuM = styled.div`
  height: 50px;
  background-color: black;
  display: flex;
  align-self: stretch;
  align-items: center;
`;

export default function MenuMobile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <MenuM>
        <Button
          variant="outline-light"
          size="sm"
          className="m-2"
          onClick={handleShow}
        >
          \\\
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <HashRouter>
              <h1>Profile</h1>
            </HashRouter>
          </Offcanvas.Body>
        </Offcanvas>
      </MenuM>
    </>
  );
}
