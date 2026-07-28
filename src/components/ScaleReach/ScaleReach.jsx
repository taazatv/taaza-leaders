import React from 'react';
import './ScaleReach.css';

export default function ScaleReach() {
  const blocks = [
    {
      title: "Television",
      stats: [
        { value: "3.1 Crore+", label: "Monthly Viewers" },
        { value: "24x7", label: "Satellite Presence Across Eastern India" }
      ]
    },
    {
      title: "Digital Ecosystem",
      stats: [
        { value: "5 Crore+", label: "Monthly Organic Views" },
        { value: "4.5 Lakh+", label: "Monthly Unique Visitors" },
        { value: "70,000+", label: "App Downloads" }
      ]
    },
    {
      title: "Print Network",
      stats: [
        { value: "90,000+", label: "Direct Subscribers" },
        { value: "2.2 Lakh+", label: "WhatsApp Distribution Reach" }
      ]
    },
    {
      title: "On-Ground Engagement",
      stats: [
        { value: "50,000+", label: "Audience Per Event" },
        { value: "Activations Across", label: "Schools, RWAs & Ticketed Platforms" }
      ]
    }
  ];

  return (
    <section className="scale-reach-section">
      <div className="scale-container">
        <h2 className="scale-headline">Scale That Drives Influence</h2>
        <p className="scale-subtext">
          A powerful blend of broadcast, digital, print, and on-ground ecosystems delivering unmatched reach and engagement.
        </p>
        <div className="scale-grid">
          {blocks.map((block, idx) => (
            <div className="scale-card glass-card" key={idx}>
              <h3 className="block-title">{block.title}</h3>
              <div className="stats-list">
                {block.stats.map((stat, i) => (
                  <div className="stat-item" key={i}>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}