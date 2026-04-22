import { STATS } from '../data/portfolioData';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <p className="fade-in" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '12px' }}>
        // About Me
      </p>

      <div className={styles.grid}>
        {/* Left */}
        <div className="fade-in">
          <h2 className={styles.title}>
            Building the<br />
            <span className={styles.accent}>Future</span> of Web
          </h2>
          <p className={styles.para}>
            Frontend developer with <strong>3.6 years</strong> of experience building
            high-performance React.js & TypeScript web apps and real-time game UIs.
            I specialize in designing maintainable UI architectures and real-time integrations.
          </p>
          <p className={styles.para}>
            Passionate about clean code, performance optimization, and continuous learning.
            I thrive in collaborative environments solving challenging engineering problems
            with Unity and backend teams.
          </p>
          <div className={styles.chips}>
            <span className={styles.chip}>📍 Ghaziabad, U.P.</span>
            <span className={styles.chip}>🚀 Open to Noida & Gurugram</span>
            <span className={styles.chip}>💻 Remote Friendly</span>
          </div>
        </div>

        {/* Right — stats */}
        <div className={`${styles.statsGrid} fade-in delay-2`}>
          {STATS.map((s) => (
            <div key={s.label} className={`${styles.statCard} stat-card`}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
