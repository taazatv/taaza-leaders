import React, { useEffect } from "react";
import "./LiveTVPopup.css";

const LIVE_TV_URL = "https://taazatv.com/liveTV/";

export default function LiveTVPopup({ onClose }) {
  // Close popup on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  // Open Live TV Page
  const openLiveTV = () => {
    window.open(LIVE_TV_URL, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="lvtv-overlay" onClick={onClose}>
      <div
        className="lvtv-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="lvtv-close"
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Banner */}
        <div
          className="lvtv-banner"
          onClick={openLiveTV}
        >
          <img
            src="/livetv-banner.jpg"
            alt="Taaza TV Live"
          />

          <div className="lvtv-play">
            ▶
          </div>
        </div>

        {/* Content */}
        <div className="lvtv-content">

          <h2 className="lvtv-title">
            🔴 LIVE TV
          </h2>

          <p className="lvtv-text">
            Watch Taaza TV Live News Streaming 24×7
          </p>

          <button
            className="watch-btn"
            onClick={openLiveTV}
          >
            🔴 WATCH LIVE
          </button>

        </div>
      </div>
    </div>
  );
}