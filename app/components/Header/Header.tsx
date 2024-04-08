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
      <Link className={styles.signatureContainer} href={'/'}>
        <p className={styles.signature}>AM</p>
      </Link>

      <button className={styles.menuContainer} onClick={toggleMenu}>
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
        {/* <LangSwitcher /> */}
        {/* <Switcher /> */}
        {/* <Link href={'/fr'}>FR</Link>
        <Link href={'/en'}>En</Link> */}
        {/* <p className={styles.language}>EN</p> */}
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
              <Link href={'/skills'} onClick={closeMenu}>
                Skills
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/projects'} onClick={closeMenu}>
                {t('projects')}
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/contact'} onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
