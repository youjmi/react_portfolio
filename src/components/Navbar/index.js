
import "./style.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
					<div className="col-md-12">
						<Router>
							<Navbar bg="light" variant="light" expand="lg" sticky="top">
								<Navbar.Brand className ="nav-brand" href="/">Jeezy</Navbar.Brand>
								<Navbar.Toggle aria-controls="basic-navbar-nav" />
								<Navbar.Collapse id="basic-navbar-nav">
									<Nav className="mr-auto main-nav ">
										<Nav.Link className ="nav-link" href="/portfolio">Projects</Nav.Link>
										<Nav.Link className ="nav-link" href="/resume">Resume</Nav.Link>
										<Nav.Link className ="nav-link" href="/contact">Contact Me</Nav.Link>
											
									</Nav>
									<Nav className="ml-auto">
										<Nav.Link
											target="_blank"
											href="https://github.com/Alexfit4"
										>
											<i className="fab fa-github text-3xl "></i>
										</Nav.Link>
										<Nav.Link
											target="_blank"
											href="https://www.linkedin.com/in/amir-ashtiany-4a25421b9/"
										>
											<i className="fab fa-linkedin text-3xl "></i>
										</Nav.Link>
										<Nav.Link
											target="_blank"
											href="https://www.facebook.com/alex.ashtiany"
										>
											<i className="fab fa-facebook-square text-3xl "></i>
										</Nav.Link>
									</Nav>
								</Navbar.Collapse>
							</Navbar>
							<Switch>
								<Route component={Home} exact path="/" />
								<Route component={Portfolio} path="/portfolio" />
								<Route component={Resume} path="/resume" />
								<Route component={Contact} path="/contact" />
							</Switch>
						</Router>
					</div>
				</div>
			</div>
		);
	}
}


export default Navigation;
