import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/navigation';
import styles from './Footer.module.scss';

import mail from '@/public/icons/mail.svg';
import linkedin from '@/public/icons/linkedin.svg';
import github from '@/public/icons/github.svg';

export default function Footer() {
  const t = useTranslations('common');

  return (
    <footer className={styles.footer}>
      <nav className={styles.navContainer}>
        <Link className={styles.navItem} href={'/'}>
          {t('home')}
        </Link>
        <Link className={styles.navItem} href={'/about'}>
          {t('about')}
        </Link>
        <Link className={styles.navItem} href={'/contact'}>
          Contact
        </Link>
        <Link className={styles.navItem} href={'/skills'}>
          Skills
        </Link>
        <Link className={styles.navItem} href={'/projects'}>
          {t('projects')}
        </Link>
      </nav>

      <div className={styles.socialLinksContainer}>
        <a
          className={styles.itemContainer}
          href="mailto:axel.martin@outlook.com"
          aria-label={t('mail-aria')}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            className={styles.icon}
            src={mail}
            width={40}
            height={40}
            alt="Email icon"
          />
        </a>
        <a
          className={styles.itemContainer}
          href="https://www.linkedin.com/in/axel-martin7/"
          aria-label={t('linkedin-aria')}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            className={styles.icon}
            src={linkedin}
            width={40}
            height={40}
            alt="Linkedin icon"
          />
        </a>
        <a
          className={styles.itemContainer}
          href="https://github.com/Axel-Martin7"
          aria-label={t('github-aria')}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            className={styles.icon}
            src={github}
            width={40}
            height={40}
            alt="Github icon"
          />
        </a>
      </div>

      <div className={styles.textsContainer}>
        <p>Portfolio v.1 - 2024</p>
      </div>
    </footer>
  );
}
