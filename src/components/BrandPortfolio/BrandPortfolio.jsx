import React from 'react';
import './BrandPortfolio.css';


export default function BrandPortfolio() {
  return (
    <section className="brand-portfolio-section">
      <div className="brand-portfolio-container glass-card">
        <h2 className="portfolio-headline">Our Brand Portfolio</h2>
        <div className="portfolio-image-wrapper">
          <img 
            src={brandsImage} 
            alt="Our Brand Portfolio - Coca-Cola, Shyam Steel, Priya Gold, and many more" 
            className="portfolio-image"
          />
        </div>
      </div>
    </section>
  );
}