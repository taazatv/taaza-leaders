import React from 'react';
import './Ticker.css';

export default function Ticker() {
  const tickerText = [
    "Eastern India’s Only National Hindi News Channel",
    "3.1 Crore+ Monthly Viewers",
    "24x7 Satellite Broadcast Network",
    "Journalist-Owned. Viewer-Driven.",
    "Hyperlocal Intelligence at Scale",
    "Massive Digital Penetration",
    "High-Impact Events & Brand Activations"
  ];

  // Create a single string with separators
  const tickerContent = tickerText.join(" • ");

  return (
    <div className="ticker-section">
      <div className="ticker-container">
        <div className="ticker-track">
          <span className="ticker-text">{tickerContent}</span>
          <span className="ticker-text">{tickerContent}</span>
        </div>
      </div>
    </div>
  );
}