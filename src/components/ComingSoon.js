import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="title">Coming Soon</h1>
        <div className="animated-bar"></div>
        <p className="message">i am working on something amazing!</p>
        <div className="features">
          <div className="feature">
            <i className="fas fa-rocket"></i>
            <span>FREELANCING</span>
          </div>
          <div className="feature">
            <i className="fas fa-code"></i>
            <span>S2 PARLOUR</span>
          </div>
          <div className="feature">
            <i className="fas fa-paint-brush"></i>
            <span>NON VEG CENTRAL</span>
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
      </div>
    </div>
  );
};

export default ComingSoon; 