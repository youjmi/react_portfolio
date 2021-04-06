import React from "react";
import "./style.css";
import {SocialIcon} from 'react-social-icons'

function Footer() {
  return (
    <footer className="footer">
          <SocialIcon target= "_blank" url ="https://www.linkedin.com/in/young-ji-kim-a764b384/"/>
      <SocialIcon className="gitHub"  target= "_blank" url ="https://github.com/youjmi"/>
      <SocialIcon target= "_blank" url ="https://www.facebook.com"/>
      <br></br>
      <span> &copy; Jeezy 2021
      </span>
    </footer>
  );
}

export default Footer;
