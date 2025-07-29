import React from "react";
import styles from "./stats.module.css";
import { FaProjectDiagram, FaHandshake, FaUsers, FaRegUser } from "react-icons/fa";

export function StatsSection() {
  return (
    <section className={styles.stats}>
      <div className={styles.statCard}>
        <FaProjectDiagram className={styles.icon} size={100} />
        <h2>PROJECT</h2>
        <p>300+</p>
      </div>

      <div className={styles.statCard}>
        <FaHandshake className={styles.icon} size={100} />
        <h2>PLEASURE</h2>
        <p>8,9</p>
      </div>

      <div className={styles.statCard}>
        <FaRegUser className={styles.icon} size={100} />
        <h2>CUSTOMER</h2>
        <p>3000+</p>
      </div>

      <div className={styles.statCard}>
        <FaUsers className={styles.icon} size={100} />
        <h2>TEAM MEMBERS</h2>
        <p>23</p>
      </div>
    </section>
  );
}
