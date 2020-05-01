import React from "react";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbars() {
  return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home"><h1>Yan Zhao</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfoilo</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
      </Navbar.Collapse>
      <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Info
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="https://www.linkedin.com/in/yan-zhao-6339588b/">Linkedin Page</Dropdown.Item>
              <Dropdown.Item href="./assets/Resume.pdf">Resume</Dropdown.Item>
              <Dropdown.Item href="https://github.com/yzhao322">Github Porfile</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </Navbar>
  );
}

export default Navbars;
