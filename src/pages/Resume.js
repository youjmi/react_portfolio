import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


//Home page info..//
function Portfolio() {
  return (
    <div>

      <Container style={{ marginTop: 40, }}>
        <Row>
          <Col size="md-12">
            <a href ="https://drive.google.com/drive/u/0/folders/110rfD-OMDp8O9LqFTQN3exg8pqNKRaG5" target ="_blank">resume</a>
          </Col>
          <Col size="md-12">
            <p className="text-center">
              RESUMEEE            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
