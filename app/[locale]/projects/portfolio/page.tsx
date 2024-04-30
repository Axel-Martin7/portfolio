import styles from './page.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function Portfolio() {
  const t = useTranslations('page-portfolio');

  return (
    <main>
      <div className={styles.projectContainer}>
        <section className={styles.projectImageSection}>
          <div className={styles.projectImageContainer}>
            <Image
              className={styles.img}
              src="/images/projects/portfolio/portfoliologo.png"
              alt={t('presentationImg-alt')}
              fill
            />
          </div>
        </section>

        <section className={styles.presentationSection}>
          <div className={styles.projectHeader}>
            <div className={styles.titlesContainer}>
              <div className={styles.titlesContentContainer}>
                <h1 className={styles.projectName}>Portfolio v1</h1>
                <div className={styles.subTitleContainer}>
                  <div className={styles.separator}></div>
                  <h2 className={styles.subTitle}>{t('sub-title')}</h2>
                  <div className={styles.separator}></div>
                </div>
              </div>
            </div>

            <div className={styles.skillsContainer}>
              <p className={styles.skills}>Html</p>
              <p className={styles.skills}>Scss</p>
              <p className={styles.skills}>Next.js</p>
              <p className={styles.skills}>TypeScript</p>
              <p className={styles.skills}>Node.js</p>
              <p className={styles.skills}>Express</p>
              <p className={styles.skills}>PostgreSQL</p>
              <p className={styles.skills}>Agile</p>
              <p className={styles.skills}>Git</p>
            </div>
          </div>

          <div className={styles.projectDescription}>
            <p>
              {t('description-part1-line1')} <br></br>
              {t('description-part1-line2')} <br></br>
              {t('description-part1-line3')} <br></br>
              {t('description-part1-line4')}
            </p>
            <p>
              {t('description-part2-line1')} <br></br>
              {t('description-part2-line2')} <br></br>
              {t('description-part2-line3')} <br></br>
              {t('description-part2-line4')} <br></br>
              {t('description-part2-line5')}
            </p>
          </div>

          <a
            href="https://github.com/Axel-Martin7/portfolio"
            className={styles.buttonContainer}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.btn} aria-label={t('button-arialabel')}>
              Repos Github
            </button>
          </a>
        </section>

        <section className={styles.otherProjectsSection}>
          <p>{t('other-projects')}</p>
          <div className={styles.projectLinksContainer}>
            <Link
              className={styles.buttonContainer}
              href="/projects/victoryzone"
            >
              <button className={styles.projectBtn}>Victory Zone</button>
            </Link>
            <Link className={styles.buttonContainer} href="/projects/okanban">
              <button className={styles.projectBtn}>OKanban</button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
