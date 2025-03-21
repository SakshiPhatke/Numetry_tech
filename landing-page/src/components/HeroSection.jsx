import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Welcome to Our Landing Page
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1 }}
      >
        Experience smooth animations with CSS and Framer Motion.
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }}
        className="cta-btn"
      >
        Get Started
      </motion.button>
    </section>
  );
};

export default HeroSection;
