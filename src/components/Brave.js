import React from 'react';
import './Brave.css';

const Brave = () => {
  return (
    <div className="brave-container">
      <h1 className="brave-title">Social Media Management at Brave Carrier Institute</h1>
      
      <div className="work-cards">
        <div className="work-card">
          <div className="card-image">
            {/* Add your screenshot here */}
            <img src="./images/facebook.jpg" alt="Social Media Campaign 1" />
          </div>
          <div className="card-content">
            <h3>Campaign Management</h3>
            <p>Led successful social media campaigns that increased engagement by 32% and grew followers by 26%</p>
            <ul>
              <li>Created and scheduled daily content</li>
              <li>Managed community interactions</li>
              <li>Analyzed performance metrics</li>
            </ul>
          </div>
        </div>

   

        <div className="work-card">
          <div className="card-image">
            {/* Add your screenshot here */}
            <img src="./images/yt.jpg" alt="Analytics and Reporting" />
          </div>
          <div className="card-content">
            <h3>Analytics and Reporting</h3>
            <p>Generated detailed reports and insights to optimize social media performance</p>
            <ul>
              <li>Tracked key performance indicators</li>
              <li>Provided monthly performance reports</li>
              <li>Implemented data-driven improvements</li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Brave; 