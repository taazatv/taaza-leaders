import React, { useState } from 'react';
import './EGC.css';

const videoIds = [
  "dQw4w9WgXcQ",
  "abc123def456",
  "xyz789uvw012",
  "mnop345qrst",
  "uvwx678yzab"
];

export default function EGC() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <section className="egc-section">
      <div className="egc-container">
        <h2 className="egc-headline">EMPLOYEE SECTION</h2>
        <p className="egc-subtext">Employee stories that define our workplace culture.</p>

        <div className="egc-scroll-wrapper">
          <div className="egc-scroll">
            {videoIds.map((id) => (
              <div key={id} className="egc-card" onClick={() => setSelectedId(id)}>
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt="Video thumbnail"
                  className="egc-thumb"
                />
                <div className="play-btn"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedId && (
        <div className="egc-modal" onClick={() => setSelectedId(null)}>
          <div className="egc-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="egc-close" onClick={() => setSelectedId(null)}>✕</button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedId}?autoplay=1&rel=0`}
              frameBorder="0"
              allow="autoplay; encrypted-media; fullscreen"
              title="YouTube Short"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}