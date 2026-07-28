import './Offers.css';

export default function Offers() {
  return (
    <section id="brands" className="offers-section">
      <div className="offers-container">
        <h2 className="section-title text-center">What Taaza Offers to Brands</h2>
        <p className="offers-subtitle text-center">Integrated platforms delivering real reach and impact</p>
        
        <div className="offers-grid">
          <div className="offer-card glass card-3d">
            <div className="offer-icon">📺</div>
            <h3>Television Advertising</h3>
            <p>Prime time slots with massive regional reach</p>
          </div>
          <div className="offer-card glass card-3d">
            <div className="offer-icon">📱</div>
            <h3>Digital & Social</h3>
            <p>Multi-platform digital campaigns</p>
          </div>
          <div className="offer-card glass card-3d">
            <div className="offer-icon">🎯</div>
            <h3>On-Ground Activations</h3>
            <p>Large scale events & brand experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
}