import styles from './page.module.scss';
import linkedin from '../../public/icons/linkedin.svg';
import Image from 'next/image';

export default function Skills() {
  return (
    <main>
      <div className={styles.skillsContainer}>
        <section className={styles.skillsCardContainer}>
          <div className={styles.skillsCard}>
            <div className={styles.skillsContentContainer}>
              <div className={styles.titleContainer}>
                <h2 className={styles.title}>My Skills</h2>
              </div>
              <div className={styles.skillsGridContainer}>
                {/* HTML --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>Html</p>
                </div>
                {/* CSS --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>Css</p>
                </div>
                {/* JavaScript --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>JavaScript</p>
                </div>
                {/* React --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>React</p>
                </div>
                {/* NextJs --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>NextJs</p>
                </div>
                {/* NodeJs --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>NodeJs</p>
                </div>

                {/* TypeScript --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>Typescript</p>
                </div>
                {/* SQL --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>SQL</p>
                </div>
                {/* PostgreSQL --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>PostgreSQL</p>
                </div>
                {/* GIT --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>GIT</p>
                </div>
                {/* Agile --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>Agile</p>
                </div>
                {/* Figma --> */}
                <div className={styles.itemContainer}>
                  <Image
                    className={styles.itemIcon}
                    src={linkedin}
                    width={40}
                    height={40}
                    alt="Linkedin icon"
                  />
                  <p className={styles.itemName}>Figma</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.formationContainer}>
          <div className={styles.formationPresentationContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.title}>My formation</h2>
            </div>
            <div className={styles.formationPresentationContentContainer}>
              <p>
                J’ai choisi de faire ma reconversion professionnelle à l’école
                O’Clock en suivant la formation Développeur Web Fullstack
                JavaScript.
              </p>
              <p>
                Cette formation intensive, d’une durée de 6 mois, proposée sur
                le format téléprésentiel prépare au Titre Professionnel
                Développeur Web et Web Mobile. <br></br>Il s’agit d’un diplôme
                de niveau 5 (nomenclature Europe) correspondant au niveau III et
                inscrit au Répertoire National de la Certification
                Professionnelle (RNCP). <br></br>Le titre Professionnel est une
                certification professionnelle délivrée au nom de l’Etat par le
                ministère chargé de l’emploi.
              </p>
              <p>
                L’objectif de cette formation est de fournir des compétences clé
                aux apprenants, leur permettant d’être directement employables à
                la fin du cursus. Comme par exemple :
              </p>
              <ul className={styles.list}>
                <li>Intégrer des pages web en HTML et CSS</li>
                <li>Développer des fonctionnalités front-end en JavaScript</li>
                <li>Concevoir des interfaces utilisateur</li>
                <li>Concevoir, implémenter et utiliser des bases de données</li>
                <li>
                  Développer une application serveur avec Node.js et Express
                </li>
                <li>
                  Travailler en groupe sur un projet dans des conditions
                  professionnelles.
                </li>
              </ul>
              <p>
                La formation a lieu tous les jours ouvrés de 9 h à 17 h. Après
                les cours, nous devions réaliser au minimum deux heures de
                travaux dirigés sous forme de challenge, mini-projet,
                d’exercices, de tutoriels, de sessions de corrections de bug, de
                veille professionnel, de lecture de documentation techniques etc
                … <br></br>Ces travaux dirigés permettent d’approfondir les
                sujets vus en cours durant la journée, de découvrir de nouvelles
                notions (pédagogie inversée) et d’apprendre à collaborer sur des
                projets en équipe. <br></br> L’évaluation des compétences est
                assurée durant la totalité de la formation grâce à un contrôle
                continu des travaux dirigés, d’évaluations en cours de
                formation, d’entretiens individuels et de conseils de classe
                interne entre chaque saison. Puis lors du contrôle final qui est
                la session de validation du Titre Professionnel.
              </p>
              <p>
                La formation est structurée en 4 phases distinctes : d’abord, le
                socle, suivit par un mois de spécialisation. Ensuite, vient le
                projet d’apothéose et enfin, le dernier mois est consacré à la
                préparation de la soutenance finale
              </p>
            </div>
          </div>

          <div className={styles.socleContainer}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>Le Socle</h3>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.socleContentContainer}>
              <p>
                Le Socle est le nom donné à la première phase de la formation.
                Nous sommes formés aux langages et aux technologies qui
                constitueront une base de compétences. On apprend à utiliser les
                langages HTML, CSS, JavaScript, SQL et à utiliser Node.js à
                travers de multiples activités pédagogiques. Nous sommes
                également évalués tout au long du parcours, sur la base des
                compétences du référentiel du Titre Professionnel.
              </p>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>
                  Module: Interface utilisateur :
                </p>
                <ul className={styles.list}>
                  <li>Prise en mains des outils du développeur</li>
                  <li>HTML et CSS</li>
                  <li>Environnement Linux</li>
                  <li>Versionnage de fichiers avec Git</li>
                  <li>Responsive design</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module: Interactions :</p>
                <ul className={styles.list}>
                  <li>Introduction au JavaScript</li>
                  <li>Syntaxe de base</li>
                  <li>Conditions, boucles, fonctions</li>
                  <li>JavaScript dans le navigateur</li>
                  <li>DOM et événements</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module: Serveur :</p>
                <ul className={styles.list}>
                  <li>Node.js</li>
                  <li>Client / Serveur : HTTP</li>
                  <li>Node.js avec Express</li>
                  <li>Portée des variables</li>
                  <li>GET et POST</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>
                  Module: Gestion de données :
                </p>
                <ul className={styles.list}>
                  <li>Gestion de projet (méthodes Agile)</li>
                  <li>Planification / Organisation</li>
                  <li>Cookies et Sessions</li>
                  <li>Modèles de données</li>
                  <li>
                    SGBDR (système de gestion de bases de données Relationnels)
                  </li>
                  <li>Syntaxe SQL</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>
                  Module: Architecture et projet :
                </p>
                <ul className={styles.list}>
                  <li>Programmation Orientée Objet</li>
                  <li>Architecture MVC</li>
                  <li>ORM</li>
                  <li>Authentification</li>
                  <li>Rôles et droits d’accès</li>
                  <li>Promises, async/await</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module: API :</p>
                <ul className={styles.list}>
                  <li>Workflow front+back</li>
                  <li>AJAX + fetch</li>
                  <li>Conception d’API Rest</li>
                  <li>Git avancé</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module: SPA :</p>
                <ul className={styles.list}>
                  <li>Workflow front+back</li>
                  <li>AJAX + fetch</li>
                  <li>Templates HTML</li>
                  <li>Outillage (bundler, watcher)</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module: Déploiement</p>
                <ul className={styles.list}>
                  <li>Administration système</li>
                  <li>Déploiement / mise en production</li>
                  <li>Découverte et utilisation d’un CMS</li>
                  <li>Introduction au NoSQL</li>
                  <li>Ouverture sur d’autres langages </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.specialisationContainer}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>Spécialisation</h3>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.specialisationContentContainer}>
              <p>
                Le socle de connaissances nous a fourni des fondations solides.
                <br></br>
                Après cela, nous avons eu la possibilité de nous concentrer sur
                une technologie durant un mois entier, afin de maîtriser
                l&apos;une des technologies les plus utilisées par les
                développeurs professionnels dans l&apos;écosystème JavaScript.
                <br></br>
                Nous avions le choix entre React et Data & API.<br></br>
                J&apos;ai opté pour la spécialisation React.
              </p>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>
                  Module: Développement front :
                </p>
                <ul className={styles.list}>
                  <li>
                    Outils de développement : Npm, Yarn, WebPack, Babel et
                    ESlint
                  </li>
                  <li>Programmation déclarative et fonctionnelle</li>
                  <li>Outils de test: Jest</li>
                  <li>SASS</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>
                  Module: JavaScript avancé :
                </p>
                <ul className={styles.list}>
                  <li>Syntaxe ES2015</li>
                  <li>Rappels POO</li>
                  <li>Bundles et conventions</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module: React :</p>
                <ul className={styles.list}>
                  <li>Installation</li>
                  <li>Composants, props, state et JSX</li>
                  <li>Cycles de vie</li>
                  <li>Hooks</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module: React avancé :</p>
                <ul className={styles.list}>
                  <li>Redux et React-Redux</li>
                  <li>Router</li>
                  <li>TypeScript</li>
                  <li>NextJs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.apotheoseContainer}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>Apothéose</h3>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.apotheoseContentContainer}>
              <p>
                Après 1 mois de spécialisation, nous entamons la phase du projet
                final qu&apos; O’Clock nomme l’Apothéose. <br></br> Nous sommes
                répartis en petits groupes de travail et avons 1 mois pour
                concevoir et réaliser un projet en mettant en pratique nos
                compétences récemment acquises. <br></br>Nous sommes en
                autonomie pendant cette période, qui est une partie essentielle
                de la préparation pour l’obtention du Titre Professionnel.
                <br></br> Cette étape reproduit les conditions de travail en
                entreprise et toutes les obligations que cela suppose. Taches
                individuelles, travail en groupe, dead line …
              </p>
              <p>
                Pour mon projet, notre équipe était composée de 5 développeurs :
                3 back-end et 2 front-end dont je faisais partie. <br></br> Nous
                nous sommes inspiré du cade de développement Scrum, basé sur les
                principes agiles pour mener à bien notre projet.
              </p>
              <p>
                Le projet d’Apothéose devait être structuré sous forme de
                sprints, avec l’obligations de respecter les délais. <br></br>
                Chaque sprint durait une semaine :
              </p>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>
                  Sprint 0 : Mise en place du projet :
                </p>
                <ul className={styles.list}>
                  <li>Réalisation du cahier des charges</li>
                  <li>
                    Identification des fonctionnalités à intégrer pour obtenir
                    un MVP fiable, ainsi que ses évolutions potentielles
                  </li>
                  <li>
                    Liste des technologies à utiliser pour les repos front-end
                    et back-end
                  </li>
                  <li>Création des User Stories</li>
                  <li>Établissement de l’arborescence du projet</li>
                  <li>Création du MCD et d’un dictionnaire des données</li>
                  <li>
                    Identification des routes à mettre en place coté front-end
                    et coté back-end
                  </li>
                  <li>
                    Création des Wireframes pour toutes les pages du projet
                  </li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>
                  Sprint 1 : Début du développement:
                </p>
                <ul className={styles.list}>
                  <li>Mise en place des repos</li>
                  <li>Répartitions en deux équipes</li>
                  <li>Début de la mise en place du projet</li>
                  <li>
                    Implémentation des fonctionnalités définies pour le MVP
                  </li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Sprint 2 :</p>
                <ul className={styles.list}>
                  <li>Amélioration des fonctionnalités existantes</li>
                  <li>Ajout de nouvelles fonctionnalités</li>
                  <li>Correction des bugs</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Sprint 3 : Finalisation :</p>
                <ul className={styles.list}>
                  <li>Pas d’ajout de nouvelles fonctionnalités</li>
                  <li>Finalisation des fonctionnalités existantes</li>
                  <li>Vérification du bon fonctionnement de tout le système</li>
                  <li>Travail sur le style et le design</li>
                  <li>Préparation à la présentation finale.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.titreProContainer}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>Titre Professionnel</h3>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.titreProContentContainer}>
              <p>
                Après la validation de mon projet par l’équipe pédagogique
                d’O’Clock, j’ai pu me présenter au Titre Professionnel dans le
                cadre d’une session de validation à Paris. <br></br>J’ai dû
                rédiger un dossier de projet en lien avec le projet d’Apothéose
                et un dossier professionnel qui m’ont permis de décrire mon
                expérience professionnelle acquise en cours de formation, en
                accord avec chacune des compétences du Titre et ainsi, prouver
                que j’étais capable d’exercer le métier de Développeur Web de
                façon professionnelle.
              </p>
              <p>
                Le titre professionnel est une certification professionnelle
                délivrée, au nom de L’Etat, par le ministère chargé de l’emploi.
                <br></br>
                O’clock est un centre d’examen agrée par le ministère et
                respecte un cahier des charges précis quant aux modalités de
                contrôle continu et présentation des stagiaires aux sessions de
                validation. <br></br>Le référentiel de certification du Titre
                Professionnel Développer Web et Web Mobile est le suivant :
              </p>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>
                  Activité n°1 : Développer la partie front-end d’une
                  application web ou web mobile en intégrant les recommandations
                  de sécurité
                </p>
                <ul className={styles.list}>
                  <li>Maquetter une application</li>
                  <li>
                    Réaliser une interface utilisateur web statique et adaptable
                  </li>
                  <li>Développer une interface utilisateur web dynamique</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>
                  Activité n°2 : Développer la partie back-end d’une application
                  web ou web mobile en intégrant les recommandations de sécurité
                </p>
                <ul className={styles.list}>
                  <li>Créer une base de données</li>
                  <li>Développer les composants d’accès aux données</li>
                  <li>
                    Développer la partie back-end d’une application web ou web
                    mobile
                  </li>
                </ul>
              </div>
              <p>
                Un jury composé de professionnels habilités par le ministère
                chargé de l’emploi s’est alors prononcé sur ma maîtrise de ces
                compétences en se basant sur les éléments suivants :
              </p>
              <div className={styles.moduleContainer}>
                <ul className={styles.list}>
                  <li>
                    Épreuve de synthèse : dossier de présentation de mon travail
                  </li>
                  <li>
                    Dossier professionnel : description des activités réalisées
                    pendant la formation
                  </li>
                  <li>Résultats des évaluations en cours de formation (ECF)</li>
                  <li>
                    Entretien avec présentation du projet, questions du jury sur
                    le projet, questions du jury sur le parcours personnel et
                    dossier professionnel.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.secondSpecialisationContainer}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>Deuxième spécialisation</h3>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.secondSpecialisationContentContainer}>
              <p>
                Après l’obtention de mon Titre Professionnel, ayant accès aux
                replays des cours et aux fiches techniques de la spécialisation
                back-end : Data & Api, j’ai décidé de suivre cette formation de
                façon autonome
              </p>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module : SQL :</p>
                <ul className={styles.list}>
                  <li>Manipulation de données structurées</li>
                  <li>Systèmes SQL</li>
                  <li>Procédures stockées</li>
                  <li>Agrégats</li>
                  <li>DV (visualisation)</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module : API DATA :</p>
                <ul className={styles.list}>
                  <li>Mise à niveau JavaScript/Node</li>
                  <li>Frameworks NodeJS</li>
                  <li>Programmation Fonctionnelle</li>
                  <li>Expressions Régulières </li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module : NoSql :</p>
                <ul className={styles.list}>
                  <li>Manipulation de données non structurées</li>
                  <li>Redis, MongoDB</li>
                  <li>GraphQL</li>
                  <li>Agrégats</li>
                </ul>
              </div>
              <div className={styles.moduleContainer}>
                <p className={styles.moduleTitle}>Module : DataScience :</p>
                <ul className={styles.list}>
                  <li>Principes de l’intelligence Artificielle</li>
                  <li>Machine Learning</li>
                  <li>Modèles prédictifs</li>
                  <li>Big DATA</li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className={styles.specialisationContainer}>
            <div className={styles.titleContainer}>
              <h3 className={styles.title}>Spécialisation</h3>
              <div className={styles.titleSeparator}></div>
            </div>
            <div className={styles.specialisationContentContainer}>
              <p>
                Le socle de connaissances nous a fourni des fondations solides.
                Après cela, nous avons eu la possibilité de nous concentrer sur
                une technologie durant un mois entier, afin de maîtriser
                l&apos;une des technologies les plus utilisées par les
                développeurs professionnels dans l&apos;écosystème JavaScript.
                Nous avions le choix entre React et Data & API. J&apos;ai opté
                pour la spécialisation React.
              </p>
            </div>
          </div> */}
        </section>
      </div>
    </main>
  );
}
