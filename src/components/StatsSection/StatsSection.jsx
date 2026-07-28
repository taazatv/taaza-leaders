import React from 'react';
import './StatsSection.css';

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-value">3.1 Crore+</div>
          <div className="stat-label">MONTHLY TV VIEWERS</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">5 Crore+</div>
          <div className="stat-label">MONTHLY DIGITAL VIEWS</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">50,000+</div>
          <div className="stat-label">ON-GROUND AUDIENCE PER EVENT</div>
        </div>
        <div className="stat-card full-width">
          <div className="stat-label">Operating Across</div>
          <div className="stat-value">West Bengal, Bihar & Jharkhand</div>
        </div>
      </div>
    </section>
  );
}