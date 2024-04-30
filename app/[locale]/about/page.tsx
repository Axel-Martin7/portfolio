import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './page.module.scss';
import { Link } from '@/navigation';

import linkedin from '@/public/icons/linkedin.svg';
import github from '@/public/icons/github.svg';

export default function About() {
  const t = useTranslations('page-about');
  return (
    <main>
      <div className={styles.aboutContainer}>
        <div className={styles.profilPictureContainer}>
          <div className={styles.photoContainer}>
            <Image
              className={styles.photo}
              src="/images/imageprofil2.jpg"
              alt={t('img-alt')}
              fill
            />
          </div>
        </div>

        <div className={styles.informationsSectionsContainer}>
          <div className={styles.presentationContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{t('me-title')} </h2>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.presentationTextsContainer}>
              <p>
                {t('me-part1-line1')} <br></br>
                {t('me-part1-line2')} <br></br>
                {t('me-part1-line3')}
              </p>
              <p>
                {t('me-part2-line1')} <br></br> {t('me-part2-line2')} <br></br>
                {t('me-part2-line3')} <br></br> {t('me-part2-line4')}
                <br></br> {t('me-part2-line5')} <br></br>
                {t('me-part2-line6')}
                <br></br> {t('me-part2-line7')}
              </p>
              <p>
                {t('me-part3-line1')} <br></br> {t('me-part3-line2')} <br></br>
                {t('me-part3-line3')} <br></br>
                {t('me-part3-line4')} <br></br>
                {t('me-part3-line5')} <br></br> {t('me-part3-line6')}
              </p>
              <p>{t('me-part4-line1')}</p>
            </div>
            <Link className={styles.buttonContainer} href="/skills">
              <button className={styles.skillsBtn}>Skills & Formation</button>
            </Link>
          </div>

          <div className={styles.pastContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{t('before-title')} </h2>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.pastTextsContainer}>
              <p>
                {t('before-part1-line1')} <br></br> {t('before-part1-line2')}{' '}
                <br></br> {t('before-part1-line3')}
              </p>
              <p>
                {t('before-part2-line1')} <br></br>
                {t('before-part2-line2')}
                <br></br>
                {t('before-part2-line3')} <br></br>
                {t('before-part2-line4')} <br></br>
                {t('before-part2-line5')} <br></br>
                {t('before-part2-line6')}
              </p>
              <p>{t('before-part3-line1')}</p>
            </div>
          </div>

          <div className={styles.goalsContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>{t('goals-title')}</h2>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.goalsTextsContainer}>
              <p>
                {t('goals-part1-line1')} <br></br> {t('goals-part1-line2')}
                <br></br>
                {t('goals-part1-line3')}
              </p>
              <p>
                {t('goals-part2-line1')} <br></br> {t('goals-part2-line2')}
                <br></br>
                {t('goals-part2-line3')}
              </p>
              <p>
                {t('goals-part3-line1')} <br></br> {t('goals-part3-line2')}
              </p>
              <p>{t('goals-part4-line1')}</p>
              <p>{t('goals-part5-line1')}</p>
            </div>
            <div className={styles.contactContainer}>
              <a
                className={styles.contactMail}
                href="mailto:axel.martin@outlook.com"
                aria-label={t('mail-aria')}
                rel="noopener noreferrer"
                target="_blank"
              >
                axel.martin@outlook.com
              </a>
              <div className={styles.socialLinksContainer}>
                <a
                  className={styles.itemContainer}
                  href="https://www.linkedin.com/in/axel-martin7/"
                  aria-label={t('linkedin-aria')}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={60}
                    height={60}
                    alt={t('linkedin-alt')}
                  />
                  <p className={styles.itemName}>Linkedin</p>
                </a>
                <a
                  className={styles.itemContainer}
                  href="https://github.com/Axel-Martin7"
                  aria-label={t('github-aria')}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    className={styles.itemIcon}
                    src={github}
                    width={60}
                    height={60}
                    alt={t('github-alt')}
                  />
                  <p className={styles.itemName}>Github</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
