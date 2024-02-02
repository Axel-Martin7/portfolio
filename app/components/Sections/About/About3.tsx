import Image from 'next/image';
import styles from './About3.module.scss';

export default function About3() {
  return (
    <section className={styles.aboutSectionContainer}>
      <div className={styles.profilPictureContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/images/imageprofil.jpg"
            alt="Photo de profil"
            fill
          />
        </div>
      </div>
      <div className={styles.informationsContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.title}>About</h3>
          <div className={styles.titleSeparator}></div>
        </div>
        <div className={styles.presentationTextContainer}>
          <p className={styles.presentationText}>
            Bienvenue sur mon portfolio ! Je suis Axel, un développeur web
            FullStack Javascript récemment diplômé de l'école O'Clock. Mon
            parcours académique m'a permis d'acquérir des compétences
            approfondies en développement front-end et back-end, tout en
            intégrant les normes de sécurité et d'accessibilité. Dans mon
            approche du développement web, chaque ligne de code est une
            opportunité d'exprimer ma créativité. Je considère chaque projet
            comme une toile sur laquelle je peux peindre une expérience
            utilisateur à la fois captivante et esthétiquement plaisante. Mon
            soucis du détail est une marque de mon engagement, car je crois
            fermement que la différence se niche dans les petites choses. Mon
            insatiable curiosité me pousse sans cesse à explorer de nouvelles
            idées et à rechercher des approches innovantes. J'attache une grande
            importance à comprendre les besoins, à identifier les problèmes et à
            concevoir des solutions pertinentes. Ma soif de connaissances et ma
            détermination à concevoir des solutions efficaces et innovantes sont
            essentielles pour mon parcours de développeur.
          </p>
        </div>
        <div className={styles.objectivesTextContainer}>
          <p className={styles.objectifText}>
            Aujourd’hui, mon objectif est de continuer à élargir et à renforcer
            mes compétences. Je recherche activement de nouveaux défis
            passionnants qui me permettront de progresser professionnellement.
            Mon enthousiasme pour la découverte de nouvelles technologies et
            concepts reste constant. Mon objectif immédiat est de rejoindre une
            entreprise partageant ma passion pour l’excellence en développement
            web. Je suis prêt à me former en fonction de ses besoins spécifiques
            pour apporter une contribution active au succès de ses projets, en
            créant des solutions web robustes, esthétiques et performantes. J’ai
            hâte de faire partie d’une équipe dynamique et de participer à des
            projets captivants. Considérez-moi comme une opportunité
            d’investissement en évolution constante, destinée à devenir le
            professionnel idéal pour répondre à vos besoins spécifiques et à vos
            attentes. C’est la promesse d’un engagement mutuel en vue d’un
            avenir fructueux.
          </p>
        </div>
      </div>
      {/* <div className={styles.aboutTitleContainer}>
        <h3 className={styles.title}>About me</h3>
        <div className={styles.separator}></div>
      </div>
      <div className={styles.profilPictureContainer}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/images/imageprofil.jpg"
            alt="Photo de profil"
            fill
          />
        </div>
      </div>
      <div className={styles.descriptionTextContainer}>
        <p className={styles.presentationText}>
          Je suis Axel, 2 Passionné et fasciné par la frontière entre l’art et
          la technologie, j’ai suivit en 2023 une formation FullStack Javascript
          à l’école O’Clock qui m’a valu l’obtention d’un titre professionnel
          développeur web et web mobile niveau 5 ( équivalence bac+2) inscrit au
          RNCP. En dehors de ces passions, je m’intéresse également à
          l’Histoire, la science, la musique et le sport. Mon approche du
          développement web va au-dela du simple codage. Je suis fasciné par
          l’art de concevoir des expériences utilisateur engageantes et
          visuellement attrayantes. Animé par la créativité, j’apprécie chaque
          ligne de code comme une toile vierge sur laquelle je peux peindre une
          expérience utilisateur INOUBLIABLE. La Créativité est au coeur de mon
          travail et je met un point d’honneur à soigner les détails car je
          crois que la différence réside dans les petites choses. Mon insatiable
          curiosité me pousse continuellement à découvrir de nouvelles idées et
          à rechercher des approches novatrices. Comprendre les besoins,
          identifier les problèmes et chercher des solutions constituent de
          véritables sources d’inspiration. Ma soif d’acquisition de
          connaissances et ma détermination à concevoir des solutions innovantes
          sont des éléments fondamentaux de mon parcours en tant que
          développeur. Cette formation ma donnée les capacités de developper les
          parties front-end et back-end complète d’une application web en
          intégrant les recommandations de sécurité et d’accéssibilité, ansi
          qu’un savoir faire et un savoir être
        </p>
        <p className={styles.objectivesText}>
          Aujourd’hui, je suis avide d’apprentissage, je souhaite continuer à
          élargir et consolider mes compétences, je suis à la recherche de
          nouveaux défis stimulants qui me permettront d’évoluer en tant que
          professionnel. Je suis toujours enthousiaste à l’idée de découvrir de
          nouvelles technologies, de nouveaux concepts et de nouvelles
          opportunités professionnelles. Mon objectif est d’intégrer une
          entreprise qui partage ma passion pour l’excellence en matière de
          développement web et qui pourra me former selon leurs besoins
          spécifiques. Mon objectif est de contribuer activement au succès de
          votre projet en fournissant des solutions web robustes, esthétiques et
          performantes. Je suis enthousiaste à l’idée de rejoindre une équipe
          dynamique et de travailler sur des projets passionnants. Si vous êtes
          à la recherche d’un jeune développeur web motivé et déterminé à
          exceller, je serais ravi de discuter de la façon dont je peux
          contribuer à votre projet ou à votre entreprise. Je suis prêt à mettre
          en pratique mes connaissances et compétences pour contribuer au succès
          de votre équipe.
        </p>
      </div> */}
    </section>
  );
}
