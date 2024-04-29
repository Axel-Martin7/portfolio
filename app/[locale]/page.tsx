import { useTranslations } from 'next-intl';
import styles from './page.module.scss';

import VisitCards from '../components/Sections/VisitCards/VisitCards';
import About from '../components/Sections/About/About';
import Contact from '../components/Sections/Contact/Contact';
import Skills from '../components/Sections/Skills/Skills';
import Projects from '../components/Sections/Projects/Projects';
import Thanks from '../components/Sections/Thanks/Thanks';
import Logo from '../components/Logo/Logo';

export default function Home() {
  const t = useTranslations('common');

  return (
    <main>
      <VisitCards />
      <About />
      <Contact />
      <Skills />
      <div className={styles.projectsHeaderContainer}>
        <div className={styles.projectsTitleContainer}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}> {t('projects')}</h2>
            <div className={styles.titleSeparator}></div>
          </div>
        </div>
      </div>
      <Projects />
      <Thanks />
      {/* <Logo /> */}
    </main>
  );
}
