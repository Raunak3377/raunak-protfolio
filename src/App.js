// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import WhatsAppButton from './components/WhatsAppButton';


// Import your pages
import Home from './pages/home';
import Work from './pages/work';

function App() {
  return (
    <Router>
      <WhatsAppButton />
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;