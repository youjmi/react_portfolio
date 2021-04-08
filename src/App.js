import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Hero from "./components/Hero/index"
import Footer from "./components/Footer/index"



function App() {
  return (
    //ensure deployed link is routed immediately to home page//
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <Navbar />
        <Hero/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
