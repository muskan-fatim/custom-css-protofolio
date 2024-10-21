import styles from '../page.module.css';

export default function ContactMe() {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Contact Me</h2>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">
              Your Name
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">
              Your Email
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="message">
              Your Message
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.button}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
