import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/portfolioData';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>DC.</div>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map((link) => (
          <button key={link} className={styles.link} onClick={() => scrollTo(link)}>
            {link}
          </button>
        ))}
      </div>

      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
