import Image from 'next/image';
import styles from './page.module.scss';

import VisitCards from './components/Sections/VisitCards/VisitCards';
import VisitCards2 from './components/Sections/VisitCards/VisitCards2';

import About from './components/Sections/About/About';
import About3 from './components/Sections/About/About3';

import Skills from './components/Sections/Skills/Skills';
import Skills2 from './components/Sections/Skills/Skills2';

import Logo from './components/Logo/Logo';

import Projects from './components/Sections/Projects/Projects';
import Projects2 from './components/Sections/Projects/Projects2';
import About4 from './components/Sections/About/About4';
import Contact from './components/Sections/Contact/Contact';

export default function Home() {
  return (
    <main>
      <VisitCards2 />
      {/* <VisitCards /> */}
      <About4 />
      {/* <About3 /> */}
      {/* <About /> */}
      <Contact />
      <Skills2 />
      {/* <Skills /> */}
      <Projects2 />
      {/* <Projects /> */}

      <Logo />
    </main>
  );
}
