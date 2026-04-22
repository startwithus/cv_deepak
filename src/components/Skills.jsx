import { SKILLS } from '../data/portfolioData';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <p className="fade-in" style={{ fontSize:'0.7rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'12px' }}>
        // Technical Arsenal
      </p>
      <h2 className={`${styles.title} fade-in`}>
        Skills &<br /><span className={styles.accent}>Expertise</span>
      </h2>

      <div className={styles.grid}>
        {SKILLS.map((skill, i) => (
          <div key={skill.name} className={`${styles.card} skill-card fade-in`} style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className={styles.cardGlow} />
            <div className={styles.icon}>{skill.icon}</div>
            <h3 className={styles.cardTitle}>{skill.name}</h3>
            <p className={styles.cardDesc}>{skill.desc}</p>
            <div className={styles.tags}>
              {skill.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
