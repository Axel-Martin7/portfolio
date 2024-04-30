import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

import linkedin from '@/public/icons/linkedin.svg';
import github from '@/public/icons/github.svg';
import mail from '@/public/icons/mail.svg';
import Image from 'next/image';

export default function Contact() {
  const t = useTranslations('page-contact');

  return (
    <main>
      <div className={styles.contactPage}>
        <div className={styles.sectionsContainer}>
          <section className={styles.presentationSection}>
            <div className={styles.textsContainer}>
              <p>{t('description-part1')}</p>
              <p>
                {t('description-part2-line1')} <br></br>
                {t('description-part2-line2')}
              </p>
              <p>
                {t('description-part3-line1')} <br></br>
                {t('description-part3-line2')}
              </p>
            </div>
          </section>

          <section className={styles.cardsSection}>
            <div className={styles.contactCard}>
              <div className={styles.cardFrame}>
                <div className={styles.cardContentContainer}>
                  <div className={styles.profilInfos}>
                    <p className={styles.name}>
                      <span className={styles.firstname}>Axel</span>
                      <span className={styles.lastname}>Martin</span>
                    </p>
                    <p className={styles.role}>Web developer</p>
                  </div>
                  <div className={styles.socialLinksContainer}>
                    <a
                      className={styles.socialLink}
                      href="mailto:axel.martin@outlook.com"
                      aria-label={t('mail-aria')}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        className={styles.socialIcon}
                        src={mail}
                        width={40}
                        height={40}
                        alt="pp"
                      />
                      axel.martin@outlook.com
                    </a>
                    <a
                      className={styles.socialLink}
                      href="https://www.linkedin.com/in/axel-martin7/"
                      aria-label={t('linkedin-aria')}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        className={styles.socialIcon}
                        src={linkedin}
                        width={40}
                        height={40}
                        alt="pp"
                      />
                      linkedin.com/in/axel-martin7
                    </a>
                    <a
                      className={styles.socialLink}
                      href="https://github.com/Axel-Martin7"
                      aria-label={t('github-aria')}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Image
                        className={styles.socialIcon}
                        src={github}
                        width={40}
                        height={40}
                        alt="pp"
                      />
                      github.com/Axel-Martin7
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.backCard}></div>
          </section>
        </div>
      </div>
    </main>
  );
}
