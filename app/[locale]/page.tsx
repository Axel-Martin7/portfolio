import Image from 'next/image';
import styles from './page.module.scss';

import VisitCards from '../components/Sections/VisitCards/VisitCards';
import VisitCards2 from '../components/Sections/VisitCards/VisitCards2';

import About from '../components/Sections/About/About';
import About6 from '../components/Sections/About/About6';

import Contact from '../components/Sections/Contact/Contact';
import Contact2 from '../components/Sections/Contact/Contact2';

import Skills from '../components/Sections/Skills/Skills';
import Skills3 from '../components/Sections/Skills/Skills3';

import Logo from '../components/Logo/Logo';

import Projects2 from '../components/Sections/Projects/Projects2';
import Projects from '../components/Sections/Projects/Projects';

import Thanks from '../components/Sections/Thanks/Thanks';
import Switcher from '../components/Header/Switcher';

export default function Home() {
  return (
    <main>
      <VisitCards />
      {/* <VisitCards2 /> */}

      <Switcher />
      <About />
      {/* <About6 /> */}

      <Contact />
      {/* <Contact2 /> */}

      <Skills />
      {/* <Skills3 /> */}

      <Projects />
      {/* <Projects2 /> */}

      <Thanks />

      {/* <Logo /> */}
    </main>
  );
}
