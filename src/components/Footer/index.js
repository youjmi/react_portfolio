import React from "react";
import "./style.css";
import {SocialIcon} from 'react-social-icons'

function Footer() {
  return (
    <footer className="footer">
          <SocialIcon target= "_blank" className="iconSpace footicon"style={{ height: 35, width: 35 }} url ="https://www.linkedin.com/in/young-ji-kim-a764b384/"/>
      <SocialIcon  className="iconSpace footicon1" target= "_blank" bgColor="white"style={{ height: 35, width: 35 }} url ="https://github.com/youjmi"/>
      <SocialIcon className="footicon" target= "_blank" style={{ height: 35, width: 35 }} url ="https://www.facebook.com"/>
      <br></br>
      <span>
      &copy; Jeezy 2021
      <br></br>
      <a href ="mailto:youjmik@gmail.com?subject=Message from Your Portfolio" class ="text-white intro2 " target="_blank">youjmik@gmail.com</a>
       <h6 className="intro2">+1-(310)-926-6899</h6></span>

    </footer>
  );
}

export default Footer;
