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
        </section>
      </div>
    </main>

    // <main>
    //   <div className={styles.skillsContainer}>
    //     <section className={styles.skillsCardContainer}>
    //       <div className={styles.skillsCard}>
    //         <div className={styles.skillsContentContainer}>
    //           <div className={styles.titleContainer}>
    //             <h2 className={styles.title}>My Skills</h2>
    //           </div>
    //           <div className={styles.skillsGridContainer}>
    //             {/* HTML --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>Html</p>
    //             </div>
    //             {/* CSS --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>Css</p>
    //             </div>
    //             {/* JavaScript --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>JavaScript</p>
    //             </div>
    //             {/* React --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>React</p>
    //             </div>
    //             {/* NextJs --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>NextJs</p>
    //             </div>
    //             {/* NodeJs --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>NodeJs</p>
    //             </div>

    //             {/* TypeScript --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>Typescript</p>
    //             </div>
    //             {/* SQL --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>SQL</p>
    //             </div>
    //             {/* PostgreSQL --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>PostgreSQL</p>
    //             </div>
    //             {/* GIT --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>GIT</p>
    //             </div>
    //             {/* Agile --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>Agile</p>
    //             </div>
    //             {/* Figma --> */}
    //             <div className={styles.itemContainer}>
    //               <Image
    //                 className={styles.itemIcon}
    //                 src={linkedin}
    //                 width={40}
    //                 height={40}
    //                 alt="Linkedin icon"
    //               />
    //               <p className={styles.itemName}>Figma</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section className={styles.formationContainer}>
    //       <div className={styles.formationPresentationContainer}>
    //         <div className={styles.titleContainer}>
    //           <h2 className={styles.title}>My formation</h2>
    //         </div>
    //         <div className={styles.formationPresentationContentContainer}>
    //           <p>
    //             J’ai choisi de faire ma reconversion professionnelle à l’école
    //             O’Clock en suivant la formation Développeur Web Fullstack
    //             JavaScript.
    //           </p>
    //           <p>
    //             Cette formation intensive, d’une durée de 6 mois, proposée sur
    //             le format téléprésentiel prépare au Titre Professionnel
    //             Développeur Web et Web Mobile. <br></br>Il s’agit d’un diplôme
    //             de niveau 5 (nomenclature Europe) correspondant au niveau III et
    //             inscrit au Répertoire National de la Certification
    //             Professionnelle (RNCP). <br></br>Le titre Professionnel est une
    //             certification professionnelle délivrée au nom de l’Etat par le
    //             ministère chargé de l’emploi.
    //           </p>
    //           <p>
    //             L’objectif de cette formation est de fournir des compétences clé
    //             aux apprenants, leur permettant d’être directement employables à
    //             la fin du cursus. Comme par exemple :
    //           </p>
    //           <ul className={styles.list}>
    //             <li>Intégrer des pages web en HTML et CSS</li>
    //             <li>Développer des fonctionnalités front-end en JavaScript</li>
    //             <li>Concevoir des interfaces utilisateur</li>
    //             <li>Concevoir, implémenter et utiliser des bases de données</li>
    //             <li>
    //               Développer une application serveur avec Node.js et Express
    //             </li>
    //             <li>
    //               Travailler en groupe sur un projet dans des conditions
    //               professionnelles.
    //             </li>
    //           </ul>
    //           <p>
    //             La formation a lieu tous les jours ouvrés de 9 h à 17 h. Après
    //             les cours, nous devions réaliser au minimum deux heures de
    //             travaux dirigés sous forme de challenge, mini-projet,
    //             d’exercices, de tutoriels, de sessions de corrections de bug, de
    //             veille professionnel, de lecture de documentation techniques etc
    //             … <br></br>Ces travaux dirigés permettent d’approfondir les
    //             sujets vus en cours durant la journée, de découvrir de nouvelles
    //             notions (pédagogie inversée) et d’apprendre à collaborer sur des
    //             projets en équipe. <br></br> L’évaluation des compétences est
    //             assurée durant la totalité de la formation grâce à un contrôle
    //             continu des travaux dirigés, d’évaluations en cours de
    //             formation, d’entretiens individuels et de conseils de classe
    //             interne entre chaque saison. Puis lors du contrôle final qui est
    //             la session de validation du Titre Professionnel.
    //           </p>
    //           <p>
    //             La formation est structurée en 4 phases distinctes : d’abord, le
    //             socle, suivit par un mois de spécialisation. Ensuite, vient le
    //             projet d’apothéose et enfin, le dernier mois est consacré à la
    //             préparation de la soutenance finale
    //           </p>
    //         </div>
    //       </div>

    //       <div className={styles.socleContainer}>
    //         <div className={styles.titleContainer}>
    //           <h2 className={styles.title}>Le socle</h2>
    //           <div className={styles.titleSeparator}></div>
    //         </div>
    //         <div className={styles.socleContentContainer}>
    //           <p>
    //             Le Socle est le nom donné à la première phase de la formation.
    //             Nous sommes formés aux langages et aux technologies qui
    //             constitueront une base de compétences. On apprend à utiliser les
    //             langages HTML, CSS, JavaScript, SQL et à utiliser Node.js à
    //             travers de multiples activités pédagogiques. Nous sommes
    //             également évalués tout au long du parcours, sur la base des
    //             compétences du référentiel du Titre Professionnel.
    //           </p>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </main>
  );
}
