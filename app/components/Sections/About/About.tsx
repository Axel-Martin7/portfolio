import Image from 'next/image';
import styles from './About.module.scss';
import {
  roboto,
  roboto_Condensed,
  roboto_Mono,
  roboto_Flex,
  roboto_Slab,
  poppins,
} from '@/styles/fonts';

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
      <div className={styles.presentationCardContainer}>
        <div className={styles.presentationTextContainer}>
          <p className={styles.presentationText}>
            Ayant un esprit créatif, j'ai une certaine appétance pour le
            front-end, c'est pourquoi durant ma formation j'ai choisis de suivre
            une spécialisation React. Mais étant également de nature curieuse
            j'ai ensuite suivit une seconde spécialisation basé back-end ou j'ai
            pu consolider mes connaissance sur node, ainsi que les base de
            données et les API Rest. Je suis aujourd'hui capable de réaliser un
            projet complet front-end et back-end
          </p>
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
            <button className={styles.buttonLearnMore}>Learn More</button>
          </div>
        </div>
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
      </div>
    </section>

    // <section className={styles.sectionContainer}>
    //   <h2 className={styles.aboutSeparator}>About me</h2>
    //   <div className={styles.cardContainer}>
    //     <div className={styles.quoteContainer}>
    //       <p className={styles.helloText}>Hello,</p>
    //       <p className={styles.nameText}>I&apos;m Axel</p>
    //       <p className={styles.quoteText}>I build things for the Web !</p>
    //     </div>
    //     <div className={styles.photoContainer}>
    //       <Image
    //         className={styles.image}
    //         src="/images/imageprofil.jpg"
    //         // width={1000}
    //         // height={500}
    //         alt="Photo de profil"
    //         fill={true}
    //         // layout="responsive"
    //       />
    //     </div>
    //     <div className={styles.descriptionContainer}>
    //       box 3
    //       <p>
    //         {' '}
    //         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
    //         eligendi at maiores facilis necessitatibus magni earum velit totam
    //         fuga quae maxime, blanditiis inventore dolor ipsum rem, nam,
    //         temporibus quaerat dolore? Lorem ipsum, dolor sit amet consectetur
    //         adipisicing elit. Dolorum iure dignissimos quis magni beatae
    //         inventore explicabo nam assumenda iusto. Numquam beatae nobis, ipsam
    //         voluptas esse dicta recusandae unde suscipit labore?
    //       </p>
    //     </div>
    //   </div>
    //   <div className={styles.bottomSeparator}>Learn More</div>
    // </section>
  );
}
