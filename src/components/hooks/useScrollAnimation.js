import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (options = { threshold: 0.2, once: false }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once) {
            observer.disconnect();
          }
        } else {
          if (!options.once) {
            setIsVisible(false);
          }
        }
      },
      { threshold: options.threshold || 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.threshold, options.once]);

  return [ref, isVisible];
};