import styles from './page.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

export default function VictoryZone() {
  const t = useTranslations('page-vz');

  return (
    <main>
      <div className={styles.projectContainer}>
        <section className={styles.presentationSection}>
          <div className={styles.projectImageContainer}>
            <Image
              src="/images/projects/victoryzone/desktophome2.png"
              alt={t('presentationImg-alt')}
              fill
            />
          </div>

          <div className={styles.projectPresentationContainer}>
            <div className={styles.projectHeader}>
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
                {t('description-part1-line3')}
              </p>
              <p>
                {t('description-part2-line1')} <br></br>
                {t('description-part2-line2')} <br></br>
                {t('description-part2-line3')} <br></br>
                {t('description-part2-line4')} <br></br>
                {t('description-part2-line5')}
              </p>
              <p>
                {t('description-part3-line1')} <br></br>
                {t('description-part3-line2')} <br></br>
                {t('description-part3-line3')} <br></br>
                {t('description-part3-line4')} <br></br>
                {t('description-part3-line5')} <br></br>
                {t('description-part3-line6')}
              </p>
              <div className={styles.sprintsLists}>
                <ul>
                  <span>{t('description-li1-title')}</span>
                  <li>{t('description-li1-line1')}</li>
                  <li>{t('description-li1-line2')}</li>
                  <li> {t('description-li1-line3')}</li>
                  <li> {t('description-li1-line4')}</li>
                  <li> {t('description-li1-line5')}</li>
                  <li>{t('description-li1-line6')}</li>
                  <li>{t('description-li1-line7')}</li>
                </ul>
                <ul>
                  <span> {t('description-li2-title')}</span>
                  <li> {t('description-li2-line1')} </li>
                  <li>{t('description-li2-line2')}</li>
                  <li>{t('description-li2-line3')}</li>
                  <li>{t('description-li2-line4')}</li>
                </ul>
                <ul>
                  <span>{t('description-li3-title')}</span>
                  <li>{t('description-li3-line1')}</li>
                  <li>{t('description-li3-line2')}</li>
                  <li>{t('description-li3-line3')}</li>
                </ul>
                <ul>
                  <span>{t('description-li4-title')}</span>
                  <li>{t('description-li4-line1')}</li>
                  <li>{t('description-li4-line2')}</li>
                  <li>{t('description-li4-line3')}</li>
                  <li>{t('description-li4-line4')}</li>
                  <li>{t('description-li4-line5')}</li>
                </ul>
              </div>
            </div>

            <a
              href="https://www.victoryzone.team/"
              className={styles.buttonContainer}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.btn} aria-label={t('button-arialabel')}>
                Victory Zone
              </button>
            </a>
          </div>
        </section>

        <section className={styles.imagesSection}>
          <div className={styles.desktopImageContainer}>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome1.png"
                alt={t('desktop-imgalt-1')}
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome2.png"
                alt={t('desktop-imgalt-2')}
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome3.png"
                alt={t('desktop-imgalt-3')}
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktophome4.png"
                alt={t('desktop-imgalt-4')}
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktopform.png"
                alt={t('desktop-imgalt-5')}
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/desktopadmin.png"
                alt={t('desktop-imgalt-6')}
                fill
              />
            </div>
          </div>
          <div className={styles.mobileImageContainer}>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome1.png"
                alt={t('mobile-imgalt-1')}
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome2.png"
                alt={t('mobile-imgalt-2')}
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome3.png"
                alt={t('mobile-imgalt-3')}
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome4.png"
                alt={t('mobile-imgalt-4')}
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                src="/images/projects/victoryzone/mobilehome5.png"
                alt={t('mobile-imgalt-5')}
                fill
              />
            </div>
            <div className={styles.image}>
              <Image
                className={styles.test}
                src="/images/projects/victoryzone/mobileadmin.png"
                alt={t('mobile-imgalt-6')}
                fill
              />
            </div>
          </div>
        </section>

        <section className={styles.otherProjectsSection}>
          <p>Mes autres projets : </p>
          <div className={styles.projectLinksContainer}>
            <Link className={styles.buttonContainer} href="/projects/portfolio">
              <button className={styles.projectBtn}>Portfolio</button>
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
