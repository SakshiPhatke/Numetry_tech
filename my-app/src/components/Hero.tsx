import React from "react";
import { Container, Button } from "react-bootstrap";

const Hero: React.FC = () => {
  return (
    <div className="bg-primary text-white text-center py-5">
      <Container>
        <h1>Welcome to My Website</h1>
        <p>Building modern and responsive web applications</p>
        <Button variant="light">Get Started</Button>
      </Container>
    </div>
  );
};

export default Hero;
