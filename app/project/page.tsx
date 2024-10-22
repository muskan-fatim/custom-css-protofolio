import styles from '../page.module.css';

export default function Projects() {
  const projects = [
    {
      title: "Joke Generator app",
      description: "A Joke Generator application built with NextJs and Tailwind CSS.",
      link: "https://7-joke-genrator.vercel.app/",
      image: "/joke.PNG",
    },
    {
      title: "Digital Clock",
      description: "My personal digital clock website built with Nextjs and Tailwind CSS.",
      link: "https://6-digital-clock.vercel.app/",
      image: "/image.png",
    },
    {
      title: "Resume Generator",
      description: "Resume Generator website built with Nextjs.",
      link: "https://resum-genreater.vercel.app/",
      image: "/Capture.PNG",
    },
    {
      title: "Birthday Card",
      description: "My birthday card website built with Nextjs.",
      link: "https://day-3-omega.vercel.app/",
      image: "/birthday.PNG",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img
                className={styles.projectImage}
                src={project.image}
                alt={project.title}
              />
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <a
                  href={project.link}
                  className={styles.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
