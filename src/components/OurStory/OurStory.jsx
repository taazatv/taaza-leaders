import React from 'react';
import './OurStory.css';

export default function OurStory() {
  return (
    <section className="story-section">
      <div className="story-section-header">
        <h2 className="story-section-title">Our Story</h2>
      </div>
      <div className="story-container">
        <div className="story-card">
          <h2 className="story-headline">Built on Trust. Scaled Through Influence.</h2>
          <div className="story-body">
            <p>
              Founded over two decades ago, Taaza TV stands as Eastern India's only Hindi-language national news network, 
              with a deep-rooted presence across West Bengal, Bihar, UP and Jharkhand.
            </p>
            <p>
              Driven by a philosophy of viewer-first journalism, the network has consistently delivered programming 
              that reflects the voice, concerns, and aspirations of the people. Its editorial strength lies in combining 
              credible reporting with ground-level relevance, making it a trusted source for millions.
            </p>
            <p>
              Over the years, Taaza has evolved into a multi-platform media ecosystem, seamlessly integrating television, 
              digital, print, and large-scale on-ground activations. This integrated approach allows the network to not only 
              inform audiences, but also engage and mobilize communities at scale.
            </p>
            <p>
              From hyperlocal reporting to large-format public events, Taaza's platforms are designed to create real impact 
              beyond screens.
            </p>
          </div>

          <div className="programming-block">
            <h3 className="programming-title">Content That Connects Across Generations</h3>
            <p className="programming-text">
              From hard news and fast updates to in-depth analysis, debates, and community-driven discussions — 
              Taaza's programming spans across formats that cater to every age group and audience segment.
              Its strength lies in delivering relevant, high-frequency, and relatable content that keeps audiences 
              informed and engaged in real time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}