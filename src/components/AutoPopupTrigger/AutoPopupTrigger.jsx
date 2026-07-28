import React, { useEffect, useState } from 'react';

export default function AutoPopupTrigger({ onTrigger }) {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasTriggered && window.scrollY > 300) {
        onTrigger();
        setHasTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered, onTrigger]);

  return null;
}