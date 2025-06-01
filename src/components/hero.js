import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="gradient-text">Analytical Bold Creative</span>
            <br />
            <span className="name">Raunak kr</span>
            <br />
            <span className="location">DIGITAL MARKETING EXPERT</span>
          </h1>
          <p className="hero-description">
          "I combine the art of digital marketing with the power of data science to drive measurable growth, optimize campaigns, and uncover insights that turn clicks into customers."
          </p>
          <div className="hero-buttons">
            <a 
              href="#contact" 
              className="btn-hire"
              aria-label="Contact me for hiring"
              title="Get in touch for work opportunities"
            >
              Hire me
            </a>
            <a 
              href="https://drive.google.com/file/d/1sYXTMnBfUU_ZD7FvTZBVh8ls2RauWx5B/view?usp=sharing" 
              className="btn-cv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download my CV"
              title="View my detailed CV"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="sphere sphere-1"></div>
      <div className="sphere sphere-2"></div>
      <div className="sphere sphere-3"></div>
      <div className="gradient-overlay"></div>
    </section>
  );
};

export default Hero;
