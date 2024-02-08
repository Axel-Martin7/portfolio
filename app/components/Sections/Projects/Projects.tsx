import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section className={styles.projectsSectionContainer}>
      <div className={styles.projectsContainer}>
        <div className={styles.projectContainer}></div>
        <div className={styles.projectContainer}></div>
        <div className={styles.projectContainer}></div>
      </div>
    </section>
  );
}
