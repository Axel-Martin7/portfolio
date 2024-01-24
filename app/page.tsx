import Image from 'next/image';
import styles from './page.module.scss';
import Logo from './components/Logo/Logo';
import About from './components/Sections/About/About';

export default function Home() {
  return (
    <main>
      <Logo />
      <About />
    </main>
  );
}
