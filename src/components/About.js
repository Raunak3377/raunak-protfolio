import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section id="about" className="about-section d-flex align-items-center justify-content-center text-white">
      <div className="container position-relative">
        <div className="row align-items-center">
          {/* Left: Glowing Sphere with Image */}
          <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
            <div className="glow-sphere">
              <img
                src={process.env.PUBLIC_URL + '/images/raaunak.jpg'}
                alt="RAUNAK"
                className="profile-img"
              />
            </div>
          </div>

          {/* Right: Text Content in a Circle */}
          <div className="col-md-6">
            <div className="about-card p-4">
              <h4 className="fw-bold mb-3">About me</h4>
              <p>
              Hi! I'm Raunak, a passionate and curious learner with a deep interest in digital marketing ,web development. I love turning ideas into reality using technology and creativity. With a solid foundation, I enjoy building user-friendly, impactful solutions that solve real problems.
                
              </p>
              <p>
              <a href="#contact" className="btn-hire">Hire me</a>
              </p>
                 

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

