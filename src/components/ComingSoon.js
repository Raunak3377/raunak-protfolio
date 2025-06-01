import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="title">More Coming Soon</h1>
        <div className="animated-bar"></div>
        <p className="message">i am working on something amazing!</p>
        <div className="features">
          <div className="feature">
            <i className="fas fa-rocket"></i>
            <span id='freelancing' >FREELANCING</span>
          </div>
          <div className="feature">
            <i className="fas fa-code" id='graphicdesign'></i>
            <span id='graphicdesign'>GRAPHIC DESIGN</span>
          </div>
          
          <Link 
            to="/" 
            className="btn btn-primary"
            aria-label="Return to home page"
            title="Go back to home"
          >
            Back to Home
          </Link>
        </div>
        <div className="coming-soon-content">
          <h1 className="title">Brave Carrier institute</h1>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 