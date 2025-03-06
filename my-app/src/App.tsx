import React from "react";
<<<<<<< HEAD
import Footer from "./components/Footer"; // Import the Footer component
import "./App.css";

function App() {
  return (
    <>
      <Footer /> {/* Display only the footer */}
    </>
  );
}
=======
import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

const App: React.FC = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Main Content */}
      <Container fluid className="p-0">
        <Hero />
        <Features />
        <Testimonials />
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};
>>>>>>> 530bb32 (Second task)

export default App;
