import React from 'react';
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
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 