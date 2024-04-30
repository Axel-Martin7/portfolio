import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import Image from 'next/image';
import styles from './Projects.module.scss';

export default function Projects() {
  const t = useTranslations('component-Projects');

  return (
    <section className={styles.projectsSectionContainer}>
      <div className={styles.allProjectsContainer}>
        {/* Portfolio --> */}
        <Link
          className={styles.projectCardContainer}
          href={'/projects/portfolio'}
        >
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/projects/portfolio/portfoliologo.png"
                alt={t('portfolioImgAlt')}
                fill
              />
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.projectName}>Portfolio v.1</h2>
            <p className={styles.creationDate}>2024</p>
            <p className={styles.description}>{t('portfolioDescription')}</p>
            <div className={styles.skillsContainer}>
              <p className={styles.skills}>Html</p>
              <p className={styles.skills}>Scss</p>
              <p className={styles.skills}>NextJs</p>
              <p className={styles.skills}>Typescript</p>
              <p className={styles.skills}>next-Intl</p>
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
            <div className={styles.imageFrame}>
              <Image
                src="/images/projects/victoryzone/desktophome2.png"
                alt={t('vzImgAlt')}
                fill
              />
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.projectName}>Victory Zone</h2>
            <p className={styles.creationDate}>2023</p>
            <p className={styles.description}>{t('vzDescription')}</p>
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
        </Link>
        {/* Okanban --> */}
        <Link
          className={styles.projectCardContainer}
          href={'/projects/okanban'}
        >
          <div className={styles.imageContainer}>
            <div className={styles.imageFrame}>
              <Image
                src="/images/projects/okanban/okanbandesktop.png"
                alt={t('okanbanImgAlt')}
                fill
              />
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <h2 className={styles.projectName}>O&apos;Kanban</h2>
            <p className={styles.creationDate}>2023</p>
            <p className={styles.description}>{t('okanbanDescription')}</p>
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
        </Link>
      </div>
    </section>
  );
}
