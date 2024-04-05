import styles from './page.module.scss';
// import linkedin from '../../public/icons/linkedin.svg';
import linkedin from '@/public/icons/linkedin.svg';
import Image from 'next/image';

export default function Contact() {
  return (
    <main>
      <div className={styles.visitCardsContainer}>
        <div className={styles.logoCardContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.logoTextContainer}>
              <p className={styles.signature}>A . M</p>
              <p className={styles.name}>Axel Martin</p>
              <p className={styles.job}>Web developper</p>
            </div>
          </div>
        </div>

        <div className={styles.contactCardContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Contact</h2>
          </div>
          <div className={styles.contactInfosContainer}>
            <a
              className={styles.itemContainer}
              href="mailto:axel.martin@outlook.com"
            >
              <Image
                className={styles.icon}
                src={linkedin}
                width={50}
                height={50}
                alt="Linkedin icon"
              />
              <p>axel.martin@outlook.com</p>
            </a>
            <a
              className={styles.itemContainer}
              href="https://www.linkedin.com/in/axel-martin7/"
            >
              <Image
                className={styles.icon}
                src={linkedin}
                width={50}
                height={50}
                alt="Linkedin icon"
              />
              <p>axel-martin7</p>
            </a>
            <a
              className={styles.itemContainer}
              href="https://github.com/Axel-Martin7"
            >
              <Image
                className={styles.icon}
                src={linkedin}
                width={50}
                height={50}
                alt="Linkedin icon"
              />
              <p>Axel-Martin7</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
