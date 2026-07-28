import React from 'react';
import './TaazaBrandAssociations.css';

import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';

const brands = [
  { name: "Taaza Tv", logo: c1 },
  { name: "Chhapte Chhapte", logo: c2 },
  { name: "Taaza Digital", logo: c3 },
  { name: "MFX Interactive", logo: c4 },
  { name: "FileItIndia", logo: c5 },

  // duplicate for smooth infinite slider
  { name: "Taaza Tv", logo: c1 },
  { name: "Chhapte Chhapte", logo: c2 },
  { name: "Taaza Digital", logo: c3 },
  { name: "MFX Interactive", logo: c4 },
  { name: "FileItIndia", logo: c5 },
];

export default function TaazaBrandAssociations() {
  return (
    <section className="brand-section">
      <div className="brand-container">

        <h2 className="brand-title">
          Taaza Group Of Companies
        </h2>

        <p className="brand-description">
          Transforming Media, Business, and Communities.
        </p>

        <div className="slider-wrapper">
          <div className="slider-track">

            {brands.map((brand, index) => (
              <div className="slider-item" key={index}>
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}