import Link from 'next/link';
import Image from 'next/image';
import styles from './Projects2.module.scss';

export default function Projects2() {
  return (
    <section className={styles.projectsSectionContainer}>
      <div className={styles.allProjectsContainer}>
        {/* Portfolio --> */}
        <Link
          className={styles.projectCardContainer}
          href={'/projects/portfolio'}
        >
          <div className={styles.imageContainer}></div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.projectName}>Portfolio v.1</h2>
            <p className={styles.creationDate}>2024</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              autem provident sunt dolorum reprehenderit, voluptatem vero, ipsam
              quaerat esse nostrum dolores ipsa voluptas voluptates doloribus
              obcaecati vitae. Ipsum, numquam odio!
            </p>
            <div className={styles.skillsContainer}>
              <p className={styles.skills}>Html</p>
              <p className={styles.skills}>Scss</p>
              <p className={styles.skills}>NextJs</p>
              <p className={styles.skills}>Git</p>
              <p className={styles.skills}>Figma</p>
            </div>
          </div>
        </Link>
        {/* Victory Zone --> */}
        <Link
          className={styles.projectCardContainer}
          href={'/projects/victoryzone'}
        >
          <div className={styles.imageContainer}>
            <Image
              src="/images/projects/victoryzone/desktophome2.png"
              alt="Photo section team du projet Victory Zone"
              fill
            />
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.projectName}>Victory Zone</h2>
            <p className={styles.creationDate}>2023</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              autem provident sunt dolorum reprehenderit, voluptatem vero, ipsam
              quaerat esse nostrum dolores ipsa voluptas voluptates doloribus
              obcaecati vitae. Ipsum, numquam odio!
            </p>
            <div className={styles.skillsContainer}>
              <p className={styles.skills}>Html</p>
              <p className={styles.skills}>Scss</p>
              <p className={styles.skills}>NextJs</p>
              <p className={styles.skills}>TypeScript</p>
              <p className={styles.skills}>Git</p>
              <p className={styles.skills}>Agile</p>
            </div>
          </div>
        </Link>

        {/* Incomming --> */}
        <div className={styles.projectCardContainer}>
          <div className={styles.imageContainer}></div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.projectName}>Incomming</h2>
            <p className={styles.creationDate}>2023</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
              autem provident sunt dolorum reprehenderit, voluptatem vero, ipsam
              quaerat esse nostrum dolores ipsa voluptas voluptates doloribus
              obcaecati vitae. Ipsum, numquam odio!
            </p>
            <div className={styles.skillsContainer}>
              <p className={styles.skills}>Html</p>
              <p className={styles.skills}>Css</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
