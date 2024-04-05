import { useTranslations } from 'next-intl';
import styles from './Thanks.module.scss';

export default function Thanks() {
  const t = useTranslations('component-Thanks');
  return (
    <section className={styles.thanksSectionContainer}>
      <div className={styles.contentContainer}>
        <p className={styles.thanksMessage}>{t('message')}</p>
        <p className={styles.signature}>Axel Martin</p>
      </div>
    </section>
  );
}
