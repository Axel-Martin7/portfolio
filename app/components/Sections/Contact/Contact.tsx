import styles from './Contact.module.scss';
import linkedin from '../../../../public/icons/linkedin.svg';
import Image from 'next/image';

export default function Contact() {
  return (
    <section className={styles.contactSectionContainer}>
      <div className={styles.contactContainer}>
        <div className={styles.contactContentContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.titleSeparator}></div>
          </div>

          <p className={styles.contactText}>
            Pour toute proposition professionnelle, opportunité de collaboration
            ou simplement pour partager et échanger, n&apos;hésitez pas à me
            contacter directement sur mes réseaux ou par e-mail à l&apos;adresse
            suivante :
          </p>

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
                  alt="Linkedin icon"
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
                  alt="Linkedin icon"
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
