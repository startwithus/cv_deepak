import styles from './Cursor.module.css';

export default function Cursor() {
  return (
    <>
      <div id="cursor-dot"  className={styles.dot}  />
      <div id="cursor-ring" className={styles.ring} />
    </>
  );
}
