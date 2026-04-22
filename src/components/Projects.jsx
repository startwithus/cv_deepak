import { PROJECTS } from '../data/portfolioData';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <p className="fade-in" style={{ fontSize:'0.7rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'12px' }}>
        // Featured Work
      </p>
      <h2 className={`${styles.title} fade-in`}>
        Key<br /><span className={styles.accent}>Projects</span>
      </h2>

      <div className={styles.grid}>
        {PROJECTS.map((proj, i) => (
          <div
            key={proj.title}
            className={`${styles.card} project-card fade-in`}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className={styles.cardBar} />
            <div className={styles.emoji}>{proj.emoji}</div>
            <div className={styles.period}>{proj.period}</div>
            <h3 className={styles.cardTitle}>{proj.title}</h3>
            <p className={styles.cardDesc}>{proj.desc}</p>
            <div className={styles.stack}>
              {proj.stack.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
