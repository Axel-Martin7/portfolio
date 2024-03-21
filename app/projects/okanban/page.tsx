import styles from './page.module.scss';
import Image from 'next/image';

export default function Okanban() {
  return (
    <main>
      <div className={styles.projectContainer}>
        <section className={styles.presentationSection}>
          <div className={styles.projectImage}></div>
          <div className={styles.projectInformationsContainer}>
            <div className={styles.titlesContainer}>
              <h1 className={styles.projectName}>O&apos;Kanban</h1>
              <div className={styles.subTitleContainer}>
                <div className={styles.separator}></div>
                <h2 className={styles.subTitle}>Application fullstack</h2>
                <div className={styles.separator}></div>
              </div>
            </div>
            <div className={styles.projectSkills}>
              <p className={styles.skills}>Html</p>
              <p className={styles.skills}>Scss</p>
              <p className={styles.skills}>NextJs</p>
              <p className={styles.skills}>TypeScript</p>
              <p className={styles.skills}>Git</p>
              <p className={styles.skills}>Agile</p>
            </div>
            <div className={styles.projectDescription}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio atque voluptate culpa necessitatibus aliquid
                consequatur possimus neque iure repellendus, natus odit illum
                quidem earum nihil. Itaque eligendi eum est iste?
              </p>
            </div>
          </div>
        </section>

        {/* <section className={styles.imagesSection}>
          <div className={styles.desktopImageContainer}>
            <div className={styles.image}></div>
          </div>
          <div className={styles.mobileImageContainer}>
            <div className={styles.image}></div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
