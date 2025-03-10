import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Sakshi Phatke. All Rights Reserved.</p>
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com" target="_blank"><FaGithub /></a>
        <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
      </div>
    </footer>
  );
};

export default Footer;
