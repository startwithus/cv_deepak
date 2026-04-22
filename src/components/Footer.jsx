import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.logo}>DC.</div>
        <p className={styles.copy}>
          Crafted with ❤️ by <strong>Deepak Chauhan</strong> · Frontend Developer
        </p>
        <p className={styles.stack}>
          React.js · TypeScript · WebSocket · Real-Time Games
        </p>
      </div>
    </footer>
  );
}
