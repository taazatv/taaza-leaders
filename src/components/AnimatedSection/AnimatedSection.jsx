import React from 'react';
import { useScrollAnimation } from  '../hooks/useScrollAnimation';
import './AnimatedSection.css';

export default function AnimatedSection({ children, delay = 0, once = false }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2, once });

  return (
    <div
      ref={ref}
      className={`animated-section ${isVisible ? 'animate-in' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}