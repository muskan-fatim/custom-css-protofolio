import Image from "next/image";
import styles from './about.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <Image
            src="/main.jpg"
            alt="Main Profile"
            height={250}
            width={250}
            className={styles.aboutImage}
          />
          <h2 className={styles.aboutTitle}>About Me</h2>
          <p className={styles.aboutDescription}>
            Hi! I'm Muskan, a passionate Frontend Developer and currently a student at
            GIAIC in Governor House. Alongside my studies, I'm pursuing a BSc degree,
            constantly enhancing my skills in TypeScript, HTML, CSS, Next.js, and Tailwind CSS.
            I enjoy turning complex designs into smooth, responsive, and visually appealing websites.
            My aim is to create engaging user experiences that leave lasting impressions. Let's work
            together to bring your ideas to life!
          </p>
        </div>
      </div>
    </section>
  );
}
