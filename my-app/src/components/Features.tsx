import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Features: React.FC = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center">Our Features</h2>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Fast</Card.Title>
              <Card.Text>Optimized for speed and performance.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Secure</Card.Title>
              <Card.Text>We prioritize security in every project.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Responsive</Card.Title>
              <Card.Text>Works on all devices seamlessly.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
