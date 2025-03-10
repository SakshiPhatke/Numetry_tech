import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-scroll";


const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="home" smooth={true} duration={500}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about" smooth={true} duration={500}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="projects" smooth={true} duration={500}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="contact" smooth={true} duration={500}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
