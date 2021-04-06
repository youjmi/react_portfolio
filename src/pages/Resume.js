import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import {ResContent} from "../components/Slider/ResContent"
import Slider from "../components/Slider/Slider"



//Home page info..//
function Portfolio() {
  return <Slider slides = {ResContent}/>

    
    // <div>

    //   <Container style={{ marginTop: 40, }}>
    //     <Row>
    //       <Col size="md-12">
    //       </Col>
    //       <Col size="md-12">
    //         <p className="text-center">
    //           RESUMEEE            </p>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
  
}

export default Portfolio;
