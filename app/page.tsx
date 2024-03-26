import Image from 'next/image';
import styles from './page.module.scss';

import VisitCards from './components/Sections/VisitCards/VisitCards';
import VisitCards2 from './components/Sections/VisitCards/VisitCards2';

import About from './components/Sections/About/About';
import About5 from './components/Sections/About/About5';

import Skills from './components/Sections/Skills/Skills';
import Skills2 from './components/Sections/Skills/Skills2';

import Logo from './components/Logo/Logo';

import Projects from './components/Sections/Projects/Projects';
import Projects2 from './components/Sections/Projects/Projects2';

import Contact from './components/Sections/Contact/Contact';
import About6 from './components/Sections/About/About6';
import Skills3 from './components/Sections/Skills/Skills3';

export default function Home() {
  return (
    <main>
      <VisitCards />
      {/* <VisitCards2 /> */}

      {/* <About5 /> */}
      <About6 />
      {/* <About /> */}
      <Contact />
      {/* <Skills2 /> */}
      <Skills3 />

      {/* <Skills /> */}
      <Projects2 />
      {/* <Projects /> */}

      <Logo />
    </main>
  );
}
