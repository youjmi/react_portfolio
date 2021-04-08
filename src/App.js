import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Header from "./components/Header/index";
import Hero from "./components/Hero/index"
import Footer from "./components/Footer/index"



function App() {
  return (
    //ensure deployed link is routed immediately to home page//
    <Router>
      <div>
      <Hero/>
        <Header />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
