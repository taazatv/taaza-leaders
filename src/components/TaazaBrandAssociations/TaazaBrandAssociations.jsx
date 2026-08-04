import React from 'react';
import './TaazaBrandAssociations.css';

import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';

const brands = [
  {
    name: "Taaza Tv",
    logo: c1,
    vertical: false,
  },
  {
    name: "Chhapte Chhapte",
    logo: c2,
    vertical: true,
  },
  {
    name: "Taaza Digital",
    logo: c3,
    vertical: false,
  },
  {
    name: "MFX Interactive",
    logo: c4,
    vertical: false,
  },
  {
    name: "FileItIndia",
    logo: c5,
    vertical: false,
  },

  // Duplicate for infinite slider
  {
    name: "Taaza Tv",
    logo: c1,
    vertical: false,
  },
  {
    name: "Chhapte Chhapte",
    logo: c2,
    vertical: true,
  },
  {
    name: "Taaza Digital",
    logo: c3,
    vertical: false,
  },
  {
    name: "MFX Interactive",
    logo: c4,
    vertical: false,
  },
  {
    name: "FileItIndia",
    logo: c5,
    vertical: false,
  },
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
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  draggable="false"
                  className={brand.vertical ? "vertical-logo" : ""}
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}