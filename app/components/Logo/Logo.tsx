import styles from './Logo.module.scss';

export default function Home() {
  return (
    <div className={styles.logo}>
      <div className={styles.circle}>
        <div className={styles.textContainer}>
          <h1 className={styles.signature}>A . M</h1>
          <p className={styles.name}>Axel Martin</p>
          <p className={styles.job}>Web developper</p>
        </div>
      </div>
    </div>
  );
}
