import React from 'react';
import MyNavbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <MyNavbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
