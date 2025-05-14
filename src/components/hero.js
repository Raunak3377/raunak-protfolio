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
            <a href="#contact" className="btn-hire">Hire me</a>
            <a href="https://drive.google.com/file/d/1-_0000000000000000000000000000000000000000/view?usp=sharing" className="btn-cv">Download CV</a>
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
