import Image from 'next/image';
import styles from './About.module.scss';
import { poppins } from '@/styles/fonts';

export default function Home() {
  return (
    <section className={styles.aboutSectionContainer}>
      <div className={styles.headerContainer}>
        <h1 className={`${styles.headerTitle} ${poppins.className}`}>
          Welcome to my World
        </h1>
        <div className={`${styles.headerQuote} `}>
          i build things for the web
        </div>
        <p className={`${styles.headerPresentation} `}>
          Hello, my name is Axel Im a french web developper based in Geneva.
          <br></br>
          Recently graduated in fullstack JavaScript web development at Oclock
          school, <br></br>im looking for opportunities
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.photoContainer}>
          <Image
            className={styles.image}
            src="/images/imageprofil.jpg"
            // width={1000}
            // height={500}
            alt="Photo de profil"
            fill={true}
            // layout="responsive"
          />
        </div>
        <div className={styles.presentationContainer}>
          <p className={styles.presentationText}>
            Ayant un esprit créatif, j'ai une certaine appétance pour le
            front-end, c'est pourquoi durant ma formation j'ai choisis de suivre
            une spécialisation React. Mais étant également de nature curieuse
            j'ai ensuite suivit une seconde spécialisation basé back-end ou j'ai
            pu consolider mes connaissance sur node, ainsi que les base de
            données et les API Rest. Je suis aujourd'hui capable de réaliser un
            projet complet front-end et back-end
          </p>
          <button className={styles.presentionButton}>Learn More</button>
        </div>
        <div className={styles.goalContainer}>
          <p className={styles.goalText}>
            Aujourd'hui je suis à la recherche de nouvelles opportunitées et de
            nouveaux défis, j'ai obtenue de solides bases dans l'univers du
            developpement web ou j'ai appris à apprendre et je souhaite
            continuer à consolider mes bases. Je suis a la recherche de mon
            premier emploi, de stage ou de tout autre opporunitées qui pourront
            me faire évoluer et consolider mes connaissances. Pour une
            entreprise voyez moi comme un diamant brut que vous pourriez
            faconner à votre guise afin d'aquerir par la suite l'esprit idéal et
            l'image de marque de votre entreprise.
          </p>
          <div className={styles.contactContainer}>
            <p className={styles.contactText}>Feel free to contact me at:</p>
            <p className={styles.contactMail}>axel.martin@outlook.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
