import React from 'react';
import Navbar from '../components/Nav';
import ComingSoon from '../components/ComingSoon';
import About from '../components/About';
import Footer from '../components/Footer';
import Brave from '../components/Brave';
import 'bootstrap/dist/css/bootstrap.min.css';
import './work.css';
import Graphics from '../components/Graphics';

const Work = () => {
  return (
    <div className="work-page">
      <Navbar />
      <ComingSoon />
      <Brave />
      <Graphics />
      <About />
      <Footer />
    </div>
  );
};

export default Work;
