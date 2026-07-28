import React from "react";
import "./UpcomingEvents.css";

import kwizdom from '../../assets/kwizdom.jpg';
import medha from '../../assets/medha.jpeg';
import youngotsav from '../../assets/youngotsav.png';
import wintercarnival from '../../assets/wintercarnival.jpg';
import ladiesSummerCamp from '../../assets/ladiessummercamp.png';
import super30 from '../../assets/SUPER30.jpg';
const eventsData = [
  {
    id: 1,
    title: "TAAZA DANDIYA",
    date: "OCTOBER 2026",
    description:
      "It's the largest and most prestigious Dandiya and Garba celebration in Eastern India. Over the years, it has earned a reputation for delivering high-energy performances, cultural inclusivity, and memorable experiences. With record-breaking crowds of over 50,000 participants each year, the entire Kolkata becomes a part of this grand celebration.",

    thumbnail:
      "https://img.youtube.com/vi/BEy6_AOFZbw/hqdefault.jpg",

    videoUrl:
      "https://youtu.be/BEy6_AOFZbw?si=uD2QmnDA7LqkqjVX",

    website:
      "https://taazadandiya.com",
  },

  {
    id: 2,
    title: "KWIZDOM 3.0",
    date: "JULY-AUGUST 2026",
    description:
      "Taaza TV has officially started its flagship quiz competition, KWIZDOM, aimed at fostering academic excellence and national pride among students in Kolkata. This initiative now reaches over 115 schools and nearly 50,000 students every year.",

    // Replace with your own image
    thumbnail: kwizdom,

    videoUrl:
      "https://www.instagram.com/reel/DNhlgo6xOSN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

    website:
      "https://kwizdom.com",
  },

  {
    id: 3,
    title: "MEDHA SAMMAN",
    date: "JUNE - JULY 2026",
    description:
      "Medha Samman celebrates academic excellence by honouring thousands of toppers every year. With participation from over 100 schools, it has become one of Eastern India's most prestigious student recognition platforms.",

    // Replace with your own image
    thumbnail: medha,

    videoUrl:
      "https://www.instagram.com/reel/DLXxD-dp5As/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

    website:
      "https://medhasamman.com",
  },

  {
    id: 4,
    title: "YOUNGOTSAV",
    date: "MARCH 2026",
    description:
      "A youth festival connecting over 1,00,000 students through talent and innovation.",

    thumbnail: youngotsav,

    videoUrl:
      "https://www.instagram.com/reel/DVvEu49Ec_L/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

    website:
      "https://youngotsav.com/",
  },

  {
    id: 5,
    title: "WINTER CARNIVAL",
    date: "DECEMBER 2026",
    description:
      "Taaza TV Winter Carnival is Eastern India's premier community festival, bringing families together through exciting games, live entertainment, brand activations, thoughtful gifts, and unforgettable experiences that transform neighbourhoods into vibrant celebrations of togetherness.",

    thumbnail: wintercarnival,

    videoUrl:
      "https://www.instagram.com/reel/DUgRNp2kx-t/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",

    // website:
    //   "Taaza TV Winter Carnival is Eastern India's premier community festival, bringing families together through exciting games, live entertainment, brand activations, thoughtful gifts, and unforgettable experiences that transform neighbourhoods into vibrant celebrations of togetherness.",
  },

  {
    id: 6,
    title: "LADIES SUMMER CAMP",
    date: "JUNE 2026",
    description:
      "An engaging summer platform connecting 2,000+ women across Kolkata and Howrah.",
   
      thumbnail:ladiesSummerCamp,

     },

  {
    id: 7,
    title: "SUPER 30",
    date: "JUNE 2026",
    description:
      "Celebrating outstanding academic achievers scoring 99%+ in board examinations.",

    thumbnail:super30,

    },
];

export default function UpcomingEvents() {
  return (
    <section className="events-wrapper">
      <div className="events-inner">

        <h2 className="events-title">
          Upcoming Events
        </h2>

        <div className="events-scroll">
          <div className="events-list">

            {eventsData.map((event) => (

              <div
                className="events-card"
                key={event.id}
              >

                {/* VIDEO */}

                <a
                  href={event.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="events-video-wrapper"
                >
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="events-thumbnail"
                  />

                  <div className="events-play-icon">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </a>

                {/* CONTENT */}

                <div className="events-content">

                  <p className="events-date">
                    {event.date}
                  </p>

                  <h3 className="events-name">
                    {event.title}
                  </h3>

                  <p className="events-desc">
                    {event.description}
                  </p>

                </div>

                {/* BUTTON */}

                <div className="events-btn-wrapper">

                  <a
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="events-knowmore"
                  >
                    Know More →
                  </a>

                </div>

              </div>

            ))}

          </div>
        </div>

      </div>
    </section>
  );
}