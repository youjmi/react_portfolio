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
      {/* <Hero backgroundImage="https://www.affordablebackgroundchecks.com/blog/wp-content/uploads/2019/03/Employee-Personal-Details-Check.jpg"> */}
        {/* <h1>Welcome my Portfolio!</h1>
        <h2>ADDD FLUFF HERE!</h2> */}
      {/* </Hero> */}
      <Container style={{ marginTop: 40 ,}}>
        <Row>
          <Col size="md-12">
            <div className ="text-center holdbox">
            <img src={profilepic} alt="Jeezy" class="Jeezy"></img>
              <h4 className="my-3">Hafa Adai and Hello!</h4>
              <h4 className="mb-3">Thank you for visiting my website. </h4>
              <h6> Welcome to my Portfolio. My name is Young Ji Kim and I am a Full Stack Developer currently
          attending GWU Bootcamp Coding Course, which will be completed at the end of April.</h6>
          <h6> I was previously in the luxuy hotel management industry for about 8 years before the pandemic took
          over. I am highly skilled in Customer Service, Sales, Operations and Project Management, Guest Relations and Employee Relations up to 74 Employees under a complex labor market.</h6>
        <h6> I believe that, with my new Full Stack skills combined with my existing skills, will create an immense wealth of diverse knowledge that I can provide for your company.  This webpage shows some of my works that I am most proud of!
        </h6>
        
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
