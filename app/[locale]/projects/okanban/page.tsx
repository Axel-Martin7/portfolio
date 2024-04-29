import styles from './page.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Okanban() {
  const t = useTranslations('page-okanban');

  return (
    <main>
      <div className={styles.projectContainer}>
        <section className={styles.presentationSection}>
          <div className={styles.projectImageContainer}>
            <Image
              src="/images/projects/okanban/okanbandesktop.png"
              alt={t('presentationImg-alt')}
              fill
            />
          </div>

          <div className={styles.projectPresentationContainer}>
            <div className={styles.projectHeader}>
              <div className={styles.titlesContainer}>
                <div className={styles.titlesContentContainer}>
                  <h1 className={styles.projectName}>Okanban</h1>
                  <div className={styles.subTitleContainer}>
                    <div className={styles.separator}></div>
                    <h2 className={styles.subTitle}>{t('sub-title')}</h2>
                    <div className={styles.separator}></div>
                  </div>
                </div>
              </div>
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

            <div className={styles.projectDescription}>
              <p>
                {t('description-part1-line1')} <br></br>
                {t('description-part1-line2')} <br></br>
                {t('description-part1-line3')}
                <br></br>
                {t('description-part1-line4')} <br></br>
                {t('description-part1-line5')}
              </p>
              <p>
                {t('description-part2-line1')} <br></br>
                {t('description-part2-line2')} <br></br>
                {t('description-part2-line3')} <br></br>
                {t('description-part2-line4')} <br></br>
                {t('description-part2-line5')} <br></br>
                {t('description-part2-line6')} <br></br>
              </p>
            </div>

            <a
              href="https://github.com/Axel-Martin7/okanban-backend"
              className={styles.buttonContainer}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.btn} aria-label={t('button-arialabel')}>
                Github back
              </button>
            </a>
          </div>
        </section>

        <section className={styles.imagesSection}>
          <div className={styles.desktopImageContainer}>
            <Image
              src="/images/projects/okanban/okanbandesktop.png"
              alt={t('desktop-imgalt-1')}
              fill
            />
          </div>
          <div className={styles.mobileImageContainer}>
            <Image
              src="/images/projects/okanban/okanbanmobile.png"
              alt={t('mobile-imgalt-1')}
              fill
            />
          </div>
        </section>

        <section className={styles.otherProjectsSection}>
          <p>{t('other-projects')}</p>
          <div className={styles.projectLinksContainer}>
            <Link className={styles.buttonContainer} href="/projects/portfolio">
              <button className={styles.projectBtn}>Portfolio</button>
            </Link>
            <Link
              className={styles.buttonContainer}
              href="/projects/victoryzone"
            >
              <button className={styles.projectBtn}>Victory Zone</button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
