import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Navbar.css"; // Import styles


const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#">MyPortfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Button variant="outline-light" className="ms-2">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
