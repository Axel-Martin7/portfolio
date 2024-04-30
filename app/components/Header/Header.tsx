'use client';

import { useState } from 'react';

// import Link from 'next/link';
import { Link } from '@/navigation';
import styles from './Header.module.scss';
import Switcher from './Switcher';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('common');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`${styles.headerContainer} ${
        isMenuOpen ? styles.headerOpen : ''
      }`}
    >
      <Link
        className={styles.signatureContainer}
        href={'/'}
        aria-label={t('home')}
      >
        <p className={styles.signature}>AM</p>
      </Link>

      <button
        className={styles.menuContainer}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? t('close-menu-aria') : t('open-menu-aria')}
        aria-expanded={isMenuOpen}
      >
        <div className={styles.burgerLinesContainer}>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line1Open : ''}`}
          ></div>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line2Open : ''}`}
          ></div>
          <div
            className={`${styles.line} ${isMenuOpen ? styles.line3Open : ''}`}
          ></div>
        </div>
      </button>

      <div className={styles.languagesContainer}>
        <Switcher />
      </div>

      <div className={`${styles.menuPanel} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.navContainer}>
          <ul>
            <li className={styles.navItem}>
              <Link href={'/'} onClick={closeMenu}>
                {t('home')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/about'} onClick={closeMenu}>
                {t('about')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/contact'} onClick={closeMenu}>
                Contact
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/skills'} onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/projects'} onClick={closeMenu}>
                {t('projects')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
