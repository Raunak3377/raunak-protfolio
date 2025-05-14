import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
      <div className="nav-container">
        {/* Left side */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">About me</a>
          </li>
        </ul>

        {/* Center logo */}
        <Link className="navbar-brand mx-auto brand-logo" to="/">R</Link>

        {/* Right side */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-links">
          <li className="nav-item">
            <Link className="nav-link" to="/work">Work</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
