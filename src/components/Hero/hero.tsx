import React from 'react'
import styles from './Hero.module.css'
import { Line } from '../Line/line'

export function HERO() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.tagline}>CREATIVE DESIGN</p>
        <h1>
          WE ARE <span> CREATIVE</span> <br />
          DESIGNERS
          <Line />
        </h1>
     
        <p className={styles.description}>
        We blend imagination and innovation to craft digital experiences that inspire, engage, and convert.
Our team of skilled designers brings ideas to life with precision and passion.
Every interface is designed with the user in mind — intuitive, accessible, and impactful. <br/><br/>
We focus on storytelling through design, building meaningful connections through every interaction.
Driven by empathy and guided by purpose, we turn concepts into real-world solutions.</p>
     
      </div>

      <div className={styles.image}>
        <img src="/images/hero.jpeg" alt="Creative Design" />
      </div>
    </section>
  )
}
