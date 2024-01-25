import styles from './VisitCards.module.scss';

const VisitCards = () => {
  return (
    <section className={styles.visitCardsContainer}>
      <div className={styles.textCardContainer}>
        <p className={styles.title}>Welcome to my world</p>
        <div className={styles.quoteContainer}>
          <div className={styles.Separator}></div>
          <p className={styles.quote}>I build things for the web</p>
          <div className={styles.Separator}></div>
        </div>
        <p className={styles.description}>
          Hello, my name is Axel. Im a french web developper based in Geneva.
          Recently graduated in fullstack JavaScript web development at OClock
          school, Im looking for opportunities
        </p>
      </div>
      <div className={styles.logoCardContainer}>
        <div className={styles.logo}>
          <div className={styles.circle}>
            <div className={styles.textContainer}>
              <h1 className={styles.signature}>A . M</h1>
              <p className={styles.name}>Axel Martin</p>
              <p className={styles.job}>Web developper</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitCards;
