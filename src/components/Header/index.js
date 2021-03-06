
import "./style.css";
import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Home from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/pages/Home";
import Resume from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/pages/Resume";
import Contact from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/pages/Contact";
import Portfolio from "/Users/youngjikim/Desktop/GitLab/gwu-arl-fsf-pt-10-2020-u-c/20-State/02-Homework/react_portfolio/src/pages/Portfolio";

class Navigation extends React.Component {
	render() {
		return (
			<div>
			<div className="row">
			<div className="col-md-12 colNav">
				<Router>
				<Navbar bg="light" variant="light" expand="xl" sticky="top" className ="stretchNav">
				<Navbar.Brand className ="nav-brand" href="/react_portfolio/#/">Jeezy</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto main-nav ">
					<Nav.Link className ="nav-link" href="/react_portfolio/#/portfolio">Portfolio</Nav.Link>
					<Nav.Link className ="nav-link" href="/react_portfolio/#/resume">Resume</Nav.Link>
					<Nav.Link className ="nav-link" href="/react_portfolio/#/contact">Contact Me</Nav.Link>	
				</Nav>
				</Navbar.Collapse>
				</Navbar>
					<Switch>
						<Route exact path="/" component={Home}  />
						<Route  path="/portfolio" component={Portfolio} />
						<Route path="/resume"  component={Resume} />
						<Route path="/contact"component={Contact}  />
					</Switch>
				</Router>
			</div>
			</div>
			</div>
);
}}

export default Navigation;
