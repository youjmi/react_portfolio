import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Hero from "./components/Hero/index"
import Wrapper from "./components/Wrapper/index";

function App() {
  return (
    //ensure deployed link is routed immediately to home page//
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <Navbar />
        <Wrapper>
          <Hero/>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/Contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
