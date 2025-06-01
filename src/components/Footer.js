import React from 'react';
import './Footer.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const emailBody = encodeURIComponent(
    "Hello Raunak,\n\n" +
    "I came across your portfolio and I'm interested in discussing potential opportunities. " +
    "I would like to hire you for:\n\n" +
    "Project Details:\n" +
    "- Project Type:\n" +
    "- Timeline:\n" +
    "- Budget:\n\n" +
    "Looking forward to hearing from you.\n\n" +
    "Best regards,"
  );

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
            <li><Link to="/" aria-label="Go to home page" title="Home" href="#top">Home</Link></li>
            <li><Link to="/work" aria-label="Go to work page" title="Work" href="#top">Work</Link></li>
            <li><a href="#about" aria-label="Go to about page" title="About">About</a></li>
            <li><a href="#contact" aria-label="Go to contact page" title="Contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>
              <i className="bi bi-envelope"></i>
              <a 
                href={`mailto:raunak8820@gmail.com?subject=Hiring Inquiry - Portfolio&body=${emailBody}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email to raunak8820@gmail.com"
                title="Click to send me an email"
                className="email-link"
              >
                raunak8820@gmail.com
              </a>
            </li>
            <li>
              <i className="bi bi-telephone"></i>
              <span>+91 7766828618</span>
            </li>
            <li>
              <i className="bi bi-map-marker-alt"></i>
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