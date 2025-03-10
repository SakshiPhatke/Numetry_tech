import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpg";
import "./Projects.css"; // Import the CSS file

const projects = [
  { title: "Attendence Managment system", desc: "It is common in most schools, colleges, and educational institutes to see teachers taking down daily attendance in a hefty register each day. Then at the end of the month, semester, or year, they manually consolidate the attendance data to produce reports.  Need for Digitally Managing Student Attendance ", img: img1 },
  { title: "Voting Managment System", desc: "It is common in most schools, colleges, and educational institutes to see teachers taking down daily attendance in a hefty register each day. Then at the end of the month, semester, or year, they manually consolidate the attendance data to produce reports.  Need for Digitally Managing Student Attendance", img: img2 },
  { title: "Wastage Food Reduction", desc: "In highly populated countries like India, food wastage is a disturbing issue. The streets, garbage bins and landfills have ample proof to prove it. Marriages, canteens, restaurants, social and family get-togethers and functions expel out so much food. Food wastage is not only an indication of hunger or pollution, but also of many economic problems.", img: img3 }
];

const Projects = () => {
  return (
    <Container id="projects" className="my-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="project-card">
              <Card.Img variant="top" src={project.img} className="project-img" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
