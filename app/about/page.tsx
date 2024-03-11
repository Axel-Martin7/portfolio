import Image from 'next/image';
import styles from './page.module.scss';
import linkedin from '../../public/icons/linkedin.svg';

export default function About() {
  return (
    <main>
      <div className={styles.aboutContainer}>
        <div className={styles.profilPictureContainer}>
          <div className={styles.photoContainer}>
            <Image
              className={styles.photo}
              src="/images/imageprofil.jpg"
              alt="Photo de profil"
              fill
            />
          </div>
        </div>

        <div className={styles.informationsSectionsContainer}>
          <div className={styles.presentationContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>Who am I </h2>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.presentationTextsContainer}>
              <p>
                Bonjour et bienvenue sur mon portfolio ! <br></br>Je suis Axel
                Martin, un passionné de 33 ans établi dans la région de Genève.
                Depuis mon plus jeune âge, je suis captivé par la frontière
                entre l’art et la technologie, une fascination qui a guidé mes
                choix professionnels.
              </p>
              <p>
                Après avoir exploré divers domaines, j’ai décidé de me lancer en
                2023 dans une reconversion professionnelle intensive en me
                plongeant dans le monde du développement web. <br></br> C’est
                ainsi que j’ai intégré l’école O’Clock, où j’ai suivi une
                formation complète fullstack JavaScript. À l’issue de cette
                formation, j’ai obtenu avec succès le titre professionnel de
                développeur web et web mobile certifié au RNCP de niveau 5,
                équivalent à un bac +2. <br></br> Cette certification atteste de
                mes compétences dans la conception et la réalisation de projets
                web, ainsi que dans le développement d’applications mobiles.
                <br></br> Au fil de ma formation, j’ai élargi mes compétences en
                suivant une spécialisation front-end basée sur React. Puis,
                après l’obtention de mon diplôme, j’ai décidé de continuer mon
                apprentissage et de suivre une seconde spécialisation back-end
                basée sur les Data, base de données, langage SQL, sécurité…
                <br></br>Ces expériences m’ont permis d’explorer les multiples
                facettes de la programmation web, alliant à la fois créativité
                et rigueur technique.
              </p>
              <p>
                En-dehors de ma passion pour le développement web, vous me
                trouverez probablement immergé dans des projets créatifs,
                sportifs, explorant de nouvelles technologies ou simplement
                profitant du plein air. <br></br> Je suis musicien, bassiste
                passionné, et je joue au football américain. Je suis également
                un fervent amateur d’histoire, de philosophie, de cinéma ainsi
                que de voyages et découvertes. <br></br>Ces diverses passions
                m’ont permis de développer des compétences telles que la
                créativité, la collaboration efficace en équipe et la gestion du
                temps. <br></br>Ma pratique du football américain en compétition
                a renforcé ma capacité à travailler sous pression, m’a enseigné
                les valeurs du travail d’équipe ainsi que la discipline, tandis
                que mon engagement dans la musique et les arts m’a appris
                l’importance du souci du détail et de l’esthétique. <br></br> Je
                crois fermement que ces compétences sont aussi pertinentes dans
                le monde du développement web que dans mes autres activités, et
                qu’elles enrichissent ma contribution professionnelle de manière
                significative.
              </p>
              <p>
                Si vous souhaitez en apprendre davantage sur mon parcours et
                avoir plus de détails sur ma formation, je vous invite à visiter
                la page Skills ou à cliquer sur le lien suivant:
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.skillsBtn}>My formation and Skills</div>
            </div>
          </div>

          <div className={styles.pastContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>Before my formation </h2>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.pastTextsContainer}>
              <p>
                Avant d’entreprendre ma reconversion professionnelle dans le
                domaine du développement web, j’ai exploré divers horizons
                académiques et professionnels. <br></br> Au lycée, j’ai suivi
                des études de commerce, obtenant un brevet d’études
                professionnelle vente-action marchande. <br></br> Par la suite,
                ma passion m’a guidé vers le son, m’amenant à intégrer une école
                d’ingénieur du son à Genève, la SAE Institute.
              </p>
              <p>
                En parallèle de mes études et après leur achèvement, j’ai
                exploré différents métiers pour élargir mes compétences et
                découvrir de nouveaux domaines. <br></br>Par exemple, j’ai
                évolué en tant que graphiste chez EG Mask à Genève, concevant
                des masques pour l’industrie automobile avec Adobe Illustrator.
                <br></br>
                J’ai également eu l’opportunité de travailler chez Sahy, une
                entreprise londonienne spécialisée dans la promotion d’athlètes
                et de marques sportives sur les réseaux sociaux. Mon rôle
                consistait à créer du contenu dynamique, à concevoir des
                éléments graphiques percutants et à stimuler l’engagement de la
                communauté autour de ces sportifs. <br></br>Par la suite, j’ai
                travaillé dans divers studios d’enregistrement, contribuant à la
                prise de son, le mixage et la post-production pour des projets
                musicale et cinématographiques. <br></br>En parallèle, j’ai
                occupé différents emplois, notamment dans l’industrie, ou j’ai
                développé des valeurs fondamentales telles que le travail
                d’équipe, la résilience et le sens de l’organisation.
              </p>
              <p>
                Ces expériences variées, bien que distinctes de mon chemin
                actuel, ont enrichi ma perspective professionnelle et ont
                façonné ma capacité à aborder les défis avec créativité, rigueur
                et détermination.
              </p>
            </div>
          </div>

          <div className={styles.goalsContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>What i want to do next </h2>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.goalsTextsContainer}>
              <p>
                Dans ma quête incessante de connaissances, je suis constamment à
                la recherche de nouvelles opportunités pour enrichir mes
                compétences et explorer des horizons technologiques toujours
                plus vastes. <br></br> Ma formation m’a armé de bases solides
                nécessaires pour affronter les défis du développement web, mais
                je ne souhaite pas m’arrêter là. <br></br>Je suis avide de
                découvrir de nouveaux concepts, d’explorer de nouvelles
                technologies et de maîtriser des compétences innovantes qui
                propulseront ma jeune carrière vers de nouveaux sommets.
              </p>
              <p>
                Mon objectif est d’intégrer une entreprise dynamique qui partage
                ma passion pour l’excellence en matière de développement web,
                qui saura me guider et me perfectionner selon sa vision et ses
                valeurs dans le but de devenir un élément clé contribuant
                activement à son succès. <br></br>Je suis prêt à investir
                pleinement dans ma croissance professionnelle pour devenir un
                atout précieux au sein de votre équipe en mettant en pratique
                mon enthousiasme, ma créativité et ma détermination. <br></br>
                Je suis convaincu que dans un environnement ou règne la
                collaboration et où l’innovation est encouragée, je pourrai
                pleinement exprimer mon potentiel.
              </p>
              <p>
                Considérez-moi comme une opportunité d’investissement en
                évolution constante, destinée à devenir le professionnel idéal
                pour répondre à vos besoins spécifiques et à vos attentes. C’est
                la promesse d’un engagement mutuel en vue d’un avenir fructueux.
              </p>
              <p>
                Si vous êtes à la recherche d&apos;un développeur web motivé et
                déterminé à exceller, je serai ravi de discuter de la façon dont
                je peux contribuer à votre entreprise et à vos projets.
              </p>
              <p>
                Si vous souhaitez en savoir plus sur mon parcours, ma vision,
                mon potentiel, ou pour toute proposition professionnelle,
                opportunité de collaboration ou simplement pour partager et
                échanger, n&apos;hésitez pas à me contacter sur mes réseaux ou
                directement par e-mail à l&apos;adresse suivante :
              </p>
            </div>
            <div className={styles.contactContainer}>
              <p className={styles.contactMail}>axel.martin@outlook.com</p>
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
                  <p className={styles.itemName}>Linkedin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
