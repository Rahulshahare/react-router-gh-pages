import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import _404 from './components/404';

function App() {
  return (
    <Router basename='/react-router-gh-pages'>
    {/* <Router> for local */}
      <div style={{ textAlign: 'center' }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<_404/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
