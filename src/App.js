// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import WhatsAppButton from './components/WhatsAppButton';


// Import your pages
import Home from './pages/home';
import Work from './pages/work';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <WhatsAppButton />
          </>
        } />
        <Route path="/work" element={
          <>
            <Work />
            <WhatsAppButton />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;