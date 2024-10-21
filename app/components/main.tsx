'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from '../page.module.css';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200); // Delay the fade-in effect slightly
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={`${styles.content} ${isVisible ? styles.visible : styles.hidden}`}>
        <Image
          src="/main.jpg"
          alt="Main Profile"
          height={250}
          width={250}
          className={styles.profileImage}
        />
        <h1 className={styles.title}>Muskan Fatima</h1>
        <p className={styles.description}>
          I’m a Frontend Developer passionate about building amazing web experiences.
        </p>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/muskan-fatima-ab90732b7/" className={styles.linkButton}>
            Talk on LinkedIn
          </a>
          <a href="mailto:muskan@example.com" className={styles.linkButton}>
            Contact via Email
          </a>
        </div>
      </div>
    </section>
  );
}
