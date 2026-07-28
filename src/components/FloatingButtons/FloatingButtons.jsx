import React, { useState } from 'react';
import { FaTv, FaNewspaper } from 'react-icons/fa';
import LiveTVPopup from '../LiveTVPopup/LiveTVPopup';
import './FloatingButtons.css';

const NEWS_URL = "https://www.taazatv.com"; // 🔁 Replace with your main site URL

export default function FloatingButtons() {
  const [showLivePopup, setShowLivePopup] = useState(false);

  return (
    <>
      <div className="fab-container">
        <button className="fab-btn-live" onClick={() => setShowLivePopup(true)}>
          <FaTv />
          <span className="fab-tooltip">Live TV</span>
        </button>

        <button className="fab-btn-news" onClick={() => window.open(NEWS_URL, '_blank')}>
          <FaNewspaper />
          <span className="fab-tooltip">Read News</span>
        </button>
      </div>

      {/* Only show popup when button is clicked - NO AUTO POPUP */}
      {showLivePopup && <LiveTVPopup onClose={() => setShowLivePopup(false)} />}
    </>
  );
}