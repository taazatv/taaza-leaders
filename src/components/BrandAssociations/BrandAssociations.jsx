
import React from 'react';
import './BrandAssociations.css';

/* Import Images */
import b1 from '../../assets/b1.png';
import b2 from '../../assets/b2.png';
import b3 from '../../assets/b3.png';
import b4 from '../../assets/b4.png';
import b5 from '../../assets/b5.png';
import b6 from '../../assets/b6.png';
import b7 from '../../assets/b7.png';
import b8 from '../../assets/b8.png';
import b9 from '../../assets/b9.png';
import b10 from '../../assets/b10.png';
import b11 from '../../assets/b11.png';
import b12 from '../../assets/b12.png';
import b13 from '../../assets/b13.png';
import b14 from '../../assets/b14.png';
import b15 from '../../assets/b15.png';
import b16 from '../../assets/b16.png';
import b17 from '../../assets/b17.png';
import b18 from '../../assets/b18.png';
import b19 from '../../assets/b19.png';
import b20 from '../../assets/b20.png';
import b21 from '../../assets/b21.png';
import b22 from '../../assets/b22.png';
import b23 from '../../assets/b23.png';
import b24 from '../../assets/b24.png';
import b25 from '../../assets/b25.png';
import b26 from '../../assets/b26.png';
import b27 from '../../assets/b27.png';
import b28 from '../../assets/b28.png';
import b29 from '../../assets/b29.png';

const brands = [
  { name: "Ambuja Neotia", logo: b1 },
  { name: "Emami Group", logo: b2 },
  { name: "Priya Gold", logo: b3 },
  { name: "Jis University", logo: b4 },
  { name: "Heritage Health", logo: b5 },
  { name: "Win Pens", logo: b6 },
  { name: "Carring Minds International", logo: b7 },
  { name: "Shri Hari", logo: b8 },
  { name: "SRMB TMT", logo: b9 },
  { name: "Budleaf Tea", logo: b10 },
  { name: "Industrial Park", logo: b11 },
  { name: "Budleaf Tea", logo: b12 },
  { name: "Century Ply", logo: b13 },
  { name: "Natural Group", logo: b14 },
  { name: "Shyam Steel", logo: b15 },
  { name: "Aakash", logo: b16 },
  { name: "Nicco Park", logo: b17 },
  { name: "Comfort Lady", logo: b18 },
  { name: "RCP", logo: b19 },
  { name: "Cabcon", logo: b20 },
  { name: "IFGL", logo: b21 },
  { name: "Wildstone", logo: b22 },
  { name: "Disney International", logo: b23 },
  { name: "Royal Enfield", logo: b24 },
  { name: "Cocacola", logo: b25 },
  { name: "GRSE", logo: b26 },
  { name: "Ajanta Quartz", logo: b27 },
  { name: "Pritam", logo: b28 },
  { name: "Bhagwati", logo: b29 },
];

export default function BrandAssociations() {
  return (
    <section className="brand-associations-section">
      <div className="brand-associations-container">

        <h2 className="brand-headline">
          Trusted by India's Leading Brands
        </h2>

        <p className="brand-subtext">
          Long-term partnerships built on reach, credibility,
          and measurable on-ground impact.
        </p>

        <div className="logo-strip-wrapper">
          <div className="logo-strip">

            {brands.map((brand, index) => (
              <div className="logo-item" key={index}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

