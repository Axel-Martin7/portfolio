import Image from 'next/image';
import styles from './About2.module.scss';
import { poppins } from '@/styles/fonts';

export default function Home() {
  return (
    <section className={styles.aboutSectionContainer}>
      <div className={styles.photoContainer}>
        <div className={styles.photo}>
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
      <div className={styles.presentationContainer}>
        <div className={styles.textContainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.aboutTitle}>About</h3>
            <div className={styles.horizontalBar}></div>
          </div>
          <p className={styles.presentationText}>
            Je suis Axel, 2 Passionné et fasciné par la frontière entre l’art et
            la technologie, j’ai suivit en 2023 une formation FullStack
            Javascript à l’école O’Clock qui m’a valu l’obtention d’un titre
            professionnel développeur web et web mobile niveau 5 ( équivalence
            bac+2) inscrit au RNCP. En dehors de ces passions, je m’intéresse
            également à l’Histoire, la science, la musique et le sport. Mon
            approche du développement web va au-dela du simple codage. Je suis
            fasciné par l’art de concevoir des expériences utilisateur
            engageantes et visuellement attrayantes. Animé par la créativité,
            j’apprécie chaque ligne de code comme une toile vierge sur laquelle
            je peux peindre une expérience utilisateur INOUBLIABLE. La
            Créativité est au coeur de mon travail et je met un point d’honneur
            à soigner les détails car je crois que la différence réside dans les
            petites choses. Mon insatiable curiosité me pousse continuellement à
            découvrir de nouvelles idées et à rechercher des approches
            novatrices. Comprendre les besoins, identifier les problèmes et
            chercher des solutions constituent de véritables sources
            d’inspiration. Ma soif d’acquisition de connaissances et ma
            détermination à concevoir des solutions innovantes sont des éléments
            fondamentaux de mon parcours en tant que développeur. Cette
            formation ma donnée les capacités de developper les parties
            front-end et back-end complète d’une application web en intégrant
            les recommandations de sécurité et d’accéssibilité, ansi qu’un
            savoir faire et un savoir être
          </p>
          <p className={styles.goalText}>
            Aujourd’hui, je suis avide d’apprentissage, je souhaite continuer à
            élargir et consolider mes compétences, je suis à la recherche de
            nouveaux défis stimulants qui me permettront d’évoluer en tant que
            professionnel. Je suis toujours enthousiaste à l’idée de découvrir
            de nouvelles technologies, de nouveaux concepts et de nouvelles
            opportunités professionnelles. Mon objectif est d’intégrer une
            entreprise qui partage ma passion pour l’excellence en matière de
            développement web et qui pourra me former selon leurs besoins
            spécifiques. Mon objectif est de contribuer activement au succès de
            votre projet en fournissant des solutions web robustes, esthétiques
            et performantes. Je suis enthousiaste à l’idée de rejoindre une
            équipe dynamique et de travailler sur des projets passionnants. Si
            vous êtes à la recherche d’un jeune développeur web motivé et
            déterminé à exceller, je serais ravi de discuter de la façon dont je
            peux contribuer à votre projet ou à votre entreprise. Je suis prêt à
            mettre en pratique mes connaissances et compétences pour contribuer
            au succès de votre équipe.{' '}
          </p>
        </div>
        <div className={styles.contactContainer}>
          <p className={styles.contactText}>Contact me at:</p>
          <p className={styles.emailText}>axel.martin@outlook.com</p>
        </div>
        <button className={styles.aboutButton}>Learn More</button>
      </div>
    </section>
  );
}
