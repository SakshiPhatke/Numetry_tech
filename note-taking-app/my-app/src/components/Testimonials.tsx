import React from "react";
import { Container, Carousel } from "react-bootstrap";

const Testimonials: React.FC = () => {
  return (
    <Container className="py-5 text-center">
      <h2>What Our Clients Say</h2>
      <Carousel className="mt-4">
        <Carousel.Item>
          <p>"This is the best service I've ever used!"</p>
          <small>- John Doe</small>
        </Carousel.Item>
        <Carousel.Item>
          <p>"Highly recommend to everyone!"</p>
          <small>- Jane Smith</small>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Testimonials;
