import Image from 'next/image';
import styles from './page.module.scss';
import Logo from './components/Logo/Logo';
import About from './components/Sections/About/About';
import VisitCards from './components/Sections/VisitCards/VisitCards';

export default function Home() {
  return (
    <main>
      <VisitCards />
      <Logo />
      <About />
    </main>
  );
}
