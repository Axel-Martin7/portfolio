import styles from './Logo.module.scss';

export default function Home() {
  return (
    <div className={styles.logoCardContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.logoTextContainer}>
          <p className={styles.signature}>A . M</p>
          <p className={styles.name}>Axel Martin</p>
          <p className={styles.job}>Web developper</p>
        </div>
      </div>
    </div>
  );
}
