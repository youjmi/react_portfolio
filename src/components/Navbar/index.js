import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {Collapse, NavbarToggler} from "reactstrap"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavBar = () => setCollapsed(!collapsed)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Jeezy
      </Link>
      <NavbarToggler onClick={toggleNavBar}/>
      <Collapse isOpen ={!collapsed}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}
            >
              Resume
            </Link>
          </li>
        </ul>
        </Collapse>
 
    </nav>
  );
}

export default Navbar;
