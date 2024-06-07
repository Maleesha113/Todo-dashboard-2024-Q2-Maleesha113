// import { useState } from 'react';
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavbar from './Components/SideNavbar';
import Navbar from './Components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideNavbar />
        <div className="main-content">
          <Navbar />
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
