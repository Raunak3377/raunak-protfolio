import React from 'react';
import Hero from '../components/hero';
import Navbar from '../components/Nav';
import About from '../components/About';
import App from '../components/cardgridn';
import Form from '../components/form';
import Footer from '../components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <App />
      <About />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
