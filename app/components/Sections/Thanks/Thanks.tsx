import styles from './Thanks.module.scss';

export default function Thanks() {
  return (
    <section className={styles.thanksSectionContainer}>
      <div className={styles.contentContainer}>
        <p className={styles.thanksMessage}>Merci de votre visite !</p>
        <p className={styles.signature}>Axel Martin</p>
      </div>
    </section>
  );
}
