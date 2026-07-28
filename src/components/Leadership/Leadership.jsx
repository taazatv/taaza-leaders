import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import './Leadership.css';

// Import Images
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import img4 from '../../assets/img4.png';
import img5 from '../../assets/img5.png';

const leadersData = [
  {
    id: 1,
    name: "Mr. Bishambhar Newar",
    title: "Chairman | Editor-in-Chief | Founder",
    shortDesc:
      "A veteran journalist and institution builder, Mr. Newar has been a three-time member of the Press Council of India and remains one of the most respected editorial voices in Eastern India.",

    fullDesc: `A veteran journalist and institution builder, Mr. Newar has been a three-time member of the Press Council of India and remains one of the most respected editorial voices in Eastern India.
He founded Chhapte Chhapte, a Hindi daily established as a platform for social awareness and reform, which continues publication to this day. Through over 1100+ episodes of his flagship show Sagar Manthan, he has led meaningful public discourse with prominent personalities across sectors.
His weekly column Ravivariya Chintan continues to shape public thought, reflecting his commitment to social responsibility and nation-building.
His legacy has been recognised at the highest levels, with his autobiography endorsed and inaugurated by distinguished constitutional leaders. Beyond media, he has actively contributed to education and philanthropy, supporting numerous initiatives over decades.
His vision continues to guide the ethos and direction of the Taaza Group.`,

    image: img1,
    // linkedinUrl: "https://linkedin.com/in/username1"
  },

  {
    id: 2,
    name: "Mr. Bipin Newar",
    title: "CEO | Director",
    shortDesc:
      "A two-time member of the Press Council of India, Mr. Bipin Newar brings strategic clarity and executional strength to the organisation.",

    fullDesc: `A two-time member of the Press Council of India, Mr. Bipin Newar brings strategic clarity and executional strength to the organisation.
In 2013, he was invited by the United States Government for an exclusive 44-day media leadership program, where he closely studied global media ecosystems including organisations such as Facebook and Google. This exposure has played a key role in shaping Taaza's evolving media strategy.
He oversees policy direction, operational frameworks, and high-level partnerships, ensuring the organisation maintains both editorial integrity and business scalability.`,

    image: img2,
    linkedinUrl: "https://www.linkedin.com/in/bipin-newar-4b82a442/"
  },

  {
    id: 3,
    name: "Mr. Vikram Newar",
    title: "COO | Director",
    shortDesc:
      "The technological backbone of the organisation, Mr. Vikram Newar leads all infrastructure, broadcast systems, and design innovation within the group.",

    fullDesc: `The technological backbone of the organisation, Mr. Vikram Newar leads all infrastructure, broadcast systems, and design innovation within the group.
From advanced server architecture to modern PCR setups, his work has enabled Taaza to operate with high technical efficiency and visual consistency. His oversight extends to design language and production quality, ensuring the network remains contemporary and competitive.`,

    image: img3,
    linkedinUrl: " https://www.linkedin.com/in/vikram-newar-81727561/"
  },

  {
    id: 4,
    name: "Mr. Vedansh Newar",
    title: "CMO | Director",
    shortDesc:
      "Representing the next phase of expansion, Vedansh Newar leads marketing, brand strategy, events, and digital growth.",

    fullDesc: `Representing the next phase of expansion, Vedansh Newar leads marketing, brand strategy, events, and digital growth.
With academic training in media and journalism from London, along with prior exposure to corporate and startup ecosystems, he brings a structured and forward-looking approach to the organisation.
Under his leadership, Taaza has significantly expanded its footprint in brand activations, youth engagement, and large-scale events, working with global and national brands such as Coca-Cola, Disney, and Royal Enfield.
He is currently focused on scaling the organisation through modern media practices, strategic partnerships, and multi-city expansion models.`,

    image: img4,
    linkedinUrl: "https://www.linkedin.com/in/vedanshnewar/"
  },

  {
    id: 5,
    name: "Mr. Rupesh Baheti",
    title: "Director",
    shortDesc:
      "A dynamic and execution-focused leader, Mr. Baheti plays a key role in building strategic relationships across government bodies, institutions, and political networks.",

    fullDesc: `A dynamic and execution-focused leader, Mr. Baheti plays a key role in building strategic relationships across government bodies, institutions, and political networks.
His strength lies in on-ground execution, stakeholder management, and identifying growth opportunities that expand the organisation's reach and influence.`,

    image: img5,
    // linkedinUrl: "https://linkedin.com/in/username5"
  }
];

export default function Leadership() {
const [selectedLeader, setSelectedLeader] = useState(null);
  return (
    <section className="leadership-section">
      <div className="leadership-container">
        
        <h2 className="leadership-main-headline">
          Leadership Rooted in Legacy, Driven by Vision
        </h2>

        <div className="leaders-grid-wrapper">
          <div className="leaders-grid">

            {leadersData.map((leader) => (
              <div key={leader.id} className="leader-card glass-card">

                <div className="leader-image-wrapper">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="leader-image"
                  />
                </div>

                <h3 className="leader-name">{leader.name}</h3>

                <p className="leader-title">{leader.title}</p>

                <p className="leader-short">{leader.shortDesc}</p>

                {/* LinkedIn Icon */}
                {leader.linkedinUrl && (
                  <div className="twitter-icon-wrapper">
                    <a
                      href={leader.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="twitter-icon-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                )}

                <button
                  className="know-more-btn"
                  onClick={() => setSelectedLeader(leader)}
                >
                  Know More
                </button>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {selectedLeader && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedLeader(null)}
        >
          <div
            className="modal-content glass-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setSelectedLeader(null)}
            >
              ✕
            </button>

            <div className="modal-image-wrapper">
              <img
                src={selectedLeader.image}
                alt={selectedLeader.name}
                className="modal-image"
              />
            </div>

            <h2 className="modal-name">{selectedLeader.name}</h2>

            <p className="modal-title">{selectedLeader.title}</p>

            <p className="modal-desc">{selectedLeader.fullDesc}</p>
          </div>
        </div>
      )}
    </section>
  );
}