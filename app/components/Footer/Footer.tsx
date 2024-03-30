import Image from 'next/image';
import linkedin from '../../../public/icons/linkedin.svg';
import styles from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinksContainer}>
        <a
          className={styles.itemContainer}
          href="mailto:axel.martin@outlook.com"
        >
          <Image
            className={styles.icon}
            src={linkedin}
            width={50}
            height={50}
            alt="Email icon"
          />
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
            alt="Github icon"
          />
        </a>
      </div>
    </footer>
  );
}
