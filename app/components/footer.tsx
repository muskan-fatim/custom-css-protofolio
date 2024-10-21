import Image from "next/image";
import styles from "../page.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <h1 className={styles["footer-heading"]}>
          Designing <b>With Heart</b> to Provide
          <br />
          <span className="subheading">the <b>Best User Experience</b></span>
        </h1>

        <p className={styles["footer-paragraph"]}>
          Some of the services I offer to ensure your digital product has a
          well-designed and user-friendly experience.
        </p>

        <div className={styles["footer-services"]}>
          <div className={styles["footer-service"]}>
            <Image
              src="/feather-pen.png"
              alt="Visual Design"
              className="mx-auto mb-4"
              height={50}
              width={50}
            />
            <h2>Visual Design</h2>
            <p>
              Craft visually appealing designs that delight users and elevate
              your brand.
            </p>
          </div>
          <div className={styles["footer-service"]}>
            <Image
              src="/layers.png"
              alt="Information Architecture"
              className="mx-auto mb-4"
              height={50}
              width={50}
            />
            <h2>Information Architecture</h2>
            <p>
              Develop a clear and intuitive structure for seamless navigation.
            </p>
          </div>
          <div className={styles["footer-service"]}>
            <Image
              src="/icons8-multiple-devices-96.png"
              alt="Responsive Design"
              className="mx-auto mb-4"
              height={50}
              width={50}
            />
            <h2>Responsive Design</h2>
            <p>
              Ensure a smooth experience across all devices with a responsive
              layout.
            </p>
          </div>
        </div>
      </div>

      <div className={styles["footer-copyright"]}>
        <p>© 2024 Muskan Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
