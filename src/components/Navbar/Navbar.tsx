import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaSearch } from 'react-icons/fa'; // Install react-icons if you haven’t

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <h1>HYDROX</h1>
        <p>unique designs</p>
      </div>

      <div className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        <a href="#">Home</a>
        <a href="#">Designs</a>
        <a href="#">Services</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <FaSearch className={styles.icon} size={30}/>
      </div>

      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className={styles.icon} />
      </div>
    </nav>
  );
}
