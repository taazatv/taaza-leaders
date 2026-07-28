import React from 'react';
import './BrandOffers.css';

export default function BrandOffers() {
  const brands = [
    {
      name: "Coca-Cola",
      description: `Taaza partnered with Coca-Cola for a large-scale brand integration at Taaza Dandiya, Eastern India's biggest Dandiya event. With over 50,000 attendees at Netaji Indoor Stadium, the venue was transformed into a complete brand experience, aligning with Coca-Cola's identity and campaign.

The collaboration extended beyond visibility to product exclusivity, immersive branding, and large-scale digital amplification, creating strong recall among youth and families. This partnership has since expanded across multiple properties including college activations.`
    },
    {
      name: "Priya Gold",
      description: `A leading FMCG brand, Priya Gold has maintained a long-term association with Taaza across television, elections, and on-ground activations.

Leveraging Taaza's deep regional penetration, the brand has successfully driven sampling, awareness, and market dominance across Eastern India through consistent engagement strategies.`
    },
    {
      name: "Disney International",
      description: `Taaza's association with Disney marked a significant international collaboration through its flagship school property Kwizdom.

Through activations across 100+ schools, Disney Cruise Line was introduced directly to over 50,000 students, creating high-impact brand visibility within a premium and aspirational audience segment.`
    },
    {
      name: "Emami",
      description: `With a relationship spanning over two decades, Emami has partnered with Taaza across multiple campaigns integrating television, digital, and on-ground engagement.

From innovative election campaigns to residential and community activations, Taaza has consistently delivered high recall, strong messaging, and targeted audience reach for the brand.`
    }
    ,
    {
      name: "Royal Enfield",
      description: `Partnered on premium audience engagement initiatives targeting young college students via our program Youngotsav, aligning the brand with aspirational and community-driven platforms.

Delivered high-visibility integrations across events and digital, reinforcing brand positioning among youth and enthusiasts.`
    },
     {
      name: "Ganesh Consumer Foods",
      description: `Executed large-scale on-ground activations focused on ladies and family audiences, combining product sampling with high-engagement interactions.

Amplified through television episodes and massive digital UGC, creating a 360° visibility loop across platforms.`
    },
     {
      name: "Greenply",
      description: `Targeted core decision-makers (male homeowners) through exclusive activations inside residential complexes.

Integrated on-ground product display with prime-time TV campaigns, ensuring both top-of-mind recall and purchase influence.`
    },
     {
      name: "Macho Hint",
      description: `During high-intensity election season, executed 700+ on-ground video activations with the campaign hook “Ek Hint Toh Dete”.
Blended political engagement with brand recall via L-Band integrations and TVCs — creating a unique convergence of content and advertising.`
    },
     {
      name: "Wow! Momo",
      description: `A consistent partner across Taaza’s BTL ecosystem, leveraging our platforms to access high-intent youth audiences.

Through Kwizdom, enabled direct school-level penetration, driving significant store footfalls and brand affinity among students.`
    },
     {
      name: "Shyam Steel",
      description: `Delivered sustained mass visibility through year-long TVC campaigns, targeting core regional markets.

Leveraged Taaza’s strong broadcast reach to build consistent brand recall among mass audiences.`
    }
  ];   

  return (
    <section className="brand-offers-wrapper">
      <div className="brand-offers-inner">
        <h2 className="brand-offers-title">Where Brands Meet Real Audiences</h2>
        <p className="brand-offers-sub">
          An integrated platform delivering visibility, engagement, and conversion across media and ground networks.
        </p>
        
        {/* Horizontal scroll wrapper */}
        <div className="brand-offers-scroll">
          <div className="brand-offers-list">
            {brands.map((brand, index) => (
              <div className="brand-offers-card" key={index}>
                <h3 className="brand-offers-name">{brand.name}</h3>
                <p className="brand-offers-desc">{brand.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}