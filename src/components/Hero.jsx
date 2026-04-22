import styles from './Hero.module.css';

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.tag}>⚡ Available for Opportunities</div>

        <h1 className={styles.title}>
          Deepak<br />
          <span className={styles.gradient}>Chauhan</span>
        </h1>

        <p className={styles.sub}>
          Frontend Developer crafting high-performance{' '}
          <span className={styles.highlight}>React.js & TypeScript</span> web apps
          with real-time game UIs, WebSocket magic & immersive experiences.
        </p>

        <div className={styles.btns}>
          <button className={`${styles.btn} ${styles.primary}`} onClick={() => scrollTo('projects')}>
            View My Work
          </button>
          <button className={`${styles.btn} ${styles.outline}`} onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
        </div>

        {/* Floating tech badges */}
        <div className={styles.badges}>
          {['React.js', 'TypeScript', 'WebSocket', 'Node.js', 'Next.js', 'Redux'].map((b) => (
            <span key={b} className={styles.badge}>{b}</span>
          ))}
        </div>
      </div>

      <div className={styles.scroll}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
