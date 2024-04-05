import { useTranslations } from 'next-intl';
import Image from 'next/image';
import styles from './About.module.scss';
import Link from 'next/link';

export default function About() {
  const t = useTranslations('AboutComponent');

  return (
    <section className={styles.aboutSectionContainer}>
      <div className={styles.profilPictureContainer}>
        <div className={styles.photoContainer}>
          <Image
            className={styles.photo}
            src="/images/imageprofil2.jpg"
            alt={t('imgAlt')}
            fill
          />
        </div>
      </div>

      <div className={styles.presentationContainer}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}> {t('title')}</h2>
          <div className={styles.titleSeparator}></div>
        </div>

        <div className={styles.textsContainer}>
          <p>
            {t('descriptionPart1')} <br></br> {t('descriptionPart2')} <br></br>{' '}
            {t('descriptionPart3')}
          </p>
          <p>
            {t('descriptionPart4')} <br></br> {t('descriptionPart5')} <br></br>
            {t('descriptionPart6')} <br></br> {t('descriptionPart7')}
          </p>
        </div>

        <Link className={styles.buttonContainer} href="/about">
          <button className={styles.aboutBtn}>{t('button')}</button>
        </Link>
      </div>
    </section>
  );
}
