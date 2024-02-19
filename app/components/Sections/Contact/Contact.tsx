import styles from './Contact.module.scss';
import linkedin from '../../../../public/icons/linkedin.svg';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className={styles.contactSectionContainer}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfosContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.titleSeparator}></div>
          </div>
          <div className={styles.contactTextsContainer}>
            <p className={styles.contactText}>
              Pour toute proposition professionnelle, opportunité de
              collaboration ou simplement pour partager et échanger,
              n&apos;hésitez pas à me contacter directement par e-mail à
              l&apos;adresse suivante
            </p>
            <p className={styles.contactMail}>axel.martin@outlook.com</p>
          </div>
          <div className={styles.socialLinksContainer}>
            <div className={styles.itemContainer}>
              <Image
                className={styles.itemIcon}
                src={linkedin}
                width={40}
                height={40}
                alt="Linkedin icon"
              />
              <p className={styles.itemName}>Linkedin</p>
            </div>
            <div className={styles.itemContainer}>
              <Image
                className={styles.itemIcon}
                src={linkedin}
                width={40}
                height={40}
                alt="Linkedin icon"
              />
              <p className={styles.itemName}>GitHub</p>
            </div>
            <div className={styles.itemContainer}>
              <Image
                className={styles.itemIcon}
                src={linkedin}
                width={40}
                height={40}
                alt="Linkedin icon"
              />
              <p className={styles.itemName}>cv</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
