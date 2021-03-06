import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Cards from "../components/Cards/Cards"
import profilepic from "../images/studentAvatar.jpeg"
// import { Card } from "reactstrap";


//Home page info..//
function Home() {
  return (
    <div >

      <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="text-center intholdbox">
        <Row>
        
          <Col className="colBorder">
              <img src={profilepic} alt="Jeezy" class="Jeezy"></img>
              
              {/* <div className="colBordermain"> */}
              <h1 className="intro1">Hafa Adai and Hello!</h1>
              <h1 className="intro1">Thank you for visiting my website. </h1>
              <br></br>
              <h4 className="intro2"> Welcome to my Portfolio. My name is Young Ji Kim and I am a Full Stack Developer from completing the 
           GWU Bootcamp Coding Course.</h4>
              <h4 className="intro2"> I was previously in the luxuy hotel management industry for about 8 years before the pandemic took
          over. I am highly skilled in Customer Service, Sales, Operations and Project Management, Guest Relations and Employee Relations under a complex labor market.</h4>
              <h4 className="intro2"> I believe that, with my new Full Stack skills combined with my existing skills will create an immense wealth of diverse knowledge that I can provide for your company.  This webpage shows some of my works that I am most proud of!
        </h4>    
          </Col>
        </Row>
        </div>
        <div className="intdivider"></div>

      </Container>

    </div>
  );
}

export default Home;
