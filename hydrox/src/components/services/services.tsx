import React from 'react';
import styles from './ourservices.module.css';
import { FaLaptopCode, FaMobileAlt, FaDraftingCompass, FaCameraRetro } from 'react-icons/fa';
import { Line } from '../Line/line';

export const OurServices: React.FC = () => {
  return (
    <div className={styles.servicesSection}>
      <div className={styles.textContent}>
        <p className={styles.subBlue}>OUR SERVICES</p>
        <h1>
          WHAT WE <span className={styles.highlight}>DO?</span>
        </h1>
        <Line />
        <p className={styles.description}>
          At Hydrox, we push design boundaries to create bold, modern, and highly functional interfaces.
          Whether you're looking for a responsive website, intuitive mobile app, or stunning visuals —
          our team of professionals will bring your vision to life using the power of design and technology.
        <br/>
        <br/>
        We don’t just build digital products — we craft immersive experiences that leave a lasting impact.
Our creative process is guided by innovation, precision, and a deep understanding of user behavior.

        </p>
        <button className={styles.learnBtn}>View All</button>
      </div>

      <div className={styles.servicesGrid}>
        <div className={`${styles.card} ${styles.gradientCard} ${styles.alignUp} `}>
          <FaLaptopCode size={70} className={styles.icon} />
          <h3>Web Design</h3>
          <p>Responsive websites built with creativity & code.</p>
        </div>

        <div className={`${styles.card} ${styles.alignDown} ${styles.shadow1}`}>
          <FaMobileAlt size={70} className={styles.icon} />
          <h3>Mobile & Desktop Apps</h3>
          <p>Cross-platform apps that scale with performance.</p>
        </div>

        <div className={`${styles.card} ${styles.alignUp} ${styles.shadow2}`}>
          <FaDraftingCompass size={70} className={styles.icon} />
          <h3>UI & UX Design</h3>
          <p>Interfaces users love, built with purpose.</p>
        </div>

        <div className={`${styles.card} ${styles.alignDown} ${styles.gradientCard} `}>
          <FaCameraRetro size={70} className={styles.icon} />
          <h3>Photo Edition</h3>
          <p>Visual storytelling through pro-level photo edits.</p>
        </div>
      </div>
    </div>
  );
};
