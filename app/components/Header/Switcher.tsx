import { useTranslations } from 'next-intl';
import Link from 'next/link'; // Assure-toi d'utiliser le bon import pour Link
import styles from './Switcher.module.scss';

const Switcher = () => {
  const t = useTranslations('common');
  const switchToLocale = t('switchLanguage'); // Assumant que 'switchLanguage' retourne 'en' ou 'fr'

  return (
    <Link
      className={styles.switcherContainer}
      href={`/${switchToLocale}`}
      locale={switchToLocale}
    >
      {switchToLocale.toUpperCase()}
    </Link>
  );
};

export default Switcher;
