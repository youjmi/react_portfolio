import React from "react";
import Container from "../components/Container";
import Cards from "../components/Cards/Cards"
// import { Card } from "reactstrap";


//Home page info..//
function Portfolio() {
  return (
    <div>
      <Container style={{ marginTop: 40 ,}}>
        <Cards></Cards>
      </Container>
    </div>
  );
}

export default Portfolio;
