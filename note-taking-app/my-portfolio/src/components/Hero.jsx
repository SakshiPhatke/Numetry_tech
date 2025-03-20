import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import './Hero.css'; // Import the CSS file

const Hero = () => {
  const text = "I’m Sakshi Phatke, Software Developer";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.substring(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100); // Speed of typing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <Container className="text-center my-5">
        <h1>Hii...</h1>
        <h2>{displayedText}</h2>
        <h3>Building efficient, scalable, and innovative solutions.</h3>
        <Button variant="primary" href="#projects" className="mt-3">View My Work</Button>
      </Container>
    </div>
  );
};

export default Hero;
