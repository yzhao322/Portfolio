import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <h1>Yan Zhao</h1>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to="/home"
              className={
                window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfoilo"
                ? "nav-link active"
                : "nav-link"
              }
            >
              Portfoilo
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
          
        </ul>
      </div>
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
  
    </nav>
  );
}

export default Navbar;
