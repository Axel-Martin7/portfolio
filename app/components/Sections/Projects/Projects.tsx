import Link from 'next/link';
import Image from 'next/image';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section className={styles.projectsSectionContainer}>
      <div className={styles.allProjectsContainer}>
        {/* Portfolio --> */}
        <div className={styles.projectCardContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/projects/portfolio/portfoliologo.png"
                alt="Logo du projet portfolio v1"
                fill
              />
            </div>
          </div>
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
        </div>
        {/* Victory Zone --> */}
        <div className={styles.projectCardContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/projects/victoryzone/desktophome2.png"
                alt="Image du projet VictoryZone"
                fill
              />
            </div>
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
              <p className={styles.skills}>Node.js</p>
              <p className={styles.skills}>Express</p>
              <p className={styles.skills}>PostgreSQL</p>
              <p className={styles.skills}>Git</p>
              <p className={styles.skills}>Agile</p>
            </div>
          </div>
        </div>
        {/* Okanban --> */}
        <div className={styles.projectCardContainer}>
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/projects/okanban/okanbandesktop.png"
                alt="Aperçu du projet oKanban en version desktop"
                fill
              />
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.projectName}>O&apos;Kanban</h2>
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
              <p className={styles.skills}>JavaScript</p>
              <p className={styles.skills}>Node.js</p>
              <p className={styles.skills}>Express</p>
              <p className={styles.skills}>PostgreSQL</p>
              <p className={styles.skills}>Sequelize</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
