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
            <div className={styles.emailContainer}>
              <Image
                src={linkedin}
                width={50}
                height={50}
                alt="Linkedin icon"
              />
              <p>axel.martin@outlook.com</p>
            </div>
            <div className={styles.linkedinContainer}>
              <Image
                src={linkedin}
                width={50}
                height={50}
                alt="Linkedin icon"
              />
              <p>axel.martin.com</p>
            </div>
            <div className={styles.githubContainer}>
              <Image
                src={linkedin}
                width={50}
                height={50}
                alt="Linkedin icon"
              />
              <p>Axel-Martin7</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
