import Image from 'next/image';
import styles from './page.module.scss';
import Logo from './components/Logo/Logo';
import About from './components/Sections/About/About';
import About3 from './components/Sections/About/About3';

import About2 from './components/Sections/About2/About2';
import Skills from './components/Sections/Skills/Skills';
import VisitCards from './components/Sections/VisitCards/VisitCards';
import Skills2 from './components/Sections/Skills/Skills2';
import Projects from './components/Sections/Projects/Projects';

export default function Home() {
  return (
    <main>
      <VisitCards />

      <About3 />
      <Skills2 />
      <Projects />
      <Skills />
      <About2 />
      <About />

      <Logo />
    </main>
  );
}
