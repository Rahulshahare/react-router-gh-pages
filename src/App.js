import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import User from './components/User';
import Search from './components/Search';

function App() {
  return (
    <Router basename='/react-router-gh-pages'>
     {/* <Router> */}
      <div style={{ textAlign: 'center' }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} /> {/* Route with URL parameter */}
          <Route path="/search" element={<Search />} /> {/* Route for query parameters */}
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
