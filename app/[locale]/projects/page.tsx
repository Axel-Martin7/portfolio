import styles from './page.module.scss';
import Projects from '@/app/components/Sections/Projects/Projects';

export default function ProjectsPage() {
  return (
    <main className={styles.projectsPage}>
      <div className={styles.projectsContainer}>
        <Projects />
      </div>
    </main>
  );
}
