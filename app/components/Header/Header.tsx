'use client';

import { useState } from 'react';

import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

      <button className={styles.languagesContainer}>
        <p className={styles.language}>EN</p>
      </button>

      <div className={`${styles.menuPanel} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.navContainer}>
          <ul>
            <li className={styles.navItem}>
              <Link href={'/'}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/about'}>About</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/skills'}>Skills</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/projects'}>Projects</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
