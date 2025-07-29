import React from 'react';
import styles from './about.module.css';
import { FaEye, FaCode } from 'react-icons/fa';
import { Line } from '../Line/line';


export function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <img src="/images/about.png" alt="About Us" />
        </div>

        <div className={styles.aboutContent}>
          <p className={styles.title}>ABOUT US</p>
          <h1 className={styles.heading}>
            WHO ARE <span className={styles.themeColor}>WE?</span>
          </h1>
          <Line/>
          <div className={styles.line}></div>

          <p className={styles.description}>
            At Hydrox, we are passionate digital creators driven by curiosity, innovation, and purpose. 
            Every pixel we push and every line of code we write is rooted in delivering thoughtful, 
            user-first experiences that transcend screens and trends.
          </p>
          <p className={styles.description}>
            Human-centered design guides every decision — we design not just for functionality, 
            but for feeling. Our interfaces resonate emotionally while staying technically refined.
          </p>
          <p className={styles.description}>
            We don’t just build websites or apps — we craft digital stories that perform.
          </p>

          <div className={styles.iconsRow}>
            <div className={styles.iconCard}>
              <div className={styles.iconHeading}>
                   <FaEye size={60} className={styles.icon} />
              <h2>Clean Code</h2>
              </div>
              <p>We build with clarity, readability, and precision in mind.</p>
            </div>
            <div className={styles.iconCard}>
            <div className={styles.iconHeading}>
              <FaCode size={60} className={styles.icon} />
              <h2>Modern Coder</h2>
              </div>
              <p>Using the latest tools and trends to code future-ready experiences.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}