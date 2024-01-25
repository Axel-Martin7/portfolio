import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftTextContainer}>
        <p className={styles.portfolioText}>Portfolio</p>
        <p className={styles.nameText}>Axel.Martin</p>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.navContainer}>
        <p className={styles.navLink}>About</p>
        <p className={styles.navLink}>Skills</p>s
        <p className={styles.navLink}>Project</p>
      </div>
    </header>
  );
};

export default Header;
