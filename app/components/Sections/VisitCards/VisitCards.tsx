import styles from './VisitCards.module.scss';

const VisitCards = () => {
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
        <div className={styles.textsContainer}>
          <p className={styles.description}>Hello,</p>
          <p className={styles.description}>
            my name is Axel. Im a french web developper based in Geneva.
          </p>
          <p className={styles.description}>
            Recently graduated in fullstack JavaScript web development degree,
          </p>
          <p className={styles.description}>
            Im looking now for career opportunities
          </p>
        </div>
        <p className={styles.contact}>axel.martin@outlook.com</p>
      </div>
    </section>
  );
};

export default VisitCards;
