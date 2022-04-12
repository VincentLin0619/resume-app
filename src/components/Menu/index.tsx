import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { HashRouter } from "react-router-dom";

const Menu = () => {
  return (
    <HashRouter>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </HashRouter>
  );
};

export default Menu;
