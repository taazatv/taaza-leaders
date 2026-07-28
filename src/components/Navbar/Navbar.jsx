import React, { useState, useEffect } from 'react';
import './Navbar.css';

import englishLogo from '../../assets/engllish.png';
import hindiLogo from '../../assets/hindi.png';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHindi, setShowHindi] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHindi(prev => !prev);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left" />
        <div className="logo-center">
          <div className="logo-switch">
            <img
              src={englishLogo}
              alt="English Logo"
              className={`logo-img ${!showHindi ? 'visible' : 'hidden'}`}
            />
            <img
              src={hindiLogo}
              alt="Hindi Logo"
              className={`logo-img ${showHindi ? 'visible' : 'hidden'}`}
            />
          </div>
        </div>
        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-nav">
          <a href="#scale" onClick={() => setMobileOpen(false)}>Scale & Reach</a>
          <a href="#story" onClick={() => setMobileOpen(false)}>Our Story</a>
          <a href="#brands" onClick={() => setMobileOpen(false)}>Brand Associations</a>
          <a href="#leadership" onClick={() => setMobileOpen(false)}>Leadership</a>
          {/* <a href="#advisory" onClick={() => setMobileOpen(false)}>Advisory Board</a> */}
          <a href="#offers" onClick={() => setMobileOpen(false)}>Brand Offers</a>
        </div>
      )}
    </nav>
  );
}