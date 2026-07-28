import React from 'react';
import './VideoSection.css';

import backgroundVideo from '../../assets/taaza.mp4';

export default function VideoSection() {
  return (
    <div className="video-section">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
      </video>
      <div className="video-overlay">
        <div className="bottom-text">
          <h1 className="main-headline">
           Eastern India’s Most Influential <br />
            Media Network
          </h1>
          <p className="subtext">
            A multi-generational media ecosystem reaching millions across Eastern India
            through broadcast, digital, and on-ground platforms.
          </p>
        </div>
      </div>
    </div>
  );
}