import { useTranslations } from 'next-intl';
import styles from './Contact.module.scss';
import linkedin from '../../../../public/icons/linkedin.svg';
import Image from 'next/image';

export default function Contact() {
  const t = useTranslations('component-Contact');

  return (
    <section className={styles.contactSectionContainer}>
      <div className={styles.contactContainer}>
        <div className={styles.contactContentContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.titleSeparator}></div>
          </div>

          <p className={styles.contactText}>{t('description')}</p>

          <div className={styles.contactInfos}>
            <a className={styles.mail} href="mailto:axel.martin@outlook.com">
              axel.martin@outlook.com
            </a>
            <div className={styles.socialLinksContainer}>
              <a
                className={styles.itemContainer}
                href="https://www.linkedin.com/in/axel-martin7/"
              >
                <Image
                  className={styles.itemIcon}
                  src={linkedin}
                  width={50}
                  height={50}
                  alt={t('linkedinIconAlt')}
                />
                <p className={styles.itemName}>Linkedin</p>
              </a>

              <a
                className={styles.itemContainer}
                href="https://github.com/Axel-Martin7"
              >
                <Image
                  className={styles.itemIcon}
                  src={linkedin}
                  width={50}
                  height={50}
                  alt={t('githubIconAlt')}
                />
                <p className={styles.itemName}>GitHub</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
