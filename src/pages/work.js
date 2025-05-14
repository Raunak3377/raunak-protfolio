import React from 'react';
import Navbar from '../components/Nav';
import ComingSoon from '../components/ComingSoon';
import About from '../components/About';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './work.css';

const Work = () => {
  return (
    <div className="work-page">
      <Navbar />
      <ComingSoon />
      <About />
      <Footer />
    </div>
  );
};

export default Work;
