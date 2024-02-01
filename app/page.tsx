import Image from 'next/image';
import styles from './page.module.scss';
import Logo from './components/Logo/Logo';
import About from './components/Sections/About/About';

import About2 from './components/Sections/About2/About2';
import Skills from './components/Sections/Skills/Skills';
import VisitCards from './components/Sections/VisitCards/VisitCards';

export default function Home() {
  return (
    <main>
      <VisitCards />

      {/* <About2 />
      <Skills />
      <About /> */}
      <Logo />
    </main>
  );
}
