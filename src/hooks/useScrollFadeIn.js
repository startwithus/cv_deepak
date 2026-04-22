import { useEffect } from 'react';

/**
 * Adds IntersectionObserver to all elements with .fade-in class.
 * When they enter the viewport, the .visible class is added,
 * triggering the CSS transition defined in index.css.
 */
export default function useScrollFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
