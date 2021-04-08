import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Hero from "./components/Hero/index"
import Footer from "./components/Footer/index"



function App() {
  return (
    //ensure deployed link is routed immediately to home page//
    <Router>
      <div>
      <Hero/>
        <Navbar />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
