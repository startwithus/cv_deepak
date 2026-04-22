import { CONTACT } from '../data/portfolioData';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <p className="fade-in" style={{ fontSize:'0.7rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--accent)', marginBottom:'12px' }}>
        // Let's Connect
      </p>
      <h2 className={`${styles.title} fade-in`}>
        Get In<br /><span className={styles.accent}>Touch</span>
      </h2>

      <div className={styles.grid}>
        {/* Contact links */}
        <div className={`${styles.links} fade-in`}>
          {CONTACT.map((c) =>
            c.href ? (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className={`${styles.item} contact-item`}>
                <span className={styles.itemIcon}>{c.icon}</span>
                <div>
                  <div className={styles.itemLabel}>{c.label}</div>
                  <div className={styles.itemValue}>{c.value}</div>
                </div>
                <span className={styles.arrow}>→</span>
              </a>
            ) : (
              <div key={c.label} className={`${styles.item} contact-item`}>
                <span className={styles.itemIcon}>{c.icon}</span>
                <div>
                  <div className={styles.itemLabel}>{c.label}</div>
                  <div className={styles.itemValue}>{c.value}</div>
                </div>
              </div>
            )
          )}
        </div>

        {/* CTA card */}
        <div className={`${styles.cta} fade-in delay-2`}>
          <div className={styles.ctaGlow} />
          <h3 className={styles.ctaTitle}>
            Ready to build<br />something <span className={styles.accent}>amazing?</span>
          </h3>
          <p className={styles.ctaDesc}>
            I'm currently open to full-time roles in Noida, Gurugram, or Remote.
            Let's talk about how I can contribute to your team.
          </p>
          <a href="mailto:imdeepakchauhan66@gmail.com" className={styles.ctaBtn}>
            Send Me a Message →
          </a>

          <div className={styles.availability}>
            <span className={styles.dot} />
            Available for immediate interview
          </div>
        </div>
      </div>
    </section>
  );
}
