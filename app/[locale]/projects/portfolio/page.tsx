import styles from './page.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Portfolio() {
  const t = useTranslations('page-vz');

  return (
    <main>
      <div className={styles.projectContainer}>
        <section className={styles.presentationSection}>
          <div className={styles.projectImage}>
            <Image
              src="/images/projects/portfolio/portfoliologo.png"
              alt="Logo du projet portfolio v1"
              fill
            />
          </div>
          <div className={styles.projectInformationsContainer}>
            <div className={styles.titlesContainer}>
              <div className={styles.titlesContentContainer}>
                <h1 className={styles.projectName}>Victory Zone</h1>
                <div className={styles.subTitleContainer}>
                  <div className={styles.separator}></div>
                  <h2 className={styles.subTitle}>{t('sub-title')}</h2>
                  <div className={styles.separator}></div>
                </div>
              </div>
            </div>
            <div className={styles.projectSkills}>
              <p className={styles.skills}>Html</p>
              <p className={styles.skills}>Scss</p>
              <p className={styles.skills}>Next.js</p>
              <p className={styles.skills}>TypeScript</p>
              <p className={styles.skills}>EsLint</p>
              <p className={styles.skills}>Git</p>
            </div>
            <div className={styles.projectDescription}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
                cumque, quidem adipisci, eveniet nihil cupiditate placeat ab in
                accusantium earum suscipit sapiente sunt similique aperiam culpa
                molestias quibusdam incidunt pariatur.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
