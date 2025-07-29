import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Crafted by <span className={styles.highlight}>PHOENIX THE SAGE OF MYTH</span></p>
    </footer>
  );
}
