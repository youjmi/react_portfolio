import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


//Home page info..//
function Portfolio() {
  return (
    <div>
      {/* <Hero backgroundImage="https://www.affordablebackgroundchecks.com/blog/wp-content/uploads/2019/03/Employee-Personal-Details-Check.jpg">
        <h1>RESUMEEEE!</h1>
        <h2>ADDD FLUFF HERE!</h2>
      </Hero> */}
      <Container style={{ marginTop: 40 ,}}>
        <Row>
          <Col size="md-12">
            <h1 className ="text-center" >RESSSSSYYY!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p className ="text-center">
RESUMEEE            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
