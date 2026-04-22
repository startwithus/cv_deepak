import { useEffect } from 'react';

/**
 * Custom glowing cursor: a small dot that follows the mouse instantly
 * and a larger ring that follows with a smooth lag.
 */
export default function useCursor() {
  useEffect(() => {
    const dot    = document.getElementById('cursor-dot');
    const ring   = document.getElementById('cursor-ring');
    if (!dot || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx - 5  + 'px';
      dot.style.top  = my - 5  + 'px';
    };
    document.addEventListener('mousemove', onMove);

    const animate = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = rx - 20 + 'px';
      ring.style.top  = ry - 20 + 'px';
      requestAnimationFrame(animate);
    };
    animate();

    // Grow ring on hoverable elements
    const hoverEls = document.querySelectorAll('a, button, .skill-card, .project-card, .stat-card, .contact-item');
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        ring.style.width  = '60px';
        ring.style.height = '60px';
        ring.style.borderColor = 'var(--accent)';
      });
      el.addEventListener('mouseleave', () => {
        ring.style.width  = '40px';
        ring.style.height = '40px';
        ring.style.borderColor = 'rgba(0,240,255,0.4)';
      });
    });

    return () => document.removeEventListener('mousemove', onMove);
  }, []);
}
