import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./style.css";
import {Collapse, NavbarToggler} from "reactstrap"

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavBar = () => setCollapsed(!collapsed)

  return (
    <div >
    <nav style ={{display:"flex" ,justifyContent:"center", alignItems:'center',height:"10vh"}}className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className=" nav-link nav-brand" to="/">
        Jeezy
      </Link>
      {/* <NavbarToggler onClick={toggleNavBar}/>
      <Collapse isOpen ={!collapsed}> */}
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
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact Me 
            </Link>
            
          </li>
        </ul>
        {/* </Collapse> */}
    </nav>
    </div>
  );
}

export default Navbar;
