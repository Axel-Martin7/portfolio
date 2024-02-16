import Image from 'next/image';
import styles from './page.module.scss';

import VisitCards from './components/Sections/VisitCards/VisitCards';
import VisitCards2 from './components/Sections/VisitCards/VisitCards2';

import About from './components/Sections/About/About';
import About2 from './components/Sections/About/About2';

import Skills from './components/Sections/Skills/Skills';
import Skills2 from './components/Sections/Skills/Skills2';

import Logo from './components/Logo/Logo';

import Projects from './components/Sections/Projects/Projects';

export default function Home() {
  return (
    <main>
      {/* <VisitCards2 /> */}
      {/* <VisitCards /> */}
      {/* <About2 /> */}
      {/* <About />  */}
      <Skills2 />
      {/* <Skills /> */}
      {/* <Projects /> */}

      {/* <Logo /> */}
    </main>
  );
}
