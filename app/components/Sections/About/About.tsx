import Image from 'next/image';
import styles from './About.module.scss';
import linkedin from '../../../../public/icons/linkedin.svg';

export default function About() {
  return (
    <section className={styles.aboutSectionContainer}>
      <div className={styles.profilPictureContainer}>
        <div className={styles.photoContainer}>
          <Image
            className={styles.image}
            src="/images/imageprofil.jpg"
            alt="Photo de profil"
            fill
          />
        </div>
      </div>
      <div className={styles.presentationContainer}>
        <div className={styles.presentationTextContainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>About</h3>
            <div className={styles.titleSeparator}></div>
          </div>
          <p className={styles.presentationText}>
            Bienvenue sur mon portfolio ! Je suis Axel, un développeur web
            FullStack Javascript récemment diplômé de l&apos;école O&apos;Clock.
            Mon parcours académique m&apos;a permis d&apos;acquérir des
            compétences approfondies en développement front-end et back-end,
            tout en intégrant les normes de sécurité et d&apos;accessibilité.
            <br></br> Dans mon approche du développement web, chaque ligne de
            code est une opportunité d&apos;exprimer ma créativité. Je considère
            chaque projet comme une toile sur laquelle je peux peindre une
            expérience utilisateur à la fois captivante et esthétiquement
            plaisante. Mon soucis du détail est une marque de mon engagement,
            car je crois fermement que la différence se niche dans les petites
            choses.
            <br></br> Mon insatiable curiosité me pousse sans cesse à explorer
            de nouvelles idées et à rechercher des approches innovantes.
            J&apos;attache une grande importance à comprendre les besoins, à
            identifier les problèmes et à concevoir des solutions pertinentes.
            Ma soif de connaissances et ma détermination à concevoir des
            solutions efficaces et innovantes sont essentielles pour mon
            parcours de développeur.
          </p>
          <p className={styles.presentationText}>
            Aujourd’hui, mon objectif est de continuer à élargir et à renforcer
            mes compétences. Je recherche activement de nouveaux défis
            passionnants qui me permettront de progresser professionnellement.
            Mon enthousiasme pour la découverte de nouvelles technologies et
            concepts reste constant. <br></br> Mon objectif immédiat est de
            rejoindre une entreprise partageant ma passion pour l’excellence en
            développement web. <br></br>Je suis prêt à me former en fonction de
            ses besoins spécifiques pour apporter une contribution active au
            succès de ses projets, en créant des solutions web robustes,
            esthétiques et performantes. J’ai hâte de faire partie d’une équipe
            dynamique et de participer à des projets captivants. <br></br>
            Considérez-moi comme une opportunité d’investissement en évolution
            constante, destinée à devenir le professionnel idéal pour répondre à
            vos besoins spécifiques et à vos attentes. C’est la promesse d’un
            engagement mutuel en vue d’un avenir fructueux.
          </p>
        </div>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfosContainer}>
            <div className={styles.contactTextContainer}>
              <p className={styles.contactText}>
                Feel free to contact me directly at:
              </p>
              <p className={styles.contactMail}>axel.martin@outlook.com</p>
            </div>
            <div className={styles.socialLinksContainer}>
              <div className={styles.itemContainer}>
                <Image
                  className={styles.itemIcon}
                  src={linkedin}
                  width={60}
                  height={60}
                  alt="Linkedin icon"
                />
                <p className={styles.itemName}>Linkedin</p>
              </div>
              <div className={styles.itemContainer}>
                <Image
                  className={styles.itemIcon}
                  src={linkedin}
                  width={60}
                  height={60}
                  alt="Linkedin icon"
                />
                <p className={styles.itemName}> GitHub</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.aboutButton}>Learn More</button>
        </div>
      </div>
    </section>
  );
}
