'use client';
import { useEffect, useState } from 'react';
import styles from './VisitCards.module.scss';

export default function VisitCards() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.visitCardsContainer}>
      <div className={styles.logoCardContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logoTextContainer}>
            <p className={styles.signature}>A . M</p>
            <p className={styles.name}>Axel Martin</p>
            <p className={styles.job}>Web developper</p>
          </div>
        </div>
      </div>

      <div className={styles.presentationCardContainer}>
        <div className={styles.titlesContainer}>
          <h1 className={styles.title}>Welcome to my world</h1>
          <div className={styles.subTitleContainer}>
            <div className={styles.separator}></div>
            <h2 className={styles.subTitle}>I build things for the web</h2>
            <div className={styles.separator}></div>
          </div>
        </div>
        <p className={styles.presentationText}>
          Hello, <br></br> my name is Axel. I&apos;m a french web developper
          based in Geneva. <br></br> Recently graduated in fullstack JavaScript
          web development degree, <br></br> I&apos;m looking now for career
          opportunities
        </p>
        <a className={styles.email} href="mailto:axel.martin@outlook.com">
          axel.martin@outlook.com
        </a>
      </div>

      <div
        className={`${styles.scrollIndicator} ${isScrolled ? styles.hide : ''}`}
      ></div>
    </section>
  );
}
