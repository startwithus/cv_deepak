import { EXPERIENCE } from '../data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <p className="fade-in" style={{ fontSize:'0.7rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'12px' }}>
        // Work History
      </p>
      <h2 className={`${styles.title} fade-in`}>
        Professional<br /><span className={styles.accent}>Experience</span>
      </h2>

      <div className={styles.timeline}>
        {EXPERIENCE.map((exp, i) => (
          <div key={i} className={`${styles.item} fade-in`} style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className={styles.dot} style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}` }} />
            <div className={styles.card}>
              <div className={styles.period}>{exp.period}</div>
              <div className={styles.role}>{exp.role}</div>
              <div className={styles.company}>{exp.company}</div>
              <ul className={styles.points}>
                {exp.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
