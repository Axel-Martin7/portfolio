import styles from './page.module.scss';
import linkedin from '../../public/icons/linkedin.svg';
import Image from 'next/image';

export default function VictoryZone() {
  return (
    <main>
      <div className={styles.projectContainer}>
        <section className={styles.presentationSection}>
          <div className={styles.projectImage}></div>
          <div className={styles.projectInformationsContainer}></div>
        </section>

        <section className={styles.imagesSection}></section>
      </div>
      {/* <div className={styles.projectContainer}>
        <section className={styles.presentationSection}>
          <div className={styles.projectImage}></div>
          <div className={styles.projectInformationsContainer}>
            <div className={styles.titlesContainer}>
              <h1 className={styles.projectName}>Victory Zone</h1>
              <div className={styles.subTitleContainer}>
                <div className={styles.separator}></div>
                <h2 className={styles.subTitle}>Projet de fin d'études</h2>
                <div className={styles.separator}></div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.imagesSection}></section>
      </div> */}
    </main>
  );
}
