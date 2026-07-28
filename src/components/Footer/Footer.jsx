import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section social-section">
          <h3 className="footer-heading">Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/1CGsc9hpxR/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/taazatvchannel?igsh=MW15cDg5ZHF4enZ5Nw==" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@taazatv1632?si=QY4kN5ohdcDdbjWF" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-section offices-section">
          <h3 className="footer-heading">Our Offices</h3>
          <div className="offices-grid">
            <div className="office">
              <h4>Kolkata (Head Office)</h4>
              <p>37 Shakespeare Sarani, Ground Floor<br />Kolkata – 700017</p>
            </div>
            <div className="office">
              <h4>Ranchi Office</h4>
              <p>Harmu Road, Near Gaushala<br />Ranchi – 834001</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Taaza TV. All rights reserved.</p>
      </div>
    </footer>
  );
}