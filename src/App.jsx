import React from 'react';
import Navbar from './components/Navbar/Navbar';
import VideoSection from './components/VideoSection/VideoSection';
import StatsSection from './components/StatsSection/StatsSection';
import Ticker from './components/Ticker/Ticker';
import OurStory from './components/OurStory/OurStory';
import ScaleReach from './components/ScaleReach/ScaleReach';
import Leadership from './components/Leadership/Leadership';
import BrandAssociations from './components/BrandAssociations/BrandAssociations';
import BrandOffers from './components/BrandOffers/BrandOffers';
import Advisory from './components/Advisory/Advisory';
import BrandPortfolio from './components/BrandPortfolio/BrandPortfolio';
import Footer from './components/Footer/Footer';
import AnimatedSection from './components/AnimatedSection/AnimatedSection';
// import EGC from './components/EGC/EGC';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';
import TaazaBrandAssociation from './components/TaazaBrandAssociations/TaazaBrandAssociations';
// import LiveTVPopup from './components/LiveTVPopup/LiveTVPopup';

import './App.css';

function App() {
  return (
    <div className="app-container">

      <div className="first-screen">
        <Navbar />
        <VideoSection />
      </div>

      <AnimatedSection delay={100}>
        <StatsSection />
      </AnimatedSection>

      <AnimatedSection delay={200}>
        <Ticker />
      </AnimatedSection>

      <AnimatedSection delay={300}>
        <section id="story">
          <OurStory />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={250}>
        <section id="scale">
          <ScaleReach />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={400}>
        <section id="leadership">
          <Leadership />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={450}>
        <section id="brands">
          <BrandAssociations />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={455}>
        <section id="taaza-group">
          <TaazaBrandAssociation />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={500}>
        <section id="advisory">
          <Advisory />
        </section>
      </AnimatedSection>

      <AnimatedSection delay={550}>
        <section id="offers">
          <BrandOffers />
        </section>
      </AnimatedSection>

      {/* <AnimatedSection delay={600}>
        <BrandPortfolio />
      </AnimatedSection> */}

      {/* Employee Generated Content (Hidden) */}
      {/*
      <AnimatedSection delay={620}>
        <EGC />
      </AnimatedSection>
      */}

      <AnimatedSection delay={620}>
        <UpcomingEvents />
      </AnimatedSection>

      <AnimatedSection delay={650}>
        <Footer />
      </AnimatedSection>

      <FloatingButtons />

      {/* <LiveTVPopup /> */}

    </div>
  );
}

export default App;