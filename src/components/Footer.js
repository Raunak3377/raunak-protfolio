import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Raunak Kumar</h3>
          <p>i am student of BS IN CS and DA in IIT PATNA,also I am doing Bcom in Marketing from Magadh university</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li> <a href="/work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:raunak8820@gmail.com">vraunakraj456@gmail.com</a>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+91 7766828618</span>
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>RajendraNagar, Patna, Bihar, India</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="https://github.com/Raunak3377" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/raunak-kumar-438b56308/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://x.com/RaUnAkR36433295" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} made with ❤️by Raunak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 