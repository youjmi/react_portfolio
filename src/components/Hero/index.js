import React from "react";
import "./style.css";
import bgVid from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/images/vide0-1.mp4"

function Hero(props) {
  return (
    // <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    //   {props.children}
    // </div>

      <div className='hero-container'>
        <video src={bgVid} autoPlay loop muted />
        <div className='hero-btns'>
        </div>
      </div>
    );

}

export default Hero;
