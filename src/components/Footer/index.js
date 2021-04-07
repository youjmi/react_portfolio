import React from "react";
import "./style.css";
import {SocialIcon} from 'react-social-icons'

function Footer() {
  return (
    <footer className="footer">
          <SocialIcon target= "_blank" className="iconSpace footicon" url ="https://www.linkedin.com/in/young-ji-kim-a764b384/"/>
      <SocialIcon  className="iconSpace footicon1" target= "_blank" bgColor="white" url ="https://github.com/youjmi"/>
      <SocialIcon className="footicon" target= "_blank" url ="https://www.facebook.com"/>
      <br></br>
      <br></br>
      <span> &copy; Jeezy 2021
      </span>
    </footer>
  );
}

export default Footer;
