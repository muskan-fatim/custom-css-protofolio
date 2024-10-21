import { SiTypescript, SiHtml5, SiCss3, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaMobileAlt, FaPalette } from "react-icons/fa";
import Image from "next/image";
import styles from '../page.module.css';

export default function Skill() {
  return (
    <div className={styles.skillContainer}>
      <h2 className={styles.skillTitle}>My Skills</h2>
      
      <div className={styles.imageContainer}>
        <Image
          src="/main.jpg"
          alt="Main Profile"
          height={250}
          width={250}
          className={styles.profileImage}
        />
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.skillCard}>
          <div className={styles.skillHeader}>
            <SiTypescript className="text-3xl text-gray-700" />
            <h3>TypeScript</h3>
          </div>
          <p className={styles.skillDescription}>Strong knowledge of TypeScript, building scalable and maintainable applications.</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillHeader}>
            <SiHtml5 className="text-3xl text-gray-700" />
            <SiCss3 className="text-3xl text-gray-700" />
            <h3>HTML & CSS</h3>
          </div>
          <p className={styles.skillDescription}>Proficient in crafting clean and structured web pages with modern styling techniques.</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillHeader}>
            <SiNextdotjs className="text-3xl text-gray-700" />
            <h3>Next.js</h3>
          </div>
          <p className={styles.skillDescription}>Experienced in building dynamic and SEO-friendly web applications with Next.js.</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillHeader}>
            <SiTailwindcss className="text-3xl text-gray-700" />
            <h3>Tailwind CSS</h3>
          </div>
          <p className={styles.skillDescription}>Skilled at using Tailwind CSS to rapidly design modern and responsive UIs.</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillHeader}>
            <FaMobileAlt className="text-3xl text-gray-700" />
            <h3>Responsive Design</h3>
          </div>
          <p className={styles.skillDescription}>Creating websites that are responsive across all devices, ensuring a seamless user experience.</p>
        </div>

        <div className={styles.skillCard}>
          <div className={styles.skillHeader}>
            <FaPalette className="text-3xl text-gray-700" />
            <h3>UI/UX Focused</h3>
          </div>
          <p className={styles.skillDescription}>Ensuring that designs are not only visually appealing but also user-friendly and intuitive.</p>
        </div>
      </div>
    </div>
  );
}
